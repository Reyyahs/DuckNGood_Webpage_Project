import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Component Imports
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

// Page Imports
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { Admin } from './pages/Admin';

// State Management
import { MenuProvider } from './context/MenuContext';

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls the window to the top whenever the route changes.
 * Ensures users see the top of the page when navigating.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * Layout Component
 * 
 * Manages the main structure of the application.
 * Conditionally renders the Navbar, Footer, and ChatWidget based on the current route.
 * (e.g., Hides navigation on the Admin panel).
 */
const Layout: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
      {/* Conditionally render Navbar if not in Admin area */}
      {!isAdminRoute && <Navbar />}
      
      {/* Main Content Area - Adds top padding if Navbar is present to prevent overlap */}
      <main className={`flex-grow ${!isAdminRoute ? 'pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      
      {/* Footer and ChatWidget - hidden on Admin pages */}
      {!isAdminRoute && (
        <>
          <Footer />
          <ChatWidget />
        </>
      )}
    </div>
  );
};

/**
 * Main App Component
 * 
 * Wraps the application with necessary Providers (Menu, Router).
 */
const App: React.FC = () => {
  return (
    <MenuProvider>
      <Router>
        <ScrollToTop />
        <Layout />
      </Router>
    </MenuProvider>
  );
};

export default App;