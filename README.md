# Fitzhugh Consulting - Personal Website

A modern, responsive consulting website built with React, Vite, and BEM CSS architecture.

## Features

- Fast development with Vite
- React 18 with hooks
- BEM CSS architecture (Block Element Modifier)
- Hot Module Replacement (HMR)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
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

The site will be available at `http://localhost:5173` (or another port if 5173 is in use)

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
personal-website-react/
├── src/
│   ├── styles/                    # Modular CSS files (BEM)
│   │   ├── base/                  # Global resets & defaults
│   │   │   ├── variables.css
│   │   │   ├── reset.css
│   │   │   ├── typography.css
│   │   │   └── defaults.css
│   │   ├── components/            # Component styles
│   │   │   ├── header.css
│   │   │   ├── hero.css
│   │   │   ├── services.css
│   │   │   ├── about.css
│   │   │   ├── contact.css
│   │   │   ├── footer.css
│   │   │   └── modal.css
│   │   ├── utilities/             # Helper classes
│   │   │   ├── containers.css
│   │   │   └── layout.css
│   │   └── main.css               # Imports all styles
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Imports styles/main.css
├── backups/                       # Backup files
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── package.json                   # Project dependencies
├── BEGINNERS_GUIDE.md             # Comprehensive beginner's guide
└── MODULAR_CSS_GUIDE.md           # CSS architecture guide
```

## Technologies Used

- **React 18** - Modern UI library with hooks
- **Vite** - Next-generation build tool and dev server
- **BEM CSS** - Block Element Modifier methodology

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

The color scheme is defined in `src/App.jsx`:
- `PRIMARY_NAVY`: #1E3A8A
- `SECONDARY_GREEN`: #059669
- `BACKGROUND_LIGHT`: #f7f9fb

You can also update colors directly in CSS files using find & replace.

### Styles

Edit component styles in their respective files:
- Header/Navigation → `src/styles/components/header.css`
- Hero section → `src/styles/components/hero.css`
- Services cards → `src/styles/components/services.css`
- About section → `src/styles/components/about.css`
- Contact section → `src/styles/components/contact.css`
- Footer → `src/styles/components/footer.css`
- Modal → `src/styles/components/modal.css`

### Content

Edit the content directly in `src/App.jsx`. The website includes:
- Hero section with main headline
- Services section (4 service cards)
- About section with text and image
- Contact/CTA section with action buttons
- Footer with social links
- Contact form modal

## Documentation

- **BEGINNERS_GUIDE.md** - Complete guide for learning React and BEM (579 lines)
- **MODULAR_CSS_GUIDE.md** - Detailed CSS architecture documentation (294 lines)
- **README.md** - This file, project overview

