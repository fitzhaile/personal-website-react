/**
 * Convert MDX with JSX back to pure markdown with {.classname} syntax
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function mdxToMarkdown(content) {
  let result = content;
  
  // Convert <h3 className="class-name">Heading</h3> to ### Heading {.class-name}
  result = result.replace(/<h3 className="([^"]+)">(.+?)<\/h3>/g, '### $2 {.$1}');
  result = result.replace(/<h4 className="([^"]+)">(.+?)<\/h4>/g, '#### $2 {.$1}');
  
  // Convert <ul className="class-name"><li>items</li></ul> to markdown list
  result = result.replace(/<ul className="([^"]+)">\n((?:\s*<li>.*?<\/li>\n?)+)<\/ul>/g, (match, className, items) => {
    const listItems = items
      .split('\n')
      .filter(line => line.trim().startsWith('<li>'))
      .map(line => {
        const content = line.replace(/\s*<li>(.+?)<\/li>/, '$1');
        return `- ${content}`;
      })
      .join('\n');
    
    return `${listItems}\n{.${className}}`;
  });
  
  return result;
}

// Rename .mdx files back to .md and convert syntax
const files = fs.readdirSync(caseStudiesDir)
  .filter(f => f.endsWith('.mdx'));

console.log('🔄 Converting MDX back to Markdown with {.classname} syntax...\n');

files.forEach(file => {
  const oldPath = path.join(caseStudiesDir, file);
  const newPath = path.join(caseStudiesDir, file.replace('.mdx', '.md'));
  
  const content = fs.readFileSync(oldPath, 'utf8');
  const markdownContent = mdxToMarkdown(content);
  
  fs.writeFileSync(newPath, markdownContent);
  fs.unlinkSync(oldPath);
  
  console.log(`✅ ${file} → ${file.replace('.mdx', '.md')}`);
});

console.log('\n✨ Files converted to pure Markdown with {.classname} syntax!');

