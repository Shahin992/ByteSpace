const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma.json', 'utf8'));

const canvas = data.document.children[0];
for (const child of canvas.children) {
  console.log(`${child.type} - ${child.name}`);
}

