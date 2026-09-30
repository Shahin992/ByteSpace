const fs = require('fs');
const https = require('https');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FILE_KEY;

const options = {
  headers: {
    'X-Figma-Token': FIGMA_TOKEN
  }
};

https.get(`https://api.figma.com/v1/files/${FILE_KEY}`, options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('figma.json', data);
    console.log('Figma JSON saved to figma.json');
  });
});
