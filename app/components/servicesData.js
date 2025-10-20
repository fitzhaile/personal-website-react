/**
 * ===== SERVICES DATA =====
 * Service offerings and case study content
 * 
 * Each service includes:
 * - slug: URL-friendly identifier
 * - title: Service name
 * - content: HTML string with service description and bullet points
 * - hasCaseStudy: Boolean flag to show/hide "View Example" link
 * - caseStudy: (optional) Object with subtitle and HTML content
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
    hasCaseStudy: false
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
        <p class="case-study__paragraph">Before this work began, marketing lacked a consistent way to see which efforts were performing well. Data was fragmented across multiple sites, and the team had no standardized way to measure conversions or understand user behavior from start to finish. The absence of a structured reporting framework made it difficult to evaluate return on investment, track engagement trends, or understand how users interacted with digital content.</p>

        <h3 class="case-study__section-title">Approach</h3>

        <h4 class="case-study__subsection-title">Acquisition and Conversion Reporting</h4>
        <p class="case-study__paragraph">A new event-based measurement strategy was implemented to capture key interactions such as donations, purchases, and engagement actions. The marketing team gained visibility into where users were coming from, how they engaged across channels, and what influenced conversion outcomes.</p>
        <ul class="case-study__list">
          <li class="case-study__list-item">Deployed custom event tracking to measure donations, purchases, and key engagement actions</li>
          <li class="case-study__list-item">Built automated reports tracking conversion rate, engagement rate, revenue, and average purchase value</li>
          <li class="case-study__list-item">Created segmentation by source, medium, campaign, and user characteristics</li>
          <li class="case-study__list-item">Enabled comparison across channels to identify which initiatives drove the most value</li>
        </ul>

        <h4 class="case-study__subsection-title">User Behavior and Funnel Analysis</h4>
        <p class="case-study__paragraph">To help interpret how visitors moved through the purchase and donation process, a series of user funnels was developed to visualize the complete user journey.</p>
        <ul class="case-study__list">
          <li class="case-study__list-item">Mapped drop-off points throughout the donation and purchase process</li>
          <li class="case-study__list-item">Analyzed conversion rate variations across acquisition channels and devices</li>
          <li class="case-study__list-item">Identified audience segments with the highest and lowest completion rates</li>
          <li class="case-study__list-item">Revealed opportunities for optimization such as form simplification and improved calls to action</li>
        </ul>

        <h4 class="case-study__subsection-title">Reporting and Accessibility</h4>
        <p class="case-study__paragraph">The new framework consolidated marketing metrics into visual, easily interpreted reports. Each report focused on actionable insights and sustainability.</p>
        <ul class="case-study__list">
          <li class="case-study__list-item">Created dashboards showing what was changing, drivers of change, and where to focus next</li>
          <li class="case-study__list-item">Designed reports for non-technical users to interpret trends independently</li>
          <li class="case-study__list-item">Provided training on maintaining reports and applying insights to future campaigns</li>
          <li class="case-study__list-item">Made analytics a functional part of everyday decision-making, not just a reporting exercise</li>
        </ul>

        <h4 class="case-study__subsection-title">Cross-Site and Campaign Attribution</h4>
        <p class="case-study__paragraph">An additional layer of work unified tracking across the organization's digital properties to create a complete picture of marketing effectiveness.</p>
        <ul class="case-study__list">
          <li class="case-study__list-item">Mapped user journeys between informational and transactional sites</li>
          <li class="case-study__list-item">Passed campaign tracking data across domains to maintain attribution</li>
          <li class="case-study__list-item">Connected awareness-driven campaigns directly to completed actions and donations</li>
          <li class="case-study__list-item">Enabled the team to identify which marketing activities generated meaningful outcomes, not just traffic</li>
        </ul>

        <h3 class="case-study__section-title">Outcome</h3>
        <p class="case-study__paragraph">The project established a complete, scalable foundation for marketing analytics. The team now has reliable visibility into acquisition, engagement, and conversion performance, supported by clear and consistent data. With actionable insights replacing guesswork, the marketing team is able to plan campaigns, evaluate results, and adapt strategies with confidence.</p>
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
    hasCaseStudy: false
  },
];

