const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma.json', 'utf8'));

// Find a node by name or characters
function searchNodes(node, query, results = []) {
  if (node.name && node.name.toLowerCase().includes(query.toLowerCase())) {
    results.push(node);
  } else if (node.characters && node.characters.toLowerCase().includes(query.toLowerCase())) {
    results.push(node);
  }
  
  if (node.children) {
    for (const child of node.children) {
      searchNodes(child, query, results);
    }
  }
  return results;
}

// Simple tree printer
function printTree(node, depth = 0) {
  const indent = '  '.repeat(depth);
  let info = `${node.type} - ${node.name}`;
  if (node.characters) {
    info += ` ("${node.characters.substring(0, 30)}")`;
  }
  if (node.layoutMode) {
    info += ` [Layout: ${node.layoutMode}, spacing: ${node.itemSpacing}, padding: ${node.paddingTop}]`;
  }
  console.log(`${indent}${info}`);
  
  if (node.children) {
    for (const child of node.children) {
      printTree(child, depth + 1);
    }
  }
}

// Find Homepage frame
const homepageFrames = searchNodes(data.document, 'Homepage').filter(n => n.type === 'FRAME' || n.type === 'CANVAS');

if (homepageFrames.length > 0) {
  console.log('--- HOMEPAGE STRUCTURE ---');
  // Usually the first level children of the canvas are the top level frames (like "Homepage (Desktop)")
  // Let's just print the children of the first matching frame that looks like a root frame
  const homepage = homepageFrames.find(n => n.type === 'FRAME' && n.name.toLowerCase().includes('homepage')) || homepageFrames[0];
  
  if (homepage) {
    printTree(homepage);
  }
} else {
  console.log('Homepage frame not found.');
}
