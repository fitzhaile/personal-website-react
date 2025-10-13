# Fitz Haile - Personal Website

A modern, SEO-optimized consulting website built with **Next.js 15**, React 19, and BEM CSS architecture.

## Features

- **Next.js 15** with App Router for optimal SEO
- **React 19** with modern hooks
- **BEM CSS architecture** (Block Element Modifier)
- **Server-Side Rendering** for instant page loads
- **Static Site Generation** for blazing-fast performance
- **Modular Components** for maintainability
- **Comprehensive Documentation** with inline comments everywhere

## Getting Started

### Prerequisites

- **Node.js 18.18.0 or higher** (Next.js 15 requirement)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

Create a production build with static export:
```bash
npm run build
```

This generates a static site in the `out/` directory, ready for deployment to GitHub Pages or any static host.

### Deployment to GitHub Pages

Deploy your site with one command:
```bash
npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch automatically.

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
│       ├── Contact.js             # CTA section
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
│   │   │   ├── contact.css
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
├── README.md                      # This file
├── BEGINNERS_GUIDE.md             # Comprehensive beginner's guide
└── NEXTJS_MIGRATION.md            # Migration guide from Vite to Next.js
```

## Technologies Used

- **Next.js 15** - React framework with App Router for SEO and performance
- **React 19** - Latest version with modern hooks and server components
- **BEM CSS** - Block Element Modifier methodology for maintainable styles
- **CSS Variables** - Design tokens for consistent theming
- **GitHub Pages** - Static site hosting with automated deployment

## Architecture

### Smart Defaults Philosophy

This project uses a **defaults-first approach** where base styles are defined once in `defaults.css` and inherited everywhere:

- All buttons automatically get: `border: none`, `border-radius`, `cursor: pointer`, `transition`
- All inputs/textareas automatically get: borders, padding, focus styles
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

### Modular Structure

CSS is organized into logical modules:
- **Base**: Global resets, typography, and default element styles
- **Components**: Individual UI component styles
- **Utilities**: Reusable helper classes

Includes CSS variables (design tokens) for:
- Colors
- Spacing
- Border radius
- Shadows
- Transitions
- Typography scales

Benefits:
- Easy to find and modify styles
- No naming conflicts
- Consistent design system with CSS variables
- Better organization and maintainability
- Scalable for large projects

## Customization

### Colors

The color scheme is defined as CSS variables in `src/styles/base/variables.css`:
- `--color-primary`: #1E3A8A (Navy)
- `--color-secondary`: #059669 (Green)
- `--color-background`: #f7f9fb (Light background)
- `--color-text`: #1f2937 (Dark gray)
- `--color-text-light`: #4b5563 (Medium gray)

Update these once and they'll apply throughout the entire site!

### Styles

Edit component styles in their respective files:
- Header/Navigation → `src/styles/components/header.css`
- Hero section → `src/styles/components/hero.css`
- Services cards → `src/styles/components/services.css`
- About section → `src/styles/components/about.css`
- Contact/CTA section → `src/styles/components/contact.css`
- Footer → `src/styles/components/footer.css`
- Modal → `src/styles/components/modal.css`

### Content

Edit content in the modular component files in `app/components/`:
- **Hero Section** → `app/components/Hero.js`
- **Services** → `app/components/Services.js` (service data array)
- **About** → `app/components/About.js`
- **Contact CTA** → `app/components/Contact.js`
- **Footer** → `app/components/Footer.js`
- **Contact Modal** → `app/components/ContactModal.js`

### SEO Metadata

Edit SEO metadata (titles, descriptions) in `app/[[...section]]/page.js`:
```javascript
const sectionMeta = {
  home: {
    title: 'Your Site Title',
    description: 'Your description',
  },
  // ...
};
```

## Documentation

- **README.md** - This file, project overview and getting started
- **BEGINNERS_GUIDE.md** - Complete guide for learning React, Next.js, and BEM
- **NEXTJS_MIGRATION.md** - Migration guide from Vite to Next.js with SEO benefits
- **Inline Code Comments** - Every JavaScript and CSS file has comprehensive comments

## Key Features

### SEO Optimized
- Each section has its own crawlable URL (`/`, `/services`, `/about`, `/contact`)
- Unique metadata (title, description) for every route
- Server-side rendering for instant page loads
- Static site generation for maximum performance
- Open Graph tags for social media sharing

### Modular Architecture
- **Separate component files** - Easy to find and edit specific sections
- **BEM CSS methodology** - No style conflicts, easy maintenance
- **CSS design tokens** - Change colors/spacing globally in one place
- **Utility classes** - Reusable helpers for rapid development

### Developer Experience
- **Comprehensive comments** - Every file, function, and style rule explained
- **Hot reload** - See changes instantly without refresh
- **Modern tooling** - Next.js 15 with App Router
- **Type-safe** - React 19 with latest features

### Deployment
- **One-command deploy** - `npm run deploy` to GitHub Pages
- **Automatic builds** - GitHub Actions for CI/CD
- **Static export** - No server required, host anywhere

