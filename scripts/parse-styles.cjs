const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma.json', 'utf8'));

const canvas = data.document.children[0];
const homeFrame = canvas.children.find(c => c.name === 'Home');

const colors = new Set();
const fonts = new Set();

function walk(node) {
  if (node.fills) {
    node.fills.forEach(f => {
      if (f.type === 'SOLID' && f.color) {
        const hex = rgbToHex(f.color.r, f.color.g, f.color.b);
        colors.add(hex);
      }
    });
  }
  if (node.style && node.style.fontFamily) {
    fonts.add(node.style.fontFamily + ' ' + node.style.fontWeight);
  }
  if (node.children) {
    node.children.forEach(walk);
  }
}

function rgbToHex(r, g, b) {
  const toHex = (c) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return '#' + toHex(r) + toHex(g) + toHex(b);
}

if (homeFrame) {
  walk(homeFrame);
  console.log('Colors:', Array.from(colors));
  console.log('Fonts:', Array.from(fonts));
}
