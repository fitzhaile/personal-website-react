/**
 * Conversion script: Markdown → HTML
 * Converts markdown files back to HTML in servicesData.js
 * Preserves classes from {.classname} syntax
 */

const { unified } = require('unified');
const remarkParse = require('remark-parse');
const remarkAttr = require('remark-attr');
const remarkRehype = require('remark-rehype');
const rehypeStringify = require('rehype-stringify');
const fs = require('fs');
const path = require('path');

async function markdownToHtml(markdown) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkAttr)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  
  return String(file);
}

async function convertToHtml() {
  console.log('🔄 Converting Markdown to HTML...\n');

  const caseStudiesDir = path.join(__dirname, '..', 'app', 'components', 'case-studies');
  
  // Read all markdown files
  const services = [
    {
      slug: 'donor-industry-insight',
      title: 'Donor & Industry Insight',
      hasCaseStudy: true,
      caseStudySubtitle: 'Using data to uncover new opportunities for workplace giving'
    },
    {
      slug: 'google-analytics',
      title: 'Google Analytics & Campaign Insight',
      hasCaseStudy: true,
      caseStudySubtitle: 'Building a Marketing Analytics Framework'
    },
    {
      slug: 'data-management',
      title: 'Data Management & Quality Control',
      hasCaseStudy: false
    },
    {
      slug: 'systems-optimization',
      title: 'Systems & Process Optimization',
      hasCaseStudy: true,
      caseStudySubtitle: 'Aligning communication and project management'
    }
  ];

  const convertedServices = [];

  for (const service of services) {
    console.log(`Processing: ${service.title}`);
    
    // Read card content
    const cardPath = path.join(caseStudiesDir, `${service.slug}-card.md`);
    const cardMarkdown = fs.readFileSync(cardPath, 'utf8');
    const cardHtml = await markdownToHtml(cardMarkdown);
    
    const serviceObj = {
      slug: service.slug,
      title: service.title,
      content: cardHtml,
      hasCaseStudy: service.hasCaseStudy
    };

    // Read case study content if exists
    if (service.hasCaseStudy) {
      const caseStudyPath = path.join(caseStudiesDir, `${service.slug}.md`);
      const caseStudyMarkdown = fs.readFileSync(caseStudyPath, 'utf8');
      const caseStudyHtml = await markdownToHtml(caseStudyMarkdown);
      
      serviceObj.caseStudy = {
        subtitle: service.caseStudySubtitle,
        content: caseStudyHtml
      };
    }

    convertedServices.push(serviceObj);
    console.log(`  ✅ Converted ${service.slug}`);
  }

  // Generate JavaScript file content with template literals
  let output = `/**
 * ===== SERVICES DATA (HTML VERSION) =====
 * Service offerings and case study content
 * Converted back from markdown to HTML format
 * 
 * This is the original HTML format - useful if you need to revert
 * or prefer HTML over markdown.
 */

export const services = [
`;

  convertedServices.forEach((service, index) => {
    output += `  {\n`;
    output += `    slug: "${service.slug}",\n`;
    output += `    title: "${service.title}",\n`;
    output += `    content: \`${service.content}\`,\n`;
    output += `    hasCaseStudy: ${service.hasCaseStudy}`;
    
    if (service.caseStudy) {
      output += `,\n    caseStudy: {\n`;
      output += `      subtitle: "${service.caseStudy.subtitle}",\n`;
      output += `      content: \`${service.caseStudy.content}\`\n`;
      output += `    }\n`;
    } else {
      output += '\n';
    }
    
    output += `  }${index < convertedServices.length - 1 ? ',' : ''}\n`;
  });

  output += `];\n`;

  // Backup current file
  const currentFile = path.join(__dirname, '..', 'app', 'components', 'servicesData.js');
  const backupFile = path.join(__dirname, '..', 'app', 'components', 'servicesData.js.markdown-backup');
  
  if (fs.existsSync(currentFile)) {
    fs.copyFileSync(currentFile, backupFile);
    console.log('\n📄 Current file backed up as: servicesData.js.markdown-backup');
  }

  // Write new HTML version
  fs.writeFileSync(currentFile, output);
  
  console.log('\n✨ Conversion complete!');
  console.log('📁 HTML version written to: app/components/servicesData.js');
  console.log('\nIMPORTANT: Update Services.js to use dangerouslySetInnerHTML instead of ReactMarkdown');
}

convertToHtml().catch(console.error);

