const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma.json', 'utf8'));

// Find "Home" frame
const canvas = data.document.children[0];
const homeFrame = canvas.children.find(c => c.name === 'Home');

function printTextNodes(node, depth = 0) {
  const indent = '  '.repeat(depth);
  if (node.type === 'TEXT') {
    console.log(`${indent}TEXT: ${node.characters}`);
  } else {
    if (node.name) {
      console.log(`${indent}[Group: ${node.name}]`);
    }
    if (node.children) {
      for (const child of node.children) {
        printTextNodes(child, depth + 1);
      }
    }
  }
}

if (homeFrame) {
  printTextNodes(homeFrame);
} else {
  console.log("Home frame not found");
}

