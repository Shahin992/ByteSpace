const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
};

const files = walk('/home/shahin/Personal Project/ByteSpace/frontend/src');

files.forEach(file => {
  if (file.endsWith('.ts') || file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix PayloadAction
    content = content.replace(/import \{ createSlice, PayloadAction \} from '@reduxjs\/toolkit';/g, "import { createSlice, type PayloadAction } from '@reduxjs/toolkit';");
    content = content.replace(/import \{ Course \} from '\.\.\/\.\.\/data\/courses';/g, "import type { Course } from '../../data/courses';");
    
    // Fix typography props
    content = content.replace(/<Typography([^>]*?)\sfontWeight=\{([^\}]+)\}([^>]*?)>/g, (match, p1, p2, p3) => {
      if (match.includes('sx={{')) {
        return match.replace('sx={{', `sx={{ fontWeight: ${p2}, `).replace(/fontWeight=\{[^\}]+\}\s*/, '');
      } else {
        return `<Typography${p1} sx={{ fontWeight: ${p2} }}${p3}>`;
      }
    });

    content = content.replace(/<Typography([^>]*?)\smb=\{([^\}]+)\}([^>]*?)>/g, (match, p1, p2, p3) => {
      if (match.includes('sx={{')) {
        return match.replace('sx={{', `sx={{ mb: ${p2}, `).replace(/mb=\{[^\}]+\}\s*/, '');
      } else {
        return `<Typography${p1} sx={{ mb: ${p2} }}${p3}>`;
      }
    });

    // Fix bad import
    content = content.replace(/from '\.\.\/\.\.\/common\/SectionTitle\/SectionTitle';/g, "from '../../components/common/SectionTitle/SectionTitle';");

    // Fix InputProps error by adding variant="outlined" to TextField
    content = content.replace(/<TextField([^>]*?)InputProps=\{/g, '<TextField variant="outlined" $1 InputProps={');
    
    fs.writeFileSync(file, content, 'utf8');
  }
});
