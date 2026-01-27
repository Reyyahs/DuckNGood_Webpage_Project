import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Lock } from 'lucide-react';
import './Footer.css';

/**
 * Footer Component
 * 
 * Displays site-wide footer information including:
 * - Brand description and social links
 * - Quick navigation links
 * - Contact information
 * - Opening hours
 * - Admin login link
 */
export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-grid">
          
          {/* Brand & Socials */}
          <div className="footer-brand-col">
            <h3 className="footer-brand-text">
              Duck<span className="text-accent-500">n</span>Good
            </h3>
            <p className="footer-description">
              Experience the pinnacle of poultry perfection. Sustainable sourcing, modern techniques, and timeless flavors.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-link">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-link">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/menu" className="footer-link">Full Menu</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list">
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <span>123 Culinary Ave,<br />Food District, FD 90210</span>
              </li>
              <li className="contact-item center-align">
                <Phone className="contact-icon" />
                <span>+1 (555) 123-DUCK</span>
              </li>
              <li className="contact-item center-align">
                <Mail className="contact-icon" />
                <span>hello@duckngood.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="footer-heading">Opening Hours</h4>
            <ul className="footer-list">
              <li className="hours-item">
                <span>Mon - Thu</span>
                <span className="hours-time">5:00 PM - 10:00 PM</span>
              </li>
              <li className="hours-item">
                <span>Fri - Sat</span>
                <span className="hours-time">5:00 PM - 11:00 PM</span>
              </li>
              <li className="hours-item">
                <span>Sun</span>
                <span className="hours-time">4:00 PM - 9:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom / Admin Link */}
        <div className="footer-bottom">
          <p className="copyright">© 2024 DucknGood Restaurant. All rights reserved.</p>
          <div className="legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
            <Link to="/admin" className="legal-link admin-link">
              <Lock size={12} /> Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};