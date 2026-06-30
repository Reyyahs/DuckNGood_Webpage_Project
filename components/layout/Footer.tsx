'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Lock } from 'lucide-react';
import { SOCIAL_LINKS } from '../../lib/constants';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <h3 className="footer-brand-text">
              Duck<span className="text-accent-500">n</span>Good
            </h3>
            <p className="footer-description">
              Experience the pinnacle of poultry perfection. Sustainable sourcing, modern
              techniques, and timeless flavors.
            </p>
            <div className="footer-socials">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon-link"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon-link"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon-link"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-list">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="footer-link">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/careers" className="footer-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list">
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <span>
                  123 Culinary Ave,
                  <br />
                  Food District, FD 90210
                </span>
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

          <div>
            <h4 className="footer-heading">Opening Hours</h4>
            <ul className="footer-list">
              <li className="hours-item">
                <span>Mon - Tues</span>
                <span className="hours-time">11:00 AM - 8:00 PM</span>
              </li>
              <li className="hours-item">
                <span>Wednesday</span>
                <span className="hours-time">Closed</span>
              </li>
              <li className="hours-item">
                <span>Thur - Sat</span>
                <span className="hours-time">11:00 AM - 8:00PM</span>
              </li>
              <li className="hours-item">
                <span>Sun</span>
                <span className="hours-time">11:00 AM - 6:00PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2024 DucknGood Restaurant. All rights reserved.</p>
          <div className="legal-links">
            <a href="#" className="legal-link">
              Privacy Policy
            </a>
            <a href="#" className="legal-link">
              Terms of Service
            </a>
            <Link href="/admin" className="legal-link admin-link">
              <Lock size={12} /> Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
