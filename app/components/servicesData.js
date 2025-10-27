/**
 * ===== SERVICES DATA =====
 * Service offerings and case study content
 * 
 * STRUCTURE OVERVIEW:
 * This file exports a services array containing all service offerings and their case studies.
 * Each service object represents one service card on the website.
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
 * @property {string} content - HTML string with service description
 *   - Can include <p> tags for paragraphs
 *   - Can include <ul> with <li> for bullet points
 *   - Can include <strong> for emphasis
 *   - This HTML is rendered using dangerouslySetInnerHTML in Services.js
 *   - Keep brief - this is the card preview, not the full case study
 * 
 * @property {boolean} hasCaseStudy - Controls "View Example" link visibility
 *   - true: Shows "View Example →" link and makes card clickable
 *   - false: No link, card is static (for services without case studies yet)
 * 
 * @property {object} [caseStudy] - (Optional) Full case study content
 *   - Only required if hasCaseStudy is true
 *   - Contains two properties:
 *     - subtitle: Brief case study tagline (1 sentence)
 *     - content: Full HTML content with detailed case study
 * 
 * CASE STUDY HTML STRUCTURE:
 * The case study content supports these HTML elements:
 * - <h3 class="case-study__section-title"> - Major section headers
 * - <h4 class="case-study__subsection-title"> - Subsection headers
 * - <p> - Regular paragraphs
 * - <ul class="case-study__list"> with <li> - Bullet points
 * - <strong> - Bold emphasis
 * 
 * ADDING A NEW SERVICE:
 * 1. Copy an existing service object as a template
 * 2. Update the slug (must be unique)
 * 3. Update the title
 * 4. Write the content (keep brief, 2-3 sentences + bullets)
 * 5. Set hasCaseStudy to false initially (or true if you have the case study ready)
 * 6. If hasCaseStudy is true, add the caseStudy object with subtitle and content
 * 7. Add the new route to generateStaticParams() in app/[[...section]]/page.js
 * 
 * BEST PRACTICES:
 * - Keep service card content concise (preview only)
 * - Use case studies for detailed examples and outcomes
 * - Maintain consistent HTML structure for styling
 * - Test the case study modal after adding new content
 * - Use descriptive slugs that match the service title
 */

export const services = [
  {
    slug: "donor-industry-insight",
    title: "Donor & Industry Insight",
    content: `
      <p>Turn data into direction — uncovering patterns, opportunities, and actionable insights.</p>
      <ul>
        <li>Conduct industry and donor analysis to identify sector-based fundraising potential.</li>
        <li>Design donor surveys to inform pricing and engagement strategies.</li>
        <li>Analyze caller characteristics and behavior to improve service outcomes.</li>
      </ul>
      `,
    hasCaseStudy: true,
    caseStudy: {
      subtitle: "Using data to uncover new opportunities for workplace giving",
      content: `
        <h3 class="case-study__section-title">Challenge</h3>
        <p>A regional nonprofit wanted a clearer view of where future workplace-giving growth could come from. The team already maintained strong relationships with major employers but sought a structured, data-driven way to identify which industries held the most potential for deeper engagement.</p>
        <p>The organization had extensive donor and campaign data, but it wasn't connected to the broader business landscape. Leadership wanted to see how its donor base aligned with the local economy and where additional outreach could have the greatest impact.</p>
        <ul class="case-study__list">
          <li>Donor, business, and corporate giving records were categorized differently and difficult to compare.</li>
          <li>There was no shared baseline showing which industries were over- or under-represented.</li>
          <li>Insights needed to be straightforward enough for staff and volunteer leaders to interpret easily.</li>
        </ul>

        <h3 class="case-study__section-title">Approach</h3>
        <p>The project developed a unified dataset linking donor information, business listings, and public labor data under a single industry classification system. This alignment made it possible to compare participation and potential across local sectors.</p>

        <h4 class="case-study__subsection-title">Data Integration and Analysis</h4>
        <ul class="case-study__list">
          <li><strong>Integrated data sources:</strong> Combined donor, corporate giving, and wage data to provide a full picture of the regional economy.</li>
          <li><strong>Opportunity scoring:</strong> Weighted employment, wages, donor participation, and leadership giving to identify sectors with the strongest growth potential.</li>
          <li><strong>Actionable materials:</strong> Produced concise industry summaries and ranked lists that supported planning and recruitment discussions.</li>
        </ul>

        <h4 class="case-study__subsection-title">Day-to-Day Impact</h4>
        <p>The framework made it easier for staff and volunteers to use data as part of everyday planning. Instead of relying on anecdotal impressions, leadership could view each industry through consistent metrics and focus outreach where opportunity was clearest.</p>
        <ul class="case-study__list">
          <li>Industry snapshots clarified where engagement could expand.</li>
          <li>Shared metrics improved coordination across departments.</li>
          <li>Campaign discussions became more data-driven and efficient.</li>
        </ul>

        <h4 class="case-study__subsection-title">Implementation</h4>
        <p>The analysis was designed to be simple to maintain and repeat annually. Key phases included:</p>
        <ul class="case-study__list">
          <li>Aligning donor and business data using a consistent industry classification.</li>
          <li>Calculating participation and wage-based opportunity indicators.</li>
          <li>Summarizing insights into briefs and ranked lists for leadership review.</li>
        </ul>

        <h4 class="case-study__subsection-title">Outcomes</h4>
        <p>The findings offered new perspective on the local economy and helped leadership focus planning where it could have the most impact.</p>
        <ul class="case-study__list">
          <li>Revealed several industries with untapped potential for engagement.</li>
          <li>Provided a replicable process for evaluating opportunity each year.</li>
          <li>Strengthened collaboration between fundraising and research teams.</li>
        </ul>

        <h4 class="case-study__subsection-title">Services Mapped to Outcomes</h4>
        <ul class="case-study__list">
          <li><strong>Donor & Industry Insight:</strong> Created a shared structure for connecting donor and business data to uncover sector-based opportunities.</li>
          <li><strong>Systems & Process Optimization:</strong> Delivered usable tools that turned analysis into everyday insight for planning discussions.</li>
          <li><strong>Data Management & Quality Control:</strong> Built a unified dataset designed for easy updates and continued expansion.</li>
        </ul>

        <h4 class="case-study__subsection-title">Representative Artifacts</h4>
        <ul class="case-study__list">
          <li>Industry opportunity brief with sector rankings</li>
          <li>Prioritized lead list for campaign planning</li>
          <li>Scoring workbook for sector comparison and analysis</li>
        </ul>

        <h4 class="case-study__subsection-title">Next Steps</h4>
        <p>Expand the model to additional industries, refresh data annually, and refine scoring based on observed campaign outcomes.</p>

        <h4 class="case-study__subsection-title">Outcome in One Sentence</h4>
        <p>A unified data framework gave the organization a clear, repeatable way to identify high-potential industries—turning existing information into practical guidance for future fundraising growth.</p>
        `
    }
  },
  { 
    slug: "google-analytics",
    title: "Google Analytics & Campaign Insight", 
    content: `
      <p>Measure what matters, translating web and campaign data into meaningful results.</p>
      <ul>
        <li>Measure campaign performance via acquisition and funnel analysis in Google Analytics.</li>
        <li>Build backend Google Analytics infrastructure for a new fundraising platform.</li>
        <li>Create performance reports to guide marketing and outreach decisions.</li>
      </ul>`,
    hasCaseStudy: true,
    caseStudy: {
      subtitle: "Building a Marketing Analytics Framework",
      content: `
        <h3 class="case-study__section-title">Challenge</h3>
        <p>Before this work began, marketing lacked a consistent way to see which of their campaign efforts were performing. Data was fragmented across multiple sites, and the team had no standardized way to measure conversions or understand user behavior from start to finish.</p>
        <p>The absence of a structured reporting framework made it difficult to evaluate return on investment, track engagement trends, or understand how users interacted with digital content.</p>
        <ul class="case-study__list">
          <li>Campaign data was scattered across multiple platforms with no unified view.</li>
          <li>No standardized conversion tracking or funnel analysis existed.</li>
          <li>Cross-site attribution was impossible, making ROI unclear.</li>
          <li>Marketing decisions were based on incomplete data and intuition rather than comprehensive insights.</li>
        </ul>

        <h3 class="case-study__section-title">Approach</h3>
        <p>A comprehensive analytics framework was built from the ground up, implementing event-based measurement, funnel analysis, cross-site tracking, and accessible reporting dashboards.</p>

        <h4 class="case-study__subsection-title">Acquisition and Conversion Reporting</h4>
        <p>A new event-based measurement strategy was implemented to capture key interactions such as donations, purchases, and engagement actions. The marketing team gained visibility into where users were coming from, how they engaged across channels, and what influenced conversion outcomes.</p>
        <ul class="case-study__list">
          <li>Deployed custom event tracking to measure donations, purchases, and key engagement actions.</li>
          <li>Built automated reports tracking conversion rate, engagement rate, revenue, and average purchase value.</li>
          <li>Created segmentation by source, medium, campaign, and user characteristics.</li>
          <li>Enabled comparison across channels to identify which initiatives drove the most value.</li>
        </ul>

        <h4 class="case-study__subsection-title">User Behavior and Funnel Analysis</h4>
        <p>To help interpret how visitors moved through the purchase and donation process, a series of user funnels was developed to visualize the complete user journey.</p>
        <ul class="case-study__list">
          <li>Mapped drop-off points throughout the donation and purchase process.</li>
          <li>Analyzed conversion rate variations across acquisition channels and devices.</li>
          <li>Identified audience segments with the highest and lowest completion rates.</li>
          <li>Revealed opportunities for optimization such as form simplification and improved calls to action.</li>
        </ul>

        <h4 class="case-study__subsection-title">Cross-Site Attribution</h4>
        <p>An additional layer of work unified tracking across the organization's digital properties to create a complete picture of marketing effectiveness.</p>
        <ul class="case-study__list">
          <li>Mapped user journeys between informational and transactional sites.</li>
          <li>Passed campaign tracking data across domains to maintain attribution.</li>
          <li>Connected awareness-driven campaigns directly to completed actions and donations.</li>
          <li>Enabled the team to identify which marketing activities generated meaningful outcomes, not just traffic.</li>
        </ul>

        <h4 class="case-study__subsection-title">Day-to-Day Impact</h4>
        <p>The new framework consolidated marketing metrics into visual, easily interpreted reports that became part of everyday decision-making.</p>
        <ul class="case-study__list">
          <li>Created dashboards showing what was changing, drivers of change, and where to focus next.</li>
          <li>Designed reports for non-technical users to interpret trends independently.</li>
          <li>Made analytics a functional part of everyday planning, not just a reporting exercise.</li>
        </ul>

        <h4 class="case-study__subsection-title">Implementation</h4>
        <p>The analytics framework was rolled out systematically to ensure adoption and sustainability:</p>
        <ul class="case-study__list">
          <li>Configured Google Analytics 4 with custom events and conversion tracking.</li>
          <li>Built automated dashboards and reports in Looker Studio.</li>
          <li>Provided training on maintaining reports and applying insights to future campaigns.</li>
          <li>Established regular review cycles to refine tracking and reporting based on team feedback.</li>
        </ul>

        <h4 class="case-study__subsection-title">Outcomes</h4>
        <p>The project established a complete, scalable foundation for marketing analytics. The team now has reliable visibility into acquisition, engagement, and conversion performance, supported by clear and consistent data.</p>
        <ul class="case-study__list">
          <li>Marketing team can now measure campaign ROI with confidence.</li>
          <li>Conversion funnel insights led to 25% improvement in donation completion rates.</li>
          <li>Cross-site attribution revealed which campaigns drive actual conversions vs. just traffic.</li>
          <li>Data-driven decision making replaced guesswork in campaign planning.</li>
        </ul>

        <h4 class="case-study__subsection-title">Services Mapped to Outcomes</h4>
        <ul class="case-study__list">
          <li><strong>Google Analytics & Campaign Insight:</strong> Built comprehensive measurement framework from event tracking to funnel analysis.</li>
          <li><strong>Systems & Process Optimization:</strong> Created accessible dashboards and training materials for sustainable adoption.</li>
          <li><strong>Data Management & Quality Control:</strong> Established data governance standards for accurate, consistent tracking.</li>
        </ul>

        <h4 class="case-study__subsection-title">Representative Artifacts</h4>
        <ul class="case-study__list">
          <li>Google Analytics 4 configuration with custom events and conversions</li>
          <li>Campaign performance dashboards in Looker Studio</li>
          <li>User funnel analysis reports with optimization recommendations</li>
          <li>Cross-site attribution tracking implementation documentation</li>
        </ul>

        <h4 class="case-study__subsection-title">Next Steps</h4>
        <p>Expand attribution modeling to include offline conversions, implement predictive analytics for campaign optimization, and integrate CRM data for complete customer journey visibility.</p>

        <h4 class="case-study__subsection-title">Outcome in One Sentence</h4>
        <p>A comprehensive analytics framework transformed marketing from intuition-based to data-driven, giving the team reliable visibility into what drives conversions and enabling confident campaign planning and optimization.</p>
      `
    }
  },
  { 
    slug: "data-management",
    title: "Data Management & Quality Control", 
    content: `
      <p>Ensure clean, consistent, and reliable data across complex organizational systems.</p>
      <ul>
        <li>Identify and correct data quality issues in large, multi-source databases.</li>
        <li>Develop and enforce consistent data collection and entry standards.</li>
        <li>Manage and refine datasets to support accurate and repeatable analysis.</li>
      </ul>`,
    hasCaseStudy: false
  },
  { 
    slug: "systems-optimization",
    title: "Systems & Process Optimization", 
    content: `
      <p>Improve how teams work by aligning tools, communication, and workflows for better outcomes.</p>
      <ul>
        <li>Advocate for and implement organization-wide communication and project management platforms.</li>
        <li>Improve data workflows to strengthen cross-department collaboration.</li>
        <li>Streamline reporting processes to reduce errors and improve efficiency.</li>
      </ul>`,
    hasCaseStudy: true,
    caseStudy: {
      subtitle: "Aligning communication and project management",
      content: `
        <h3 class="case-study__section-title">Challenge</h3>
        <p>A regional nonprofit wanted to improve how information and projects moved between departments. Daily communication was happening across too many disconnected tools—emails, texts, and isolated documents—causing delays and duplicated effort.</p>
        <p>The organization's communication and task management practices had grown organically over time. Each team had its own methods, which worked individually but didn't translate well across departments. The result was slow handoffs, lost information, and a lack of shared visibility.</p>
        <ul class="case-study__list">
          <li>Conversations were scattered across email and text, making updates hard to track.</li>
          <li>Ownership and responsibilities varied, creating uncertainty about next steps.</li>
          <li>Project boards differed by department, so progress and capacity were difficult to understand.</li>
          <li>Onboarding new staff required navigating a patchwork of tools and informal habits.</li>
        </ul>

        <h3 class="case-study__section-title">Approach</h3>
        <p>The organization introduced a unified "operating system" for teamwork. Slack became the space for discussion, and Monday.com became the space for action. A few key standards connected the two, keeping communication simple and work transparent.</p>

        <h4 class="case-study__subsection-title">Platform Selection and Design</h4>
        <ul class="case-study__list">
          <li><strong>Slack:</strong> Centralized real-time and asynchronous discussion in channels; searchable history replaced long email threads.</li>
          <li><strong>Monday.com:</strong> Standardized boards and templates with defined roles, timelines, and status updates.</li>
          <li><strong>Guidelines:</strong> A concise "When to use what" one-pager clarified when to use Slack, Monday.com, email, or text.</li>
          <li><strong>Standards:</strong> Lightweight norms around task assignment, notifications, and file sharing kept teams consistent without adding bureaucracy.</li>
        </ul>

        <h4 class="case-study__subsection-title">Template Development</h4>
        <p>Built three Monday.com templates—General, Events, and Training—with standardized columns, groups, and statuses that could be used across all departments.</p>
        <ul class="case-study__list">
          <li>Created consistent channel naming conventions in Slack.</li>
          <li>Clarified DM vs. channel use and set norms for tagging and mentions.</li>
          <li>Developed training board for hands-on learning without affecting live projects.</li>
        </ul>

        <h4 class="case-study__subsection-title">Day-to-Day Impact</h4>
        <p>Adoption of the new structure brought a noticeable shift in how teams worked together. Communication became more open, project tracking more predictable, and collaboration less dependent on specific individuals.</p>
        <ul class="case-study__list">
          <li>Teams shifted most project conversations into Slack channels, keeping discussion tied to relevant work.</li>
          <li>Project boards used shared templates, so every department followed a similar layout.</li>
          <li>Clear task ownership reduced confusion around accountability and next steps.</li>
          <li>Saved views and filters gave everyone—from contributors to managers—a real-time snapshot of progress.</li>
        </ul>

        <h4 class="case-study__subsection-title">Implementation</h4>
        <p>Implementation was done gradually, focusing on learning and consistency rather than speed. Each stage helped build shared habits and confidence across departments.</p>
        <ul class="case-study__list">
          <li><strong>Discovery workshops:</strong> Met with departments to map how work currently moved and where small changes could have a big impact.</li>
          <li><strong>Pilot rollout:</strong> Partnered with select teams to migrate existing work and refine structures before scaling organization-wide.</li>
          <li><strong>Training and support:</strong> Used the training board and quick reference guides to build comfort through hands-on practice.</li>
          <li><strong>Ongoing refinement:</strong> Held short check-ins to review progress, gather feedback, and make small iterative improvements.</li>
        </ul>

        <h4 class="case-study__subsection-title">Outcomes</h4>
        <p>Within a few months, staff reported noticeable improvements in how work flowed. Projects were easier to track, communication was more transparent, and onboarding new staff took less time.</p>
        <ul class="case-study__list">
          <li>Internal emails and texts decreased as conversations moved to Slack.</li>
          <li>Clearer ownership and fewer missed handoffs across projects.</li>
          <li>Standardized boards made portfolio-level tracking and reporting faster.</li>
          <li>Managers could review capacity and priorities without manual check-ins.</li>
          <li>Staff learned and adopted the new tools faster through structured templates and the training board.</li>
        </ul>

        <h4 class="case-study__subsection-title">Services Mapped to Outcomes</h4>
        <ul class="case-study__list">
          <li><strong>Systems & Process Optimization:</strong> Created consistency across tools and workflows so teams could collaborate smoothly regardless of department.</li>
          <li><strong>Data Management & Quality Control:</strong> Structured task and ownership data allowed for clearer reporting, visibility, and capacity planning.</li>
          <li><strong>Donor & Industry Insight:</strong> Improved data flows enabled better tracking of campaign progress and donor engagement activities.</li>
        </ul>

        <h4 class="case-study__subsection-title">Representative Artifacts</h4>
        <ul class="case-study__list">
          <li>Standardized Monday.com templates (General, Events, Training)</li>
          <li>Slack channel model and quick-start guide</li>
          <li>"When to use what" reference sheet</li>
          <li>Adoption snapshot and training participation tracker</li>
        </ul>

        <h4 class="case-study__subsection-title">Next Steps</h4>
        <p>Track monthly usage metrics and cross-department activity, introduce deeper Slack–Monday integrations for deadlines and notifications, and continue quarterly feedback loops to refine templates and training materials.</p>

        <h4 class="case-study__subsection-title">Outcome in One Sentence</h4>
        <p>A shared, predictable system—Slack for communication and Monday.com for projects—helped teams work together with less friction and greater visibility.</p>
        `
    }
  }
];

