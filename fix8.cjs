const fs = require('fs');

const heroPath = '/home/shahin/Personal Project/ByteSpace/frontend/src/components/sections/HeroSection/HeroSection.tsx';
let hero = fs.readFileSync(heroPath, 'utf8');

// Replace the entire shapes section
hero = hero.replace(/\{\/\* --- Floating 3D Shapes \(Placeholders\) ---\s*\*\/\}[\s\S]*?\{\/\* --- Text Content --- \*\/\}/, `{/* --- Floating 3D Shapes (Placeholders) --- */}
      {/* 1. Top Left Lime Zigzag */}
      <Box
        component="img"
        src="/assets/hero/green-zigzag.svg"
        alt=""
        sx={{
          position: 'absolute', top: '10%', left: { xs: '-10%', lg: '-2%' }, width: 300, height: 300,
          objectFit: 'contain', zIndex: 0,
          display: { xs: 'none', md: 'block' },
        }}
      />
      
      {/* 2. Middle Left White Zigzag (Small) */}
      <Box
        component="img"
        src="/assets/hero/white-zigzag-1.svg"
        alt=""
        sx={{
          position: 'absolute', top: '45%', left: '12%', width: 120, height: 120,
          objectFit: 'contain', zIndex: 0,
          display: { xs: 'none', md: 'block' },
        }}
      />
      
      {/* 3. Bottom Left White Donut */}
      <Box
        component="img"
        src="/assets/hero/white-donut.svg"
        alt=""
        sx={{
          position: 'absolute', bottom: '0%', left: '2%', width: 280, height: 280,
          objectFit: 'contain', zIndex: 3,
          display: { xs: 'none', lg: 'block' },
        }}
      />
      
      {/* 4. Top Right Lime Cylinder */}
      <Box
        component="img"
        src="/assets/hero/green-cylinder.svg"
        alt=""
        sx={{
          position: 'absolute', top: '15%', right: { xs: '-10%', lg: '-5%' }, width: 350, height: 350,
          objectFit: 'contain', zIndex: 0,
          display: { xs: 'none', lg: 'block' },
        }}
      />
      
      {/* 5. Middle Right White Pyramid */}
      <Box
        component="img"
        src="/assets/hero/white-pyramid.svg"
        alt=""
        sx={{
          position: 'absolute', top: '45%', right: '12%', width: 160, height: 160,
          objectFit: 'contain', zIndex: 3,
          display: { xs: 'none', md: 'block' },
        }}
      />
      
      {/* 6. Bottom Right White Zigzag (Thick) */}
      <Box
        component="img"
        src="/assets/hero/white-zigzag-2.svg"
        alt=""
        sx={{
          position: 'absolute', bottom: '5%', right: '2%', width: 250, height: 250,
          objectFit: 'contain', zIndex: 3,
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* --- Text Content --- */}`);

// Fix the card positions to match exactly:
// Card 1: UI/UX Design -> Left middle-top
hero = hero.replace(/\{\/\* Card 1: UI\/UX Design \*\/\}\s*<Box\s*sx=\{\{\s*position: 'absolute',\s*top: '25%',\s*left: \{ xs: 0, md: '-5%' \},/, `{/* Card 1: UI/UX Design */}
          <Box
            sx={{
              position: 'absolute',
              top: '25%',
              left: { xs: 0, md: '-15%' },`);

// Card 2: Happy Students -> Left bottom
hero = hero.replace(/\{\/\* Card 2: Happy Students \*\/\}\s*<Box\s*sx=\{\{\s*position: 'absolute',\s*bottom: '15%',\s*left: \{ xs: '5%', md: '-10%' \},/, `{/* Card 2: Happy Students */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: { xs: '5%', md: '-20%' },`);

// Card 3: Learning Progress -> Right middle
hero = hero.replace(/\{\/\* Card 3: Learning Progress \*\/\}\s*<Box\s*sx=\{\{\s*position: 'absolute',\s*top: '35%',\s*right: \{ xs: 0, md: '-10%' \},/, `{/* Card 3: Learning Progress */}
          <Box
            sx={{
              position: 'absolute',
              top: '35%',
              right: { xs: 0, md: '-15%' },`);

fs.writeFileSync(heroPath, hero, 'utf8');

// Also recreate SVGs to match the shapes better
const svgs = {
  'green-zigzag.svg': \`<svg width="250" height="400" viewBox="0 0 250 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 50L200 150L50 250L200 350" stroke="#BEFF00" stroke-width="70" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>\`,
  'white-zigzag-1.svg': \`<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L100 60L20 100L100 140" stroke="white" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>\`,
  'white-donut.svg': \`<svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="125" cy="125" r="70" stroke="white" stroke-width="70" stroke-linecap="round"/>
  </svg>\`,
  'green-cylinder.svg': \`<svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="50" width="180" height="300" rx="40" fill="#BEFF00" transform="rotate(15)"/>
  </svg>\`,
  'white-pyramid.svg': \`<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,10 190,180 10,180" fill="white" transform="rotate(-15 100 100)"/>
  </svg>\`,
  'white-zigzag-2.svg': \`<svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 40L160 100L40 180L160 260" stroke="white" stroke-width="50" stroke-linecap="round" stroke-linejoin="round" transform="rotate(-10)"/>
  </svg>\`
};

for (const [name, content] of Object.entries(svgs)) {
  fs.writeFileSync(\`/home/shahin/Personal Project/ByteSpace/frontend/public/assets/hero/\${name}\`, content, 'utf8');
}
