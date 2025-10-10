# React Beginner's Guide for Your Website

Welcome! This guide will help you understand how your React website works. 🎉

## 📁 File Structure Overview

```
personal-website-react/
├── src/
│   ├── styles/                    ← Modular CSS files
│   │   ├── base/                  ← Global resets & defaults
│   │   │   ├── reset.css
│   │   │   ├── typography.css
│   │   │   └── defaults.css
│   │   ├── components/            ← Component styles (BEM)
│   │   │   ├── header.css
│   │   │   ├── hero.css
│   │   │   ├── services.css
│   │   │   ├── about.css
│   │   │   ├── contact.css
│   │   │   ├── footer.css
│   │   │   └── modal.css
│   │   ├── utilities/             ← Helper classes
│   │   │   ├── containers.css
│   │   │   └── layout.css
│   │   └── main.css               ← Imports all styles
│   ├── App.jsx                    ← Main website component
│   ├── main.jsx                   ← Entry point
│   └── index.css                  ← Imports styles/main.css
├── index.html                     ← HTML template
├── package.json                   ← Dependencies
└── vite.config.js                 ← Build tool config
```

## 🎯 How It All Connects

1. **Browser loads** `index.html`
2. **index.html** loads `src/main.jsx`
3. **main.jsx** imports and renders `src/App.jsx`
4. **main.jsx** also imports `src/index.css`
5. **index.css** imports `styles/main.css`
6. **main.css** imports all component styles
7. **App.jsx** uses BEM class names that match the CSS

Think of it like Russian nesting dolls - each file loads the next one.

## 🧩 Key React Concepts Explained

### 1. Components

**What are they?**
Components are reusable pieces of UI. Like custom HTML tags you create yourself.

**Example in your code:**
```jsx
const NavLink = ({ to, children }) => {
  return <a href={to}>{children}</a>
}

// Usage:
<NavLink to="/about">About</NavLink>
```

### 2. JSX (JavaScript XML)

**What is it?**
JSX looks like HTML but it's actually JavaScript! React transforms it into real HTML.

**Key differences from HTML:**
- Use `className` instead of `class`
- Use `{javascript}` inside curly braces to run JavaScript
- Close all tags (even `<img />` and `<br />`)

**Example:**
```jsx
<div className="container">
  <h1>Hello {userName}</h1>  {/* JavaScript variable */}
</div>
```

### 3. State (useState)

**What is it?**
State is data that can change over time. When state changes, React automatically re-renders your component.

**Syntax:**
```jsx
const [value, setValue] = useState(initialValue)
//     ↑        ↑              ↑
//   current  function to   starting value
//   value    update it
```

**In your app:**
```jsx
const [isModalOpen, setIsModalOpen] = useState(false)

// Later, to open the modal:
setIsModalOpen(true)
```

Think of state as a "live" variable that triggers updates when changed.

### 4. Props (Properties)

**What are they?**
Props are how you pass data FROM a parent component TO a child component.

**Example:**
```jsx
// Parent passes data:
<NavLink to="/services" isCta={true}>Get Started</NavLink>

// Child receives data:
const NavLink = ({ to, isCta, children }) => {
  // Can now use: to, isCta, children
}
```

Props flow DOWN the component tree (parent → child).

### 5. Event Handlers

**What are they?**
Functions that run when users interact with your site (clicking, typing, submitting forms).

**Common events:**
- `onClick` - when clicked
- `onSubmit` - when form is submitted
- `onChange` - when input value changes
- `onMouseEnter` - when mouse hovers over

**Example:**
```jsx
<button onClick={handleClick}>
  Click Me
</button>

function handleClick() {
  console.log('Button was clicked!')
}
```

### 6. useEffect Hook

**What is it?**
Runs code at specific times:
- When component first appears (mounts)
- When certain values change
- When component is removed (cleanup)

**Syntax:**
```jsx
useEffect(() => {
  // Code to run
  
  return () => {
    // Cleanup code (optional)
  }
}, [dependencies])  // When to run
```

**In your app:**
```jsx
useEffect(() => {
  // Listen for browser back/forward buttons
  window.addEventListener('popstate', handleLocationChange)
  
  return () => {
    // Cleanup: remove the listener when component unmounts
    window.removeEventListener('popstate', handleLocationChange)
  }
}, [])  // Empty array = run once on mount
```

### 7. Conditional Rendering

**What is it?**
Showing different things based on conditions.

**Method 1: Ternary operator (?:)**
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
//    ↑           ↑               ↑
//  condition   if true        if false
```

**Method 2: Logical AND (&&)**
```jsx
{isModalOpen && <Modal />}
//     ↑              ↑
// if true      show this
// if false     show nothing
```

**In your app:**
```jsx
{isModalOpen && (
  <div className="modal">
    {/* Modal content */}
  </div>
)}
```

### 8. Lists and .map()

**What is it?**
Creating multiple similar elements from an array of data.

**Example:**
```jsx
const services = [
  { title: "Service 1", price: "$100" },
  { title: "Service 2", price: "$200" }
]

{services.map((service, index) => (
  <div key={index}>
    <h3>{service.title}</h3>
    <p>{service.price}</p>
  </div>
))}
```

**Important:** Always include a unique `key` prop when mapping!

## 🎨 BEM CSS Architecture Explained

Your website uses **BEM (Block Element Modifier)** - a CSS naming methodology that makes styles organized and maintainable.

### BEM Naming Convention:

```css
/* Block - standalone component */
.header { }

/* Element - part of a block */
.header__logo { }
.header__navigation { }

/* Modifier - variation */
.button--primary { }
.header--fixed { }
```

### Examples in Your Code:

| Component | BEM Class Names |
|-----------|----------------|
| Header | `.header`, `.header__logo`, `.header__container` |
| Hero | `.hero`, `.hero__title`, `.hero__cta` |
| Services | `.services`, `.service-card`, `.service-card__title` |
| About | `.about`, `.about__title`, `.about__image` |
| Footer | `.footer`, `.footer__link` |
| Modal | `.modal`, `.modal__content`, `.modal__button` |

### Why BEM?

1. **Clear Structure** - Class names describe what components ARE
2. **No Conflicts** - Unique naming prevents style clashes
3. **Maintainable** - Easy to find and modify styles
4. **Self-Documenting** - Names explain the HTML structure

### Example in Your Code:

```jsx
<div className="header__container">
  <a className="header__logo">
    <span className="header__logo-green">Ascend</span>
    <span className="header__logo-navy">Consulting</span>
  </a>
</div>
```

Clean, semantic, and self-explanatory! 🎯

## 📝 Modular CSS Structure

Your styles are split into logical files for better organization:

### Base Files (`styles/base/`)
- **variables.css** - CSS variables (design tokens) - your color palette, spacing scale, etc.
- **reset.css** - Global resets, removes browser defaults
- **typography.css** - Font settings
- **defaults.css** - Default styles for common elements (buttons, inputs, etc.)

### Component Files (`styles/components/`)
- **header.css** - Navigation and logo styles
- **hero.css** - Main banner styles
- **services.css** - Service cards styles
- **about.css** - About section styles
- **contact.css** - Contact section styles
- **footer.css** - Footer styles
- **modal.css** - Contact form popup styles

### Utility Files (`styles/utilities/`)
- **containers.css** - Container helpers
- **layout.css** - Layout utilities

### 💡 Smart Defaults Approach

**Why are the component CSS files so clean?**

The `defaults.css` file does most of the work! It sets base styles for all HTML elements:

- All `<button>` elements get: border, border-radius, cursor, transition, padding
- All `<input>` and `<textarea>` elements get: border, border-radius, padding, focus styles
- All `<a>` elements get: color, text-decoration, transition

**This means:**
- ✅ Component files only need to define unique styles (colors, sizes, etc.)
- ✅ No repetitive code across components
- ✅ Consistent behavior everywhere
- ✅ Change defaults once = updates everywhere

**Example:**
```css
/* In defaults.css - applies to ALL buttons */
button {
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* In hero.css - only define what's unique */
.hero__cta {
  /* border, cursor, transition are already set! */
  background-color: #1E3A8A;
  color: white;
  padding: 1rem 2.5rem;
}
```

## 🔍 Common Patterns in Your Code

### 1. Template Strings (Backticks)
```jsx
const color = 'blue'
const size = 'large'

// Old way:
className="text-" + color + " " + size

// New way (template strings):
className={`text-${color} ${size}`}
```

### 2. Destructuring
```jsx
// Instead of:
const title = props.title
const content = props.content

// Do this:
const { title, content } = props

// Or even better (in parameters):
const MyComponent = ({ title, content }) => {
  // Use title and content directly
}
```

### 3. Arrow Functions
```jsx
// Traditional function:
function handleClick() {
  console.log('clicked')
}

// Arrow function:
const handleClick = () => {
  console.log('clicked')
}

// With parameters:
const greet = (name) => {
  console.log(`Hello ${name}`)
}
```

## 🚀 Making Changes to Your Site

### Change Colors:

**Option 1: Edit Color Constants in App.jsx**
```jsx
// src/App.jsx (top of file)
const PRIMARY_NAVY = '#1E3A8A'      // Change this
const SECONDARY_GREEN = '#059669'   // And this
const BACKGROUND_LIGHT = '#f7f9fb'  // And this
```

**Option 2: Edit CSS Files Directly**
Find and replace color values in component CSS files:
- `#1E3A8A` (navy) → your new color
- `#059669` (green) → your new color

### Change Text Content:
Find the section in `src/App.jsx` and edit the text directly:
```jsx
<h1 className="hero__title">Your New Headline Here</h1>
<p className="hero__subtitle">Your new description here</p>
```

### Change Styles:

**Find which file to edit:**
- Header styles → `src/styles/components/header.css`
- Hero styles → `src/styles/components/hero.css`
- Service cards → `src/styles/components/services.css`
- About section → `src/styles/components/about.css`

**Example: Make the hero title bigger**
```css
/* src/styles/components/hero.css */
.hero__title {
  font-size: 3rem;  /* Change this value */
}
```

### Add a New Section:

**Step 1: Add CSS**
Create `src/styles/components/testimonials.css`:
```css
.testimonials {
  padding: 4rem 0;
  background-color: white;
}

.testimonials__title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.testimonials__card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
}
```

**Step 2: Import in main.css**
```css
/* src/styles/main.css */
@import './components/testimonials.css';
```

**Step 3: Add to App.jsx**
```jsx
<section id="testimonials" className="testimonials">
  <div className="container">
    <h2 className="testimonials__title">What Clients Say</h2>
    <div className="testimonials__card">
      <p>Amazing service!</p>
    </div>
  </div>
</section>
```

**Step 4: Add nav link**
```jsx
<NavLink to="/testimonials">Testimonials</NavLink>
```

### Change Service Cards:
Edit the array in the Services section of `src/App.jsx`:
```jsx
{[
  { 
    title: "Your Service Name", 
    content: "Your service description here" 
  },
  { 
    title: "Another Service", 
    content: "Another description" 
  },
  // Add more services...
]}
```

### Modify Service Card Styles:
```css
/* src/styles/components/services.css */
.service-card {
  background-color: white;  /* Change background */
  padding: 2rem;            /* Change padding */
  border-radius: 1rem;      /* Change corners */
}

.service-card__title {
  font-size: 1.5rem;        /* Change title size */
  color: #1E3A8A;           /* Change title color */
}
```

## 📚 Learning Resources

### React Basics:
- [React Official Tutorial](https://react.dev/learn)
- [React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM)
- [React Hooks Explained](https://react.dev/reference/react)

### BEM CSS:
- [BEM Official Guide](https://en.bem.info/)
- [BEM 101 by CSS Tricks](https://css-tricks.com/bem-101/)
- [BEM Cheat Sheet](https://9elements.com/bem-cheat-sheet/)

### CSS Basics:
- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Modern CSS](https://moderncss.dev/)

### JavaScript:
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [ES6 Features](https://github.com/lukehoban/es6features)

### Your Project Documentation:
- **MODULAR_CSS_GUIDE.md** - Complete guide to your CSS structure
- **README.md** - Project overview and getting started

## 🐛 Debugging Tips

1. **Check the Browser Console** (F12 or Cmd+Option+I)
   - Look for red error messages
   - Use `console.log()` to see variable values

2. **React DevTools** (Browser Extension)
   - Install for Chrome or Firefox
   - Inspect component state and props

3. **Common Errors:**
   - "Cannot read property of undefined" → Check if variable exists
   - "Key prop warning" → Add unique `key` to mapped elements
   - "Unexpected token" → Check for missing closing tags or brackets
   - Styles not applying → Check class name spelling, check if CSS file is imported

4. **CSS Debugging:**
   - Right-click → Inspect Element to see which styles are applied
   - Check if your CSS file is imported in `main.css`
   - Look for typos in BEM class names
   - Make sure class names in JSX match those in CSS

## 🎯 Quick Reference

### Where to Find Things:

| Want to change... | Edit this file... |
|------------------|-------------------|
| Page content | `src/App.jsx` |
| Header/navigation | `src/styles/components/header.css` |
| Hero section | `src/styles/components/hero.css` |
| Service cards | `src/styles/components/services.css` |
| About section | `src/styles/components/about.css` |
| Contact section | `src/styles/components/contact.css` |
| Footer | `src/styles/components/footer.css` |
| Modal popup | `src/styles/components/modal.css` |
| Global resets | `src/styles/base/reset.css` |
| Fonts | `src/styles/base/typography.css` |
| Default styles (buttons, inputs) | `src/styles/base/defaults.css` |

### CSS Class Name Patterns:

```jsx
{/* Block (component) */}
<div className="header">

{/* Element (part of component) */}
<a className="header__logo">

{/* Modifier (variation) */}
<button className="button--primary">
```

### React State Patterns:

```jsx
// Create state
const [value, setValue] = useState(false)

// Update state
setValue(true)

// Use in condition
{value && <div>Shown when true</div>}
```

## 💡 Next Steps

1. ✅ Try changing colors in component CSS files
2. ✅ Add a new service card to the array
3. ✅ Modify the hero title in App.jsx
4. ✅ Create a new component with its own CSS file
5. ✅ Experiment with BEM class names
6. ✅ Build a testimonials section from scratch

## 🔥 Hot Tips

- **Auto-reload works!** Just save your files - no refresh needed
- **BEM keeps styles isolated** - changes to one component won't break others
- **Small files = easy to find** - each component has its own CSS file
- **Comments are your friend** - all code is thoroughly commented
- **Break things!** That's how you learn (you can always undo with Cmd+Z)

Remember: **It's okay to break things!** That's how you learn. You can always undo changes with Cmd+Z (Mac) or Ctrl+Z (Windows).

Your website now uses **professional-grade architecture** with BEM and modular CSS! 🚀

Happy coding! 🎉
