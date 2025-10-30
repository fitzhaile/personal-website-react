/**
 * Convert markdown files with {.classname} syntax to MDX with JSX
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function markdownToMDX(content) {
  let result = content;
  
  // Convert heading with class: ### Heading {.class-name} -> <h3 className="class-name">Heading</h3>
  result = result.replace(/^### (.+?) \{\.([^}]+)\}$/gm, '<h3 className="$2">$1</h3>');
  result = result.replace(/^#### (.+?) \{\.([^}]+)\}$/gm, '<h4 className="$2">$1</h4>');
  
  // Convert lists with class on next line
  result = result.replace(/((?:^- .+$\n?)+)\n?\{\.([^}]+)\}/gm, (match, listItems, className) => {
    const items = listItems.trim().split('\n').map(line => {
      const content = line.replace(/^- /, '');
      return `  <li>${content}</li>`;
    }).join('\n');
    return `<ul className="${className}">\n${items}\n</ul>`;
  });
  
  return result;
}

// Rename .md files to .mdx and convert syntax
const files = fs.readdirSync(caseStudiesDir)
  .filter(f => f.endsWith('.md'));

console.log('🔄 Converting to MDX format...\n');

files.forEach(file => {
  const oldPath = path.join(caseStudiesDir, file);
  const newPath = path.join(caseStudiesDir, file.replace('.md', '.mdx'));
  
  const content = fs.readFileSync(oldPath, 'utf8');
  const mdxContent = markdownToMDX(content);
  
  fs.writeFileSync(newPath, mdxContent);
  fs.unlinkSync(oldPath); // Remove old .md file
  
  console.log(`✅ ${file} → ${file.replace('.md', '.mdx')}`);
});

console.log('\n✨ Files converted to MDX with JSX syntax!');

