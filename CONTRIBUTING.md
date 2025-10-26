# Contributing to Personal Website

Thank you for your interest in contributing! This document provides guidelines and best practices for working on this project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Documentation Standards](#documentation-standards)
- [File Organization](#file-organization)
- [Commit Guidelines](#commit-guidelines)
- [Testing Checklist](#testing-checklist)

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher (required for Next.js 15)
- npm or yarn package manager
- Git for version control
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd personal-website-react

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - New features (e.g., `feature/testimonials`)
- `fix/*` - Bug fixes (e.g., `fix/mobile-menu`)
- `docs/*` - Documentation updates (e.g., `docs/update-readme`)

### Making Changes

1. **Create a new branch** from `main` or `develop`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our code standards

3. **Test thoroughly** using the testing checklist below

4. **Document your changes** in code comments and CHANGELOG.md

5. **Commit with clear messages** following commit guidelines

6. **Push and create a pull request** with detailed description

## Code Standards

### JavaScript/React Standards

#### Component Structure

```javascript
/**
 * Component description and purpose
 * 
 * @param {Object} props - Component props
 * @param {Type} props.propName - Description of prop
 * @returns {JSX.Element} Description of what component renders
 */
'use client' // Only if using client-side features

export default function ComponentName({ propName }) {
  // State declarations
  // Effect hooks
  // Event handlers
  // Render logic
}
```

#### Best Practices

- **Use meaningful variable names**: `isModalOpen` instead of `open`
- **Keep functions focused**: One function, one responsibility
- **Extract reusable logic**: Create custom hooks for shared behavior
- **Comment complex logic**: Explain "why", not just "what"
- **Use JSDoc format**: Document all exported functions and components
- **Prefer const over let**: Use immutable references when possible
- **Use descriptive prop names**: `handleContactTrigger` instead of `onClick`

### CSS Standards

#### BEM Naming Convention

We use **BEM (Block Element Modifier)** for all CSS class names:

```css
/* Block - standalone component */
.service-card { }

/* Element - part of a block */
.service-card__title { }
.service-card__content { }

/* Modifier - variation of block or element */
.service-card--clickable { }
.service-card__title--large { }
```

#### Best Practices

- **Use CSS variables**: Reference `var(--color-primary)` instead of `#1E3A8A`
- **Organize by specificity**: Base → Utilities → Components
- **Mobile-first approach**: Base styles for mobile, media queries for larger screens
- **Document component styles**: Include usage examples and responsive notes
- **Avoid !important**: Use specificity instead
- **Use relative units**: `rem` and `em` instead of `px` for typography
- **Group related properties**: Box model → Typography → Visual → Animation

#### CSS File Structure

```css
/**
 * ===== COMPONENT NAME =====
 * Component description and purpose
 * 
 * Features:
 * - List key features
 * - Explain responsive behavior
 * - Note any special techniques
 */

/* Base component styles */
.component { }

/* Element styles */
.component__element { }

/* Modifier styles */
.component--modifier { }

/* Responsive breakpoints */
@media (min-width: 768px) { }
```

## Documentation Standards

### Code Comments

All files should have:

1. **File Header**: Describes purpose and scope
2. **Function/Component Comments**: JSDoc format
3. **Inline Comments**: Explain complex logic
4. **Section Separators**: Clear visual organization

### JSDoc Format

```javascript
/**
 * Function description
 * 
 * @param {string} name - Parameter description
 * @param {Object} options - Options object
 * @param {boolean} [options.flag] - Optional parameter
 * @returns {Promise<Object>} Return value description
 * @throws {Error} When error occurs
 * 
 * @example
 * const result = functionName('value', { flag: true });
 */
```

### CSS Comments

```css
/**
 * ===== SECTION TITLE =====
 * Section description
 * 
 * USAGE:
 * How to use this section
 * 
 * EXAMPLES:
 * Code examples
 */

/* Subsection comment */
.class {
  /* Inline comment explaining specific property */
  property: value;
}
```

## File Organization

### Adding New Components

1. **Create component file**: `app/components/ComponentName.js`
2. **Create CSS file**: `src/styles/components/component-name.css`
3. **Import CSS in main.css**: Add import in alphabetical order
4. **Update documentation**: Add to README.md structure section
5. **Add route if needed**: Update `generateStaticParams()` in page.js

### Adding New Utilities

1. **Create utility file**: `src/styles/utilities/utility-name.css`
2. **Import in main.css**: Add import in utilities section
3. **Document usage**: Include examples and when to use/not use
4. **Reference variables**: Use CSS variables from `variables.css`

## Commit Guidelines

### Commit Message Format

```
type(scope): brief description

Detailed explanation of what changed and why
(optional, include for complex changes)

Refs: #issue-number
```

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature change)
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, dependencies, tooling

### Examples

```bash
# Good commits
git commit -m "feat(services): add testimonials section with carousel"
git commit -m "fix(modal): prevent scroll when contact modal is open"
git commit -m "docs(readme): update deployment instructions for Vercel"
git commit -m "style(css): improve BEM naming consistency across components"

# Bad commits (avoid these)
git commit -m "updates"
git commit -m "fixed stuff"
git commit -m "WIP"
```

## Testing Checklist

Before committing or deploying, verify:

### Functionality
- [ ] All navigation links work correctly
- [ ] Forms submit and show success messages
- [ ] Modals open and close properly
- [ ] Smooth scrolling works between sections
- [ ] Browser back/forward buttons work
- [ ] External links open in new tabs

### Responsive Design
- [ ] Test on mobile (320px - 767px)
- [ ] Test on tablet (768px - 1023px)
- [ ] Test on desktop (1024px+)
- [ ] Mobile menu opens and closes
- [ ] Images scale appropriately
- [ ] No horizontal scrolling

### Cross-Browser
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance
- [ ] Build completes without errors: `npm run build`
- [ ] No console errors in browser DevTools
- [ ] Images are optimized and load quickly
- [ ] Fonts load properly

### SEO
- [ ] Each section has unique metadata
- [ ] Meta descriptions are compelling
- [ ] Open Graph tags are correct
- [ ] URLs are clean and semantic

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Focus states are visible
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG standards

### Code Quality
- [ ] No linter errors: `npm run lint`
- [ ] Code is properly commented
- [ ] CSS follows BEM naming
- [ ] No unused variables or imports
- [ ] Console.logs removed (except intentional ones)

## Deployment

### GitHub Pages Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy

# This runs:
# 1. next build (creates static export)
# 2. touch out/.nojekyll (allows _next folder)
# 3. gh-pages -d out --dotfiles (deploys to gh-pages branch)
```

### Manual Deployment

```bash
# Build static export
npm run build

# The out/ directory contains deployable files
# Upload to any static hosting service:
# - Netlify
# - Vercel
# - AWS S3
# - Cloudflare Pages
```

## Getting Help

- **Documentation**: Check README.md and BEGINNERS_GUIDE.md
- **Inline Comments**: All files have comprehensive comments
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev/learn
- **BEM Guide**: https://getbem.com/

## Questions?

If you have questions or run into issues:

1. Check existing documentation (README.md, BEGINNERS_GUIDE.md, inline comments)
2. Search closed issues on GitHub
3. Create a new issue with detailed description
4. Include error messages, screenshots, and steps to reproduce

Thank you for contributing! 🎉

