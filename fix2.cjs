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
    
    // Fix TypedUseSelectorHook
    content = content.replace(
      /import \{ TypedUseSelectorHook, useDispatch, useSelector \} from 'react-redux';/,
      "import { useDispatch, useSelector } from 'react-redux';\nimport type { TypedUseSelectorHook } from 'react-redux';"
    );
    
    // Fix InputProps typing in TextFields (change InputProps to slotProps={{ input: ... }})
    // For simplicity, just add variant="outlined" before InputProps
    content = content.replace(/<TextField([^>]*)InputProps=\{([^}]*)\}/g, '<TextField variant="outlined" $1 InputProps={$2}');
    
    // TestimonialsSection incorrect import
    if (file.includes('TestimonialsSection.tsx')) {
      content = content.replace(
        "import SectionTitle from '../../components/common/SectionTitle/SectionTitle';",
        "import SectionTitle from '../../common/SectionTitle/SectionTitle';"
      );
    }
    
    // AboutPage paragraph prop
    if (file.includes('AboutPage.tsx')) {
      content = content.replace(/paragraph>/g, "sx={{ mb: 2 }}>");
    }
    
    // CourseDetailPage Grid alignItems and ListItemText primaryTypographyProps
    if (file.includes('CourseDetailPage.tsx')) {
      content = content.replace(/alignItems="center"/g, 'sx={{ alignItems: "center" }}');
      content = content.replace(/primaryTypographyProps=\{\{ variant: 'body2', fontWeight: 500 \}\}/g, 'primaryTypographyProps={{ variant: "body2" }}');
    }

    fs.writeFileSync(file, content, 'utf8');
  }
});
