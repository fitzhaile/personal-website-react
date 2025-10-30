/**
 * Convert markdown with directives to HTML tags with visible classes
 * This preserves the exact HTML structure while keeping markdown for content
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function directivesToHtmlTags(content) {
  let result = content;
  
  // Convert :::section-title\n### Heading\n::: to <h3 class="case-study__section-title">Heading</h3>
  result = result.replace(/:::section-title\n### (.+?)\n:::/g, '<h3 class="case-study__section-title">$1</h3>');
  
  // Convert :::subsection-title\n#### Heading\n::: to <h4 class="case-study__subsection-title">Heading</h4>
  result = result.replace(/:::subsection-title\n#### (.+?)\n:::/g, '<h4 class="case-study__subsection-title">$1</h4>');
  
  // Convert :::list\n- items\n::: to <ul class="case-study__list"><li>items</li></ul>
  result = result.replace(/:::list\n((?:- .+\n)+):::/g, (match, items) => {
    const listItems = items
      .split('\n')
      .filter(line => line.trim().startsWith('- '))
      .map(line => {
        const content = line.replace(/^- /, '');
        return `  <li>${content}</li>`;
      })
      .join('\n');
    
    return `<ul class="case-study__list">\n${listItems}\n</ul>`;
  });
  
  return result;
}

// Process only -case.md files
const files = fs.readdirSync(caseStudiesDir)
  .filter(f => f.endsWith('-case.md'));

console.log('🔄 Converting to HTML tags with visible classes...\n');

files.forEach(file => {
  const filePath = path.join(caseStudiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const converted = directivesToHtmlTags(content);
  fs.writeFileSync(filePath, converted);
  console.log(`✅ Converted ${file}`);
});

console.log('\n✨ Classes are now visible as HTML attributes in markdown!');
console.log('Example: <h3 class="case-study__section-title">Heading</h3>');

