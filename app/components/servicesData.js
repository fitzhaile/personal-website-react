/**
 * ===== SERVICES DATA =====
 * Service offerings and case study content
 * 
 * STRUCTURE OVERVIEW:
 * This file imports markdown files for service content and case studies.
 * Each service object represents one service card on the website.
 * 
 * MARKDOWN FILES:
 * Content is stored in separate markdown files in the case-studies/ directory:
 * - {slug}-card.md: Brief service description for the card preview
 * - {slug}-case.md: Full case study content (if hasCaseStudy is true)
 * 
 * Markdown files use {.classname} syntax for CSS classes (markdown-it-attrs format)
 * Example: ### Challenge {.case-study__section-title}
 * Example: - List item\n{.case-study__list}
 * Rendered client-side with markdown-it parser in Services.js
 * 
 * EACH SERVICE OBJECT CONTAINS:
 * 
 * @property {string} slug - URL-friendly identifier used for routing
 *   - Example: "donor-industry-insight" becomes "/case-studies/donor-industry-insight"
 *   - Must be unique and match the route in page.js
 *   - Use lowercase, hyphen-separated format (kebab-case)
 * 
 * @property {string} title - Service name displayed as card heading
 *   - Keep concise (2-5 words ideal)
 *   - This appears in both the card and case study modal
 * 
 * @property {string} content - Markdown string imported from {slug}-card.md
 *   - Edit the corresponding markdown file in case-studies/ directory
 *   - Rendered using markdown-it with markdown-it-attrs in Services.js
 * 
 * @property {boolean} hasCaseStudy - Controls "View Example" link visibility
 *   - true: Shows "View Example →" link and makes card clickable
 *   - false: No link, card is static (for services without case studies yet)
 * 
 * @property {object} [caseStudy] - (Optional) Full case study content
 *   - Only required if hasCaseStudy is true
 *   - Contains two properties:
 *     - subtitle: Brief case study tagline (1 sentence)
 *     - content: Markdown string imported from {slug}-case.md
 * 
 * ADDING A NEW SERVICE:
 * 1. Create markdown files: {slug}-card.md and {slug}-case.md (if has case study)
 * 2. Add import statements at the top of this file
 * 3. Add service object to the services array
 * 4. Add the new route to generateStaticParams() in app/[[...section]]/page.js
 * 
 * EDITING CONTENT:
 * - Edit the markdown files directly in app/components/case-studies/
 * - Use {.classname} syntax to add CSS classes to elements
 * - Changes will be reflected after rebuilding the site (npm run build)
 */

// Import card content (brief service descriptions)
import donorInsightCard from './case-studies/donor-industry-insight-card.md';
import googleAnalyticsCard from './case-studies/google-analytics-card.md';
import dataManagementCard from './case-studies/data-management-card.md';
import systemsOptimizationCard from './case-studies/systems-optimization-card.md';

// Import case study content (full detailed case studies)
import donorInsightCaseStudy from './case-studies/donor-industry-insight-case.md';
import googleAnalyticsCaseStudy from './case-studies/google-analytics-case.md';
import systemsOptimizationCaseStudy from './case-studies/systems-optimization-case.md';

export const services = [
  {
    slug: "donor-industry-insight",
    title: "Donor & Industry Insight",
    content: donorInsightCard,
    hasCaseStudy: true,
    caseStudy: {
      subtitle: "Using data to uncover new opportunities for workplace giving",
      content: donorInsightCaseStudy
    }
  },
  {
    slug: "google-analytics",
    title: "Google Analytics & Campaign Insight",
    content: googleAnalyticsCard,
    hasCaseStudy: true,
    caseStudy: {
      subtitle: "Building a Marketing Analytics Framework",
      content: googleAnalyticsCaseStudy
    }
  },
  {
    slug: "data-management",
    title: "Data Management & Quality Control",
    content: dataManagementCard,
    hasCaseStudy: false
  },
  {
    slug: "systems-optimization",
    title: "Systems & Process Optimization",
    content: systemsOptimizationCard,
    hasCaseStudy: true,
    caseStudy: {
      subtitle: "Aligning communication and project management",
      content: systemsOptimizationCaseStudy
    }
  }
];
