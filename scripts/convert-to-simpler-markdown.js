/**
 * Convert directive-wrapped markdown to a simpler format
 * Put headings and lists back to plain markdown, use component mapping
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function directivesToPlainMarkdown(content) {
  let clean = content;
  
  // Remove :::section-title wrappers around h3
  clean = clean.replace(/:::section-title\n### (.+?)\n:::/g, '### $1');
  
  // Remove :::subsection-title wrappers around h4
  clean = clean.replace(/:::subsection-title\n#### (.+?)\n:::/g, '#### $1');
  
  // Remove :::list wrappers, keep the list
  clean = clean.replace(/:::list\n((?:- .+\n)+):::/g, '$1');
  
  return clean;
}

// Process only -case.md files
const files = fs.readdirSync(caseStudiesDir)
  .filter(f => f.endsWith('-case.md'));

console.log('🔄 Simplifying markdown format...\n');

files.forEach(file => {
  const filePath = path.join(caseStudiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const simplified = directivesToPlainMarkdown(content);
  fs.writeFileSync(filePath, simplified);
  console.log(`✅ Simplified ${file}`);
});

console.log('\n✨ Markdown simplified - using component mapping for classes');

