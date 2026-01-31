import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

/**
 * Application Entry Point
 * 
 * This file handles the initial rendering of the React application into the DOM.
 * It mounts the root App component within React.StrictMode for development checks.
 */

// Locate the root DOM element
const rootElement = document.getElementById('root');

// Safety check to ensure root element exists before mounting
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Create React root and render the application
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);