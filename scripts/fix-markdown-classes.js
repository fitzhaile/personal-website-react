/**
 * Fix markdown files to use HTML tags for elements with classes
 * Converts {.classname} syntax to actual HTML tags
 */

const fs = require('fs');
const path = require('path');

const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');

function fixMarkdownClasses(content) {
  const lines = content.split('\n');
  const result = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Check if it's a list item
    if (line.trim().match(/^-\s+/)) {
      // Collect all list items
      const listItems = [];
      let listClass = null;
      
      while (i < lines.length && lines[i].trim().match(/^-\s+/)) {
        let item = lines[i].replace(/^-\s+/, '').trim();
        
        // Check if this item has a class annotation at the end
        const classMatch = item.match(/^(.+?)\{\.(.+?)\}$/);
        if (classMatch) {
          item = classMatch[1].trim();
          listClass = classMatch[2];
        }
        
        listItems.push(item);
        i++;
      }
      
      // Create the HTML list
      if (listClass) {
        result.push(`<ul class="${listClass}">`);
        listItems.forEach(item => {
          result.push(`  <li>${item}</li>`);
        });
        result.push('</ul>');
      } else {
        // Regular list without class
        listItems.forEach(item => {
          result.push(`- ${item}`);
        });
      }
    } else {
      // Regular line - just copy it
      result.push(line);
      i++;
    }
  }
  
  // Now fix headings with class syntax
  let fixed = result.join('\n');
  fixed = fixed.replace(/^### (.+?) \{\.(.+?)\}$/gm, '<h3 class="$2">$1</h3>');
  fixed = fixed.replace(/^#### (.+?) \{\.(.+?)\}$/gm, '<h4 class="$2">$1</h4>');
  
  return fixed;
}

// Process all markdown files
const files = fs.readdirSync(caseStudiesDir).filter(f => f.endsWith('.md'));

console.log('🔄 Fixing markdown class syntax...\n');

files.forEach(file => {
  const filePath = path.join(caseStudiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const fixed = fixMarkdownClasses(content);
  fs.writeFileSync(filePath, fixed);
  console.log(`✅ Fixed ${file}`);
});

console.log('\n✨ All markdown files updated to use HTML tags for classes');
