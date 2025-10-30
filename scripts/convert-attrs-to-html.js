/**
 * Convert {.classname} attribute syntax to HTML tags
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function attrsToHtmlTags(content) {
  let result = content;
  
  // Convert ### Heading {.class-name} to <h3 class="class-name">Heading</h3>
  result = result.replace(/^### (.+?) \{\.([^}]+)\}$/gm, '<h3 class="$2">$1</h3>');
  
  // Convert #### Heading {.class-name} to <h4 class="class-name">Heading</h4>
  result = result.replace(/^#### (.+?) \{\.([^}]+)\}$/gm, '<h4 class="$2">$1</h4>');
  
  // Convert lists followed by {.class-name} to <ul class="class-name"><li>items</li></ul>
  result = result.replace(/((?:^- .+$\n?)+)\{\.([^}]+)\}/gm, (match, items, className) => {
    const listItems = items
      .trim()
      .split('\n')
      .filter(line => line.trim().startsWith('- '))
      .map(line => {
        const content = line.replace(/^- /, '');
        return `  <li>${content}</li>`;
      })
      .join('\n');
    
    return `<ul class="${className}">\n${listItems}\n</ul>`;
  });
  
  return result;
}

// Process only -case.md files
const files = fs.readdirSync(caseStudiesDir)
  .filter(f => f.endsWith('-case.md'));

console.log('🔄 Converting {.classname} syntax to HTML tags...\n');

files.forEach(file => {
  const filePath = path.join(caseStudiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const converted = attrsToHtmlTags(content);
  fs.writeFileSync(filePath, converted);
  console.log(`✅ Converted ${file}`);
});

console.log('\n✨ Classes are now in HTML tags!');
console.log('Example: <h3 class="case-study__section-title">Heading</h3>');

