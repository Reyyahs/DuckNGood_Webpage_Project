'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          
          <Link href="/" className="navbar-logo">
            <span className="logo-text">
              Duck<span className="logo-accent">n</span>Good
            </span>
          </Link>
          
          <div className="desktop-nav">
            <div className="nav-links-wrapper">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`nav-link ${pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

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

      <div className={`mobile-menu-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`mobile-nav-link ${pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
