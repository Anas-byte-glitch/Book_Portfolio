const fs = require('fs');
const path = require('path');

const cssPath = 'C:\\Users\\Informatics\\.gemini\\antigravity-ide\\brain\\f0a732fb-f6ad-4a44-92e6-7d34352faf2d\\.system_generated\\steps\\224\\content.md';
const outputPath = path.join(__dirname, 'scratch_css.txt');

try {
  const content = fs.readFileSync(cssPath, 'utf8');
  
  // We want to find CSS rules. A rule starts with a selector and ends with }
  // Let's search for interesting classes
  const classes = [
    'hero-split', 'about-split', 'testimonial-marquee', 'client-',
    'review-', 'chapter-', 'cta-', 'blog-', 'footer', 'nav-', 'button-'
  ];
  
  // Let's split by selectors and rules.
  // A simple regex approach or index-based scan:
  let output = '';
  
  // We can scan lines and print matching blocks
  const lines = content.split('\n');
  let inBlock = false;
  let blockLines = [];
  let shouldInclude = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    blockLines.push(line);
    
    // Check if line contains any of our target classes
    if (classes.some(cls => line.includes(cls))) {
      shouldInclude = true;
    }
    
    if (line.includes('}')) {
      if (shouldInclude) {
        output += blockLines.join('\n') + '\n\n';
      }
      blockLines = [];
      shouldInclude = false;
    }
  }
  
  fs.writeFileSync(outputPath, output);
  console.log('CSS extracted successfully to scratch_css.txt');
} catch (e) {
  console.error('Error:', e);
}
