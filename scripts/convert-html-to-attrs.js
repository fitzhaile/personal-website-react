/**
 * Convert HTML tags back to markdown {.classname} syntax
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function htmlToAttrs(content) {
  let result = content;
  
  // Convert <h3 class="class-name">Heading</h3> to ### Heading {.class-name}
  result = result.replace(/<h3 class="([^"]+)">(.+?)<\/h3>/g, '### $2 {.$1}');
  
  // Convert <h4 class="class-name">Heading</h4> to #### Heading {.class-name}
  result = result.replace(/<h4 class="([^"]+)">(.+?)<\/h4>/g, '#### $2 {.$1}');
  
  // Convert <ul class="class-name"><li>items</li></ul> to markdown list with {.class-name}
  result = result.replace(/<ul class="([^"]+)">\n((?:\s*<li>.*?<\/li>\n)+)<\/ul>/g, (match, className, items) => {
    const listItems = items
      .split('\n')
      .filter(line => line.includes('<li>'))
      .map(line => {
        const content = line.replace(/\s*<li>(.+?)<\/li>/, '$1');
        return `- ${content}`;
      })
      .join('\n');
    
    return `${listItems}\n{.${className}}`;
  });
  
  return result;
}

// Process only -case.md files
const files = fs.readdirSync(caseStudiesDir)
  .filter(f => f.endsWith('-case.md'));

console.log('🔄 Converting HTML back to {.classname} syntax...\n');

files.forEach(file => {
  const filePath = path.join(caseStudiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const converted = htmlToAttrs(content);
  fs.writeFileSync(filePath, converted);
  console.log(`✅ Converted ${file}`);
});

console.log('\n✨ Files now use markdown {.classname} syntax!');

