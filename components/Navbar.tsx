import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

/**
 * Navbar Component
 * 
 * Responsive navigation bar with:
 * 1. Scroll detection to change background opacity.
 * 2. Mobile hamburger menu toggle.
 * 3. Active link highlighting.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);     // Mobile menu state
  const [scrolled, setScrolled] = useState(false); // Scroll state for styling
  const location = useLocation();

  // --- Scroll Effect ---
  // Adds background blur/shadow when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Route Change Handler ---
  // Closes mobile menu automatically when a link is clicked
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navigation Items Configuration
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span className="logo-text">
              Duck<span className="logo-accent">n</span>Good
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <div className="nav-links-wrapper">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn-wrapper">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <div className={`icon-transition ${isOpen ? 'open' : ''}`}>
                {isOpen ? (
                  <X className="mobile-icon active" />
                ) : (
                  <Menu className="mobile-icon" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};