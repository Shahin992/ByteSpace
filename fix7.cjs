const fs = require('fs');

const heroPath = '/home/shahin/Personal Project/ByteSpace/frontend/src/components/sections/HeroSection/HeroSection.tsx';
let hero = fs.readFileSync(heroPath, 'utf8');

// Fix asset extensions
hero = hero.replace(/\.png/g, '.svg');

// Fix background and grid
hero = hero.replace(/backgroundColor: '#0732E9',/g, "backgroundColor: '#0034FF',");
hero = hero.replace(/rgba\(255, 255, 255, 0\.07\)/g, "rgba(255, 255, 255, 0.15)");

// Fix search bar to use InputBase instead of TextField
hero = hero.replace(/import \{\n  Box,\n  Container,\n  Typography,\n  TextField,/g, "import {\n  Box,\n  Container,\n  Typography,\n  InputBase,");
hero = hero.replace(/<TextField\s+placeholder="Course, topic, creator"\s+variant="standard"\s+value=\{query\}\s+onChange=\{\(e\) => setQuery\(e.target.value\)\}\s+onKeyDown=\{\(e\) => e.key === 'Enter' && handleSearch\(\)\}\s+fullWidth\s+InputProps=\{\{\s+disableUnderline: true,\s+style: \{ fontWeight: 500, fontSize: '1rem' \}\s+\}\}\s+\/>/m, `<InputBase
            placeholder="Course, topic, creator"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            fullWidth
            sx={{ ml: 1, flex: 1, fontWeight: 500, fontSize: '1rem' }}
          />`);

// Remove maxWidth constraint on h1 that might cause wrapping
hero = hero.replace(/maxWidth: 900,/g, 'maxWidth: "100%",');
hero = hero.replace(/<br\/>/g, '<br />');

fs.writeFileSync(heroPath, hero, 'utf8');

const navPath = '/home/shahin/Personal Project/ByteSpace/frontend/src/components/common/Navbar/Navbar.tsx';
let nav = fs.readFileSync(navPath, 'utf8');

// Fix Nav Links
nav = nav.replace(/const navLinks = \[\s+\{ label: 'Home', path: '\/' \},\s+\{ label: 'Courses', path: '\/courses' \},\s+\{ label: 'Instructors', path: '\/instructors' \},\s+\{ label: 'About', path: '\/about' \},\s+\{ label: 'Blog', path: '\/blog' \},\s+\];/m, `const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Creators', path: '/instructors' },
];`);

// Fix CTA Buttons
nav = nav.replace(/import SchoolIcon from '@mui\/icons-material\/School';/g, "import SchoolIcon from '@mui/icons-material/School';\nimport LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';");

nav = nav.replace(/<Button\s+component=\{Link\}\s+to="\/login"\s+sx=\{\{\s+color: trigger \? 'text\.primary' : '#fff',\s+fontWeight: 600,\s+borderRadius: 50,\s+\}\}\s+>\s+Log In\s+<\/Button>\s+<Button\s+component=\{Link\}\s+to="\/signup"\s+variant="contained"\s+sx=\{\{\s+bgcolor: '#BEFF00',\s+color: '#050505',\s+fontWeight: 700,\s+borderRadius: 50,\s+'&:hover': \{ bgcolor: '#CCFF00' \},\s+\}\}\s+>\s+Sign Up Free\s+<\/Button>/m, `<Button
                    component={Link}
                    to="/login"
                    sx={{
                      color: trigger ? 'text.primary' : '#fff',
                      fontWeight: 500,
                      textTransform: 'none',
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    component={Link}
                    to="/signup"
                    sx={{
                      color: trigger ? 'text.primary' : '#fff',
                      fontWeight: 500,
                      textTransform: 'none',
                    }}
                  >
                    Join Us
                  </Button>
                  <IconButton sx={{ color: trigger ? 'text.primary' : '#fff', ml: 1 }}>
                    <LocalMallOutlinedIcon />
                  </IconButton>`);

fs.writeFileSync(navPath, nav, 'utf8');
