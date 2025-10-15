# Fitz Haile - Personal Website

A modern, SEO-optimized consulting website built with **Next.js 15**, React 19, and BEM CSS architecture.

## Features

- **SEO-Optimized** - Each section has its own crawlable URL (`/`, `/services`, `/about`, `/contact`)
- **Server-Side Rendering** - Quick page loads with unique metadata for every route
- **Static Site Generation** - Faster performance, deploy anywhere
- **Modular Components** - 6 separate files for easy maintenance
- **BEM CSS Architecture** - No style conflicts, professional methodology
- **Comprehensive Documentation** - Inline comments in every file
- **One-Command Deploy** - Push to GitHub Pages automatically

## Quick Start

### Prerequisites

- **Node.js 18.18.0 or higher** (Next.js 15 requirement)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Production Build

```bash
npm run build
```

Generates static site in `out/` directory

### Deploy to GitHub Pages

```bash
npm run deploy
```

Builds and pushes to `gh-pages` branch automatically

## Testing

### Local Development
1. Run `npm run dev`
2. Open `http://localhost:3000`
3. Navigate between sections - notice URL and title changes
4. Test that direct URLs work: `http://localhost:3000/services/`

### Production
1. Visit `https://fitzhaile.github.io/personal-website-react/`
2. Test all navigation links
3. Verify mobile menu and contact modal
4. Check browser back/forward buttons work
5. Inspect `<head>` in DevTools - verify unique metadata per page

## How It Works

### SEO-Friendly Routing
When someone visits `/services`:
1. **Server Component** (`page.js`) generates HTML with "Services - Fitz Haile" title
2. Page loads with services-specific meta description
3. **Client Component** (`HomePageClient.js`) hydrates and scrolls to services section
4. User sees smooth one-page experience
5. Browser back button works correctly

### Why This Matters
- **Google sees real HTML pages** (not just JavaScript)
- **Each section can rank separately** in search results
- **Sections appear as sitelinks** in Google results
- **Open Graph tags** make social sharing look professional
- **Users get a smooth experience** - no page reloads

## Project Structure

```
personal-website-react/
├── app/                           # Next.js App Router
│   ├── layout.js                  # Root layout with global metadata & fonts
│   ├── [[...section]]/            # Dynamic route for all sections
│   │   ├── page.js                # Server component with SEO metadata
│   │   └── HomePageClient.js      # Client component with interactivity
│   └── components/                # Modular React components
│       ├── Header.js              # Navigation header
│       ├── Hero.js                # Landing section
│       ├── Services.js            # Service cards
│       ├── About.js               # About section
│       ├── Footer.js              # Footer with links
│       └── ContactModal.js        # Contact form modal
├── src/
│   ├── styles/                    # Modular CSS files (BEM)
│   │   ├── base/                  # Global resets & defaults
│   │   │   ├── variables.css      # CSS design tokens
│   │   │   ├── reset.css          # Browser reset
│   │   │   ├── typography.css     # Font settings
│   │   │   └── defaults.css       # Default element styles
│   │   ├── components/            # Component styles
│   │   │   ├── header.css
│   │   │   ├── hero.css
│   │   │   ├── services.css
│   │   │   ├── about.css
│   │   │   ├── footer.css
│   │   │   └── modal.css
│   │   ├── utilities/             # Utility classes
│   │   │   ├── spacing.css        # Padding, margin, gap utilities
│   │   │   ├── colors.css         # Color utilities
│   │   │   ├── typography.css     # Font size, weight utilities
│   │   │   ├── effects.css        # Shadow, radius, transition utilities
│   │   │   ├── containers.css     # Container helpers
│   │   │   └── layout.css         # Layout utilities
│   │   └── main.css               # Imports all styles
│   └── index.css                  # Entry point (imports main.css)
├── public/                        # Static assets
│   ├── img/                       # Images
│   ├── favicon-16x16.png          # Favicon (16px)
│   └── favicon-32x32.png          # Favicon (32px)
├── next.config.js                 # Next.js configuration
├── package.json                   # Project dependencies
├── .gitignore                     # Git ignore file
├── README.md                      # This file
└── BEGINNERS_GUIDE.md             # Learning guide
```

## Technologies Used

- **Next.js 15** - React framework with App Router for SEO and performance
- **React 19** - Latest version with modern hooks and server components
- **BEM CSS** - Block Element Modifier methodology for maintainable styles
- **CSS Variables** - Design tokens for consistent theming
- **GitHub Pages** - Static site hosting with automated deployment

## Architecture

### Smart Defaults Philosophy

This project uses a **defaults-first approach** where base styles are defined once in `src/styles/base/defaults.css` and inherited everywhere:

- All `<button>` elements get: border, border-radius, cursor, transition, padding
- All `<input>`/`<textarea>` elements get: borders, padding, focus styles  
- All `<a>` elements get: color, text-decoration, transition
- Component CSS files only define **unique styles** (colors, sizes, layouts)
- Change a default once = updates everywhere consistently

**Result:** Clean, maintainable, DRY (Don't Repeat Yourself) code with no redundant declarations.

### BEM (Block Element Modifier)

This project uses BEM naming convention for CSS:

```css
/* Block - standalone component */
.header { }

/* Element - part of a block */
.header__logo { }
.header__container { }

/* Modifier - variation */
.button--primary { }
.nav__link--cta { }
```

**Benefits:**
- Easy to find and modify styles
- No naming conflicts
- Consistent design system with CSS variables
- Better organization and maintainability
- Scalable for large projects

### Modular Structure

**Components:** Each section is a separate React file  
**Styles:** Each component has its own CSS file using BEM  
**Variables:** Global design tokens (colors, spacing, etc.) in one place  
**Utilities:** Reusable helper classes for rapid development

## Customization

### Change Colors

Edit CSS variables in `src/styles/base/variables.css`:

```css
:root {
  --color-primary: #1E3A8A;    /* Navy - change this! */
  --color-secondary: #059669;   /* Green - change this! */
  --color-background: #f7f9fb;  /* Light gray - change this! */
}
```

Update these once and they apply throughout the entire site!

### Change Content

Edit the component files in `app/components/`:

- **Hero Section** → `app/components/Hero.js`
- **Services** → `app/components/Services.js` (service data array)
- **About** → `app/components/About.js`
- **Footer** → `app/components/Footer.js`
- **Contact Modal** → `app/components/ContactModal.js`

### Change Styles

Edit component styles in their respective files:

- Header/Navigation → `src/styles/components/header.css`
- Hero section → `src/styles/components/hero.css`
- Services cards → `src/styles/components/services.css`
- About section → `src/styles/components/about.css`
- Footer → `src/styles/components/footer.css`
- Modal → `src/styles/components/modal.css`

### Change SEO Metadata

Edit metadata in `app/[[...section]]/page.js`:

```javascript
const sectionMeta = {
  home: {
    title: 'Your Site Title',
    description: 'Your description',
  },
  services: {
    title: 'Services - Your Name',
    description: 'Your services description',
  },
  // ...
};
```

## Documentation

- **README.md** (this file) - Project overview, getting started, architecture
- **BEGINNERS_GUIDE.md** - Complete learning guide for React, Next.js, and BEM
- **Inline Code Comments** - Every JavaScript and CSS file has comprehensive documentation

## Deploy Checklist

Before deploying to production:

- [ ] Test all routes: `/`, `/services`, `/about`, `/contact`
- [ ] Verify unique metadata in browser DevTools (Elements → `<head>`)
- [ ] Check mobile menu functionality
- [ ] Test contact form modal
- [ ] Verify smooth scrolling works
- [ ] Test browser back/forward buttons
- [ ] Run `npm run build` successfully (no errors)
- [ ] Deploy with `npm run deploy`

## Key Concepts

### Server vs. Client Components

**Server Components** (`page.js`):
- Run on the server or at build time
- Generate SEO metadata
- Can't use hooks or handle browser events

**Client Components** (`HomePageClient.js`, all components):
- Run in the browser
- Can use `useState`, `useEffect`, event handlers
- Handle all interactivity (modals, menus, scrolling)

### File-Based Routing

The `[[...section]]` pattern is a Next.js "optional catch-all route":
- `/` → home
- `/services` → services section
- `/about` → about section
- `/contact` → contact modal

Each URL generates unique metadata and scrolls to the appropriate section.

## Need Help?

- **BEGINNERS_GUIDE.md** - Detailed explanations of React, Next.js, and BEM concepts
- **Inline Comments** - Every file has comprehensive documentation
- **Next.js Docs** - https://nextjs.org/docs
- **React Docs** - https://react.dev/learn
- **BEM Guide** - https://getbem.com/, https://en.bem.info/

## Result

Your website now delivers:
- **Perfect SEO** - Each section can rank independently in Google
- **Smooth UX** - No page reloads, instant navigation
- **Fast Performance** - Static generation for blazing speeds
- **Easy Maintenance** - Modular files, clear structure
- **Professional Code** - BEM methodology, design tokens, comprehensive comments

**Professional-grade architecture** that's both powerful and maintainable! 🚀
