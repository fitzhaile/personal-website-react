# SEO Guide - Essential Meta Tags & Best Practices

This guide explains all the SEO meta tags configured in your website and how to optimize them further.

## 📋 Current SEO Setup

### Meta Tags Generated (Automatic via Next.js)

Your site now generates these HTML meta tags automatically:

```html
<!-- Primary SEO Tags -->
<title>Services | Fitz Haile</title>
<meta name="description" content="Data consulting services: donor & industry insights, Google Analytics expertise, data management, and systems optimization." />
<meta name="keywords" content="analytics, consulting, data strategy, data analytics, business intelligence, Savannah GA consultant, donor analytics, Google Analytics expert, systems optimization" />
<meta name="author" content="Fitz Haile" />
<meta name="creator" content="Fitz Haile" />

<!-- Robots -->
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

<!-- Canonical URL (prevents duplicate content issues) -->
<link rel="canonical" href="https://fitzhaile.com/services" />

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:url" content="https://fitzhaile.com/services" />
<meta property="og:site_name" content="Fitz Haile - Data & Analytics Consulting" />
<meta property="og:title" content="Services" />
<meta property="og:description" content="Data consulting services: donor & industry insights, Google Analytics expertise, data management, and systems optimization." />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Services" />
<meta name="twitter:description" content="Data consulting services: donor & industry insights, Google Analytics expertise, data management, and systems optimization." />
<meta name="twitter:creator" content="@fitzhaile" />

<!-- Viewport (added automatically by Next.js) -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## 🎯 What Each Tag Does

### Title Tag
```html
<title>Services | Fitz Haile</title>
```
- **Most important SEO tag**
- Appears in Google search results
- Appears in browser tabs
- **Best practices:**
  - Keep under 60 characters
  - Include primary keyword
  - Make it compelling for clicks
  - Format: `Page Name | Brand Name` (for subpages) or `Name - Service/Title - Location` (for homepage)
  
**Homepage vs. Subpage Titles:**
- **Homepage**: `Fitz Haile - Data & Analytics Consultant - Savannah, GA`
  - Includes name, service, and location for maximum SEO value
  - Clear job title helps search engines understand what you do
- **Subpages**: `Services | Fitz Haile`
  - Uses template format for consistent branding
  - Shorter, cleaner for better readability

**Choosing Your Homepage Title:**
Your homepage title is crucial—it's how Google introduces you. Consider:
- **What you do**: "Data & Analytics Consultant" is more searchable than "Data Driven Decision Making"
- **Keywords**: Include terms clients search for (analytics, consultant, data strategy)
- **Location**: If local clients matter, include your city/state
- **Clarity over creativity**: Descriptive beats clever in search results

### Meta Description
```html
<meta name="description" content="..." />
```
- Appears in Google search results below title
- Doesn't affect rankings but affects click-through rate
- **Best practices:**
  - Keep between 150-160 characters
  - Include call-to-action
  - Include primary keywords naturally
  - Make it compelling

### Canonical URL
```html
<link rel="canonical" href="https://fitzhaile.com/services" />
```
- Tells Google which version of a page is the "main" one
- Prevents duplicate content penalties
- Essential for SEO

### Robots Meta Tag
```html
<meta name="robots" content="index, follow" />
```
- `index`: Allow page in search results
- `follow`: Follow links on this page
- `noindex`: Don't show in search results (use for private pages)
- `nofollow`: Don't follow links (use carefully)

### Open Graph Tags (Facebook, LinkedIn)
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
```
- Controls how your page looks when shared on social media
- **Required for professional social sharing**
- Makes links look much better when shared

### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
```
- Controls how your page looks when shared on Twitter/X
- Options: `summary`, `summary_large_image`, `player`, `app`
- `summary_large_image` is most visually appealing

## ⚙️ How Title Generation Works

Your site uses **Next.js metadata API** with a smart title templating system:

### Server-Side Metadata (app/layout.js)
```javascript
title: {
  default: 'Fitz Haile - Data & Analytics Consultant - Savannah, GA',
  template: '%s | Fitz Haile',
}
```
- **default**: Used for homepage only
- **template**: Applied to all subpages (Services, About, Contact)
- Prevents duplication: Homepage doesn't use template to avoid "Fitz Haile | Fitz Haile"

### Page-Specific Metadata (app/[[...section]]/page.js)
```javascript
// Homepage omits title to use default from layout.js
if (section === 'home') {
  return {
    description: meta.description,
    // No title property = uses default from layout.js
  };
}

// Other pages provide title that gets templated
return {
  title: meta.title, // "Services" becomes "Services | Fitz Haile"
  description: meta.description,
};
```

### Client-Side Title Updates (HomePageClient.js)
Since this is a single-page app with smooth scrolling navigation, we also update `document.title` during client-side navigation:

```javascript
// Update title when navigating between sections
useEffect(() => {
  const titles = {
    home: 'Fitz Haile - Data & Analytics Consultant - Savannah, GA',
    services: 'Services | Fitz Haile',
    about: 'About | Fitz Haile',
    contact: 'Contact | Fitz Haile',
  };
  document.title = titles[section] || titles.home;
}, [section]);
```

This ensures:
- ✅ Correct title on initial page load (server-side)
- ✅ Updated title when clicking navigation links (client-side)
- ✅ Proper browser history titles
- ✅ Accurate titles for bookmarks

## 📝 Title Optimization Guide

### Common Title Mistakes to Avoid

❌ **Too Creative, Not Descriptive**
```
Bad:  "Turning Bits Into Insights"
Good: "Data & Analytics Consultant"
```
Clever phrases don't help people understand what you do or help Google rank you.

❌ **Duplicate Information**
```
Bad:  "Fitz Haile - Data Analyst | Fitz Haile"
Good: "Fitz Haile - Data Analyst - Savannah, GA"
```
Using your name twice wastes valuable characters.

❌ **Too Generic**
```
Bad:  "Consulting Services"
Good: "Data & Analytics Consultant - Savannah, GA"
```
Be specific about what type of consulting you offer.

❌ **Keyword Stuffing**
```
Bad:  "Data Analytics Consultant | Data Analysis | Business Intelligence | Data Strategy"
Good: "Data & Analytics Consultant - Savannah, GA"
```
Choose 1-2 primary keywords and sound natural.

❌ **Too Long**
```
Bad:  "Fitz Haile - Independent Data and Business Analytics Consultant Helping Organizations Make Smarter Decisions"
Good: "Fitz Haile - Data & Analytics Consultant - Savannah, GA"
```
Google truncates at ~60 characters. Keep it concise.

### Title Testing Checklist

Before finalizing your title, ask:
1. ✅ Does it clearly state what you do?
2. ✅ Would a potential client understand your service immediately?
3. ✅ Does it include searchable keywords?
4. ✅ Is it under 60 characters?
5. ✅ Does it include location (if relevant)?
6. ✅ Does it sound natural when spoken aloud?

### Title Length Tool

Check your title length before committing:
```
Fitz Haile - Data & Analytics Consultant - Savannah, GA
└─────────────────────────────────────────────────────┘
                    54 characters ✅
```

**Pro tip:** Search Google for your target keywords and study the titles of top-ranking consultants. What patterns do they use?

## 🖼️ Adding Social Share Images (Highly Recommended!)

Social share images make your links look **much more professional** when shared.

### Step 1: Create Your Images

**Open Graph Image (Facebook, LinkedIn):**
- Size: **1200 x 630 pixels**
- Format: JPG or PNG
- Max file size: 8MB (but keep under 1MB for speed)
- Content: Your logo + tagline or professional image

**Twitter Image:**
- Size: **1200 x 675 pixels** (16:9 ratio)
- Same guidelines as OG image

**Design Tips:**
- Keep text large and readable (will be displayed small)
- Use your brand colors
- Include your logo
- Avoid putting important info at edges (may be cropped)
- Test on mobile (most sharing happens on mobile)

### Step 2: Add Images to Your Site

1. Place images in `public/` folder:
   ```
   public/
   ├── og-image.jpg          (1200x630)
   ├── twitter-image.jpg     (1200x675)
   └── og-image-services.jpg (optional, unique per page)
   ```

2. Uncomment the image code in `app/layout.js`:

```javascript
openGraph: {
  // ... other properties
  images: [
    {
      url: 'https://fitzhaile.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Fitz Haile - Data & Analytics Consulting',
    },
  ],
},

twitter: {
  // ... other properties
  images: ['https://fitzhaile.com/twitter-image.jpg'],
},
```

### Step 3: Test Your Social Sharing

**Facebook/LinkedIn:**
- https://developers.facebook.com/tools/debug/
- Enter your URL and click "Scrape Again"

**Twitter:**
- https://cards-dev.twitter.com/validator
- Enter your URL and click "Preview card"

**Generic OG Debugger:**
- https://www.opengraph.xyz/

## 🔍 Advanced SEO: Structured Data (JSON-LD)

Structured data helps Google understand your content better and can earn you **rich snippets** in search results.

### For a Consulting Business

Add this to your `app/layout.js` inside the `<head>`:

```javascript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Fitz Haile - Data & Analytics Consulting',
      image: 'https://fitzhaile.com/og-image.jpg',
      '@id': 'https://fitzhaile.com',
      url: 'https://fitzhaile.com',
      telephone: '+1-XXX-XXX-XXXX', // Add if you want
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Savannah',
        addressRegion: 'GA',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.0809, // Savannah coordinates
        longitude: -81.0912
      },
      description: 'Independent data and analytics consultant helping organizations turn complex data into actionable insights and smarter decisions.',
      priceRange: '$$',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 32.0809,
          longitude: -81.0912
        },
        geoRadius: '500000' // 500km radius (adjust as needed)
      }
    })
  }}
/>
```

### For a Person (Consultant)

```javascript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Fitz Haile',
      jobTitle: 'Data & Analytics Consultant',
      url: 'https://fitzhaile.com',
      sameAs: [
        'https://www.linkedin.com/in/fitzhaile/',
        // Add Twitter, etc. if applicable
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Savannah',
        addressRegion: 'GA',
        addressCountry: 'US'
      }
    })
  }}
/>
```

## ✅ SEO Checklist

### Before Launch
- [ ] Update domain from 'fitzhaile.com' to your actual domain in both files
- [ ] Verify homepage title is optimized (currently "Data & Analytics Consultant")
- [ ] Test title updates during smooth-scroll navigation (check browser tabs)
- [ ] Create and add social share images (og-image.jpg, twitter-image.jpg)
- [ ] Add your Twitter handle if you have one
- [ ] Test all pages with Facebook Debugger
- [ ] Test all pages with Twitter Card Validator
- [ ] Verify Google Analytics is tracking properly
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google Search Console

### After Launch
- [ ] Submit site to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Add verification codes (Google, Bing) when you get them
- [ ] Monitor Google Analytics for traffic
- [ ] Monitor Search Console for indexing issues
- [ ] Check for broken links monthly
- [ ] Update meta descriptions based on click-through rates

## 📊 Monitoring SEO Performance

### Google Search Console (Free)
- Shows how people find your site
- Shows which keywords you rank for
- Alerts you to indexing issues
- Sign up: https://search.google.com/search-console

### Tools to Check Your SEO

**Free Tools:**
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse (built into Chrome DevTools)
- Google Mobile-Friendly Test
- Google Rich Results Test (for structured data)

**Paid Tools (optional):**
- Ahrefs - Comprehensive SEO analysis
- SEMrush - Keyword research and tracking
- Moz - SEO metrics and tracking

## 🎯 Next Steps

1. **Update your domain**: Replace `https://fitzhaile.com` in both `layout.js` and `page.js` with your actual domain
2. **Create social images**: Design 1200x630 OG image and 1200x675 Twitter image
3. **Test sharing**: Use the Facebook and Twitter validators
4. **Set up Search Console**: Verify ownership and submit sitemap
5. **Monitor performance**: Check Search Console weekly for the first month

## 💡 Pro Tips

1. **Test Your Titles**: Monitor performance and iterate
   - Use Google Search Console to see click-through rates
   - If CTR is low, try a different title
   - Test different keyword combinations every few months
   - Track which titles get shared more on social media

2. **Page Speed Matters**: Google uses page speed as a ranking factor
   - Your site is already optimized with Next.js static generation
   - Keep images optimized (under 100KB when possible)
   - Use WebP format for images (better compression)

3. **Mobile-First**: Google indexes mobile version first
   - Your site is already responsive
   - Test on real devices, not just browser resize
   - Check that titles display fully on mobile search results

4. **Content is King**: Write for humans, not search engines
   - Use natural language
   - Answer common questions
   - Update content regularly
   - Make sure your content matches your title's promise

5. **Internal Linking**: Link between your pages
   - Helps users navigate
   - Helps Google understand site structure
   - Already implemented in your navigation

6. **Build Backlinks**: Get other sites to link to you
   - Write guest posts
   - Get listed in directories
   - Share valuable content people want to link to

7. **Verify Title Updates**: Since you use smooth-scroll navigation
   - Check browser tab updates when clicking nav links
   - Test back/forward buttons update titles correctly
   - Verify bookmarked pages have correct titles
   - Already implemented via client-side `document.title` updates

## 🚀 Your Current SEO Score: Excellent!

You already have:
- ✅ Unique titles per page
- ✅ Unique descriptions per page
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Mobile responsive design
- ✅ Fast loading (static site)
- ✅ Clean URLs
- ✅ Semantic HTML
- ✅ Google Analytics

To complete your SEO setup:
- ⏳ Add social share images
- ⏳ Update domain URLs
- ⏳ Add structured data (optional but recommended)
- ⏳ Set up Google Search Console
- ⏳ Get your Twitter handle if you use Twitter

You're 90% there! 🎉

## 🔄 How to Update Your Homepage Title

If you ever want to change your homepage title (like we changed from "Data Driven Decision Making" to "Data & Analytics Consultant"), update it in **three places**:

### 1. Server-Side Default Title (app/layout.js)
```javascript
title: {
  default: 'Fitz Haile - [YOUR NEW TITLE] - Savannah, GA',
  template: '%s | Fitz Haile',
}
```

### 2. Open Graph & Twitter Titles (app/layout.js)
```javascript
openGraph: {
  title: 'Fitz Haile - [YOUR NEW TITLE]',
  // ...
},
twitter: {
  title: 'Fitz Haile - [YOUR NEW TITLE]',
  // ...
}
```

### 3. Metadata Object (app/[[...section]]/page.js)
```javascript
home: {
  title: 'Fitz Haile - [YOUR NEW TITLE]',
  description: '...',
  url: '/',
}
```

### 4. Client-Side Title Updates (app/[[...section]]/HomePageClient.js)
Update **both** locations:
```javascript
// In useEffect
const titles = {
  home: 'Fitz Haile - [YOUR NEW TITLE] - Savannah, GA',
  // ...
};

// In handleNavClick
const titles = {
  '/': 'Fitz Haile - [YOUR NEW TITLE] - Savannah, GA',
  // ...
};
```

**Note:** Make sure the title is identical in all locations for consistency!

