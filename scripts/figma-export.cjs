const fs = require('fs');
const path = require('path');
const https = require('https');

// We will pass these as environment variables or arguments
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FILE_KEY;

if (!FIGMA_TOKEN || !FILE_KEY) {
  console.error("Missing FIGMA_TOKEN or FILE_KEY environment variables.");
  process.exit(1);
}

const API_BASE = 'https://api.figma.com/v1';

// Helpers
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 400) {
          if (res.statusCode === 429) {
            return reject(new Error('Rate limited! 429 Too Many Requests'));
          }
          return reject(new Error(`API Error ${res.statusCode}: ${data}`));
        }
        resolve(JSON.parse(data));
      });
    }).on('error', reject);
  });
}

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (res) => {
      if (res.statusCode >= 400) {
        return reject(new Error(`Failed to download image ${url}, status: ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

// Find all exportable nodes
function findExportableNodes(node, path = []) {
  let exportables = [];
  const currentPath = [...path, node.name];

  if (node.exportSettings && node.exportSettings.length > 0) {
    // Determine the format based on export settings (fallback to png)
    const format = node.exportSettings[0].format.toLowerCase() || 'png';
    exportables.push({
      id: node.id,
      name: node.name,
      format: format,
      path: currentPath
    });
  }

  if (node.children) {
    for (const child of node.children) {
      exportables = exportables.concat(findExportableNodes(child, currentPath));
    }
  }

  return exportables;
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  console.log(`Fetching Figma document: ${FILE_KEY}...`);
  try {
    const fileData = await fetchJson(`${API_BASE}/files/${FILE_KEY}`);
    console.log(`Document fetched. Title: ${fileData.name}`);

    const exportables = findExportableNodes(fileData.document);
    console.log(`Found ${exportables.length} exportable nodes.`);

    if (exportables.length === 0) {
      console.log("No exportable nodes found. Make sure you have set 'Export' settings on layers in Figma.");
      return;
    }

    // Batching to avoid URI too long and respect rate limits
    const BATCH_SIZE = 20;
    const allImages = {};

    for (let i = 0; i < exportables.length; i += BATCH_SIZE) {
      const batch = exportables.slice(i, i + BATCH_SIZE);
      const ids = batch.map(e => e.id).join(',');
      
      console.log(`Fetching image URLs for batch ${i / BATCH_SIZE + 1} (${batch.length} nodes)...`);
      
      const formats = new Set(batch.map(e => e.format));
      // For simplicity if mixed formats, we might fetch them separately, but typically we can specify the highest format needed or fetch png by default.
      // We will do a generic call and specify format in individual calls if needed, but Figma API allows a general format param.
      // We will assume SVG for vectors and PNG for others. We will just fetch SVG for all if it's mixed, but let's just group by format!
      
      // Better approach: group batch by format
      const formatGroups = {};
      for (const item of batch) {
        if (!formatGroups[item.format]) formatGroups[item.format] = [];
        formatGroups[item.format].push(item);
      }

      for (const [format, items] of Object.entries(formatGroups)) {
        const itemIds = items.map(e => e.id).join(',');
        const imageUrlData = await fetchJson(`${API_BASE}/images/${FILE_KEY}?ids=${itemIds}&format=${format}`);
        
        if (imageUrlData.images) {
          Object.assign(allImages, imageUrlData.images);
        }
        
        // Rate limit pause
        await sleep(2000);
      }
    }

    // Download images
    console.log("Starting downloads...");
    const publicDir = path.join(__dirname, '../public/assets/figma-export');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    for (const item of exportables) {
      const url = allImages[item.id];
      if (url) {
        // Create safe filename
        const safeName = item.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const destPath = path.join(publicDir, `${safeName}.${item.format}`);
        
        console.log(`Downloading ${item.name} -> ${destPath}`);
        await downloadImage(url, destPath);
      } else {
        console.warn(`No URL returned for ${item.name} (${item.id})`);
      }
    }

    console.log("Export complete!");
    
  } catch (error) {
    console.error("Error during export:", error.message);
  }
}

main();
