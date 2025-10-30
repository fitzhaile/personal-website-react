/**
 * Convert HTML tags back to clean markdown
 * Removes HTML tags while preserving content structure
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function htmlToCleanMarkdown(content) {
  let clean = content;
  
  // Convert h3 tags to ### (keep tracking that they were section titles)
  clean = clean.replace(/<h3 class="case-study__section-title">(.+?)<\/h3>/g, '### $1');
  
  // Convert h4 tags to ####
  clean = clean.replace(/<h4 class="case-study__subsection-title">(.+?)<\/h4>/g, '#### $1');
  
  // Convert ul lists to markdown lists
  clean = clean.replace(/<ul class="case-study__list">\n((?:  <li>.*?<\/li>\n)+)<\/ul>/g, (match, items) => {
    const listItems = items
      .split('\n')
      .filter(line => line.includes('<li>'))
      .map(line => {
        const content = line.replace(/\s*<li>(.*?)<\/li>/, '$1');
        return `- ${content}`;
      })
      .join('\n');
    return listItems;
  });
  
  return clean;
}

// Process all markdown files
const files = fs.readdirSync(caseStudiesDir).filter(f => f.endsWith('.md'));

console.log('🔄 Converting to clean markdown...\n');

files.forEach(file => {
  const filePath = path.join(caseStudiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const clean = htmlToCleanMarkdown(content);
  fs.writeFileSync(filePath, clean);
  console.log(`✅ Cleaned ${file}`);
});

console.log('\n✨ All files converted to clean markdown!');

