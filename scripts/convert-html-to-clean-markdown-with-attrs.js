/**
 * Convert HTML tags back to clean markdown with {.class} attribute syntax
 * This gives real markdown with visible, editable classes
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function htmlToMarkdownWithAttrs(content) {
  let result = content;
  
  // Convert <h3 class="case-study__section-title">Text</h3> to ### Text {.case-study__section-title}
  result = result.replace(/<h3 class="([^"]+)">(.+?)<\/h3>/g, '### $2 {.$1}');
  
  // Convert <h4 class="case-study__subsection-title">Text</h4> to #### Text {.case-study__subsection-title}
  result = result.replace(/<h4 class="([^"]+)">(.+?)<\/h4>/g, '#### $2 {.$1}');
  
  // Convert <ul class="..."><li>...</li></ul> to markdown list with class after
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

console.log('🔄 Converting to clean markdown with class attributes...\n');

files.forEach(file => {
  const filePath = path.join(caseStudiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const markdown = htmlToMarkdownWithAttrs(content);
  fs.writeFileSync(filePath, markdown);
  console.log(`✅ Converted ${file}`);
});

console.log('\n✨ Files now use clean markdown with {.classname} syntax!');
console.log('\nExample:');
console.log('### Heading {.case-study__section-title}');
console.log('- Item one');
console.log('- Item two');
console.log('{.case-study__list}');

