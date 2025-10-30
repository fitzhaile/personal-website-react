/**
 * Convert clean markdown to use directive syntax for classes
 * This makes classes visible and editable in the markdown files
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function markdownToDirectives(content) {
  const lines = content.split('\n');
  const result = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Check for h3 headings (section titles)
    if (line.trim().startsWith('### ')) {
      const title = line.replace(/^###\s+/, '');
      result.push(`:::section-title`);
      result.push(`### ${title}`);
      result.push(`:::`);
      i++;
    }
    // Check for h4 headings (subsection titles)
    else if (line.trim().startsWith('#### ')) {
      const title = line.replace(/^####\s+/, '');
      result.push(`:::subsection-title`);
      result.push(`#### ${title}`);
      result.push(`:::`);
      i++;
    }
    // Check for list items
    else if (line.trim().startsWith('- ')) {
      // Collect all consecutive list items
      const listItems = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        listItems.push(lines[i]);
        i++;
      }
      // Wrap list in directive
      result.push(`:::list`);
      result.push(...listItems);
      result.push(`:::`);
    }
    // Regular line
    else {
      result.push(line);
      i++;
    }
  }
  
  return result.join('\n');
}

// Process only -case.md files
const files = fs.readdirSync(caseStudiesDir)
  .filter(f => f.endsWith('-case.md'));

console.log('🔄 Converting to directive syntax...\n');

files.forEach(file => {
  const filePath = path.join(caseStudiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const withDirectives = markdownToDirectives(content);
  fs.writeFileSync(filePath, withDirectives);
  console.log(`✅ Converted ${file}`);
});

console.log('\n✨ All case study files now use directive syntax!');
console.log('You can now see and edit classes directly in the markdown files.');

