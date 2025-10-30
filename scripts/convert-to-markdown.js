/**
 * Conversion script: HTML → Markdown
 * Converts HTML content in servicesData.js to separate markdown files
 * Preserves classes using {.classname} syntax for remark-attr
 */

const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');

// Configure turndown for clean markdown output
const turndownService = new TurndownService({
  headingStyle: 'atx',
  hr: '---',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  emDelimiter: '*'
});

// Custom rule to preserve CSS classes as {.classname}
turndownService.addRule('preserveClasses', {
  filter: (node) => {
    return node.className && node.className.trim() !== '';
  },
  replacement: (content, node) => {
    const tagName = node.tagName.toLowerCase();
    const classes = Array.from(node.classList)
      .map(c => `.${c}`)
      .join(' ');
    
    if (tagName === 'h3') {
      return `### ${content} {${classes}}\n\n`;
    } else if (tagName === 'h4') {
      return `#### ${content} {${classes}}\n\n`;
    } else if (tagName === 'ul') {
      // For lists, class annotation goes after the list content
      return content + `{${classes}}\n\n`;
    } else if (tagName === 'p' && node.classList.length) {
      return `${content} {${classes}}\n\n`;
    }
    
    // Return null to use default handling for other elements
    return null;
  }
});

// Import the services data
const { services } = require('../app/components/servicesData.js.original');

console.log('🔄 Converting HTML to Markdown...\n');

// Convert each service and create markdown files
services.forEach((service, index) => {
  console.log(`Processing: ${service.title}`);
  
  // Convert card content
  const cardMarkdown = turndownService.turndown(service.content.trim());
  const cardFilename = `${service.slug}-card.md`;
  const cardPath = path.join(__dirname, '..', 'app', 'components', 'case-studies', cardFilename);
  fs.writeFileSync(cardPath, cardMarkdown);
  console.log(`  ✅ Created ${cardFilename}`);
  
  // Convert case study content if it exists
  if (service.caseStudy) {
    const caseStudyMarkdown = turndownService.turndown(service.caseStudy.content.trim());
    const caseStudyFilename = `${service.slug}.md`;
    const caseStudyPath = path.join(__dirname, '..', 'app', 'components', 'case-studies', caseStudyFilename);
    fs.writeFileSync(caseStudyPath, caseStudyMarkdown);
    console.log(`  ✅ Created ${caseStudyFilename}`);
  }
});

console.log('\n✨ Conversion complete!');
console.log('📁 Markdown files created in: app/components/case-studies/');
console.log('\nNext steps:');
console.log('1. Review the markdown files');
console.log('2. Update servicesData.js to import these files');
console.log('3. Update Services.js to use ReactMarkdown');

