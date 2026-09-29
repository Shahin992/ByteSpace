const fs = require('fs');

function replaceFile(path, search, replacement) {
    if (!fs.existsSync(path)) return;
    const content = fs.readFileSync(path, 'utf8');
    const newContent = content.replace(search, replacement);
    if (content !== newContent) {
        fs.writeFileSync(path, newContent, 'utf8');
    }
}

replaceFile('/home/shahin/Personal Project/ByteSpace/frontend/src/hooks/useAppStore.ts', 
  /import \{ TypedUseSelectorHook, useDispatch, useSelector \} from ['"]react-redux['"];/,
  "import { useDispatch, useSelector } from 'react-redux';\nimport type { TypedUseSelectorHook } from 'react-redux';");

replaceFile('/home/shahin/Personal Project/ByteSpace/frontend/src/components/cards/CourseCard/CourseCard.tsx', 
  /import \{ Course \} from ['"]\.\.\/\.\.\/\.\.\/data\/courses['"];/,
  "import type { Course } from '../../../data/courses';");

replaceFile('/home/shahin/Personal Project/ByteSpace/frontend/src/components/cards/InstructorCard/InstructorCard.tsx', 
  /import \{ Instructor \} from ['"]\.\.\/\.\.\/\.\.\/data\/instructors['"];/,
  "import type { Instructor } from '../../../data/instructors';");

replaceFile('/home/shahin/Personal Project/ByteSpace/frontend/src/components/common/SectionTitle/SectionTitle.tsx', 
  /import \{ Box, Typography, SxProps, Theme \} from ['"]@mui\/material['"];/,
  "import { Box, Typography } from '@mui/material';\nimport type { SxProps, Theme } from '@mui/material';");

replaceFile('/home/shahin/Personal Project/ByteSpace/frontend/src/components/cards/BlogCard/BlogCard.tsx', 
  /import \{ BlogPost \} from ['"]\.\.\/\.\.\/\.\.\/data\/blog['"];/,
  "import type { BlogPost } from '../../../data/blog';");

replaceFile('/home/shahin/Personal Project/ByteSpace/frontend/src/components/cards/CategoryCard/CategoryCard.tsx', 
  /import \{ Category \} from ['"]\.\.\/\.\.\/\.\.\/data\/categories['"];/,
  "import type { Category } from '../../../data/categories';");

replaceFile('/home/shahin/Personal Project/ByteSpace/frontend/src/store/slices/coursesSlice.ts', 
  /import \{ Course \} from ['"]\.\.\/\.\.\/data\/courses['"];/,
  "import type { Course } from '../../data/courses';");
