/**
 * ===== MAIN.JSX - APPLICATION ENTRY POINT =====
 * 
 * This is the FIRST file that runs when your React app loads.
 * It connects your React components to the actual HTML page.
 * 
 * Think of it as the "bridge" between your React code and the browser.
 */

// Import the core React library
import React from 'react'

// Import ReactDOM - the library that renders React to the browser
// 'react-dom/client' is the modern way to render React 18 apps
import ReactDOM from 'react-dom/client'

// Import our main App component (the entire website)
import App from './App.jsx'

// Import global CSS styles (including Tailwind)
import './index.css'

/**
 * RENDERING THE APP TO THE DOM
 * 
 * 1. ReactDOM.createRoot() - creates a "root" React rendering point
 * 2. document.getElementById('root') - finds the HTML element with id="root" in index.html
 * 3. .render() - tells React to render our App component inside that element
 * 
 * <React.StrictMode> is a development helper that:
 * - Identifies potential problems in your app
 * - Warns you about deprecated features
 * - Helps you write better React code
 * - ONLY runs in development (not in production builds)
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

