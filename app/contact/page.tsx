'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import '@/app/styles/Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <div className="contact-header-content">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container-custom">
        <div className="contact-grid">
          
          {/* Information Cards */}
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-icon-wrapper">
                <MapPin size={24} />
              </div>
              <h3 className="info-card-title">Location</h3>
              <p className="info-card-text">
                123 Culinary Ave,<br />
                Food District, FD 90210
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <Phone size={24} />
              </div>
              <h3 className="info-card-title">Phone</h3>
              <p className="info-card-text">
                +1 (555) 123-DUCK<br />
                +1 (555) 987-6543
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <Mail size={24} />
              </div>
              <h3 className="info-card-title">Email</h3>
              <p className="info-card-text">
                hello@duckngood.com
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <Clock size={24} />
              </div>
              <h3 className="info-card-title">Hours</h3>
              <p className="info-card-text">
                Mon-Thu: 5pm - 10pm<br />
                Fri-Sat: 5pm - 11pm
              </p>
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="map-container">
            <img 
              src="https://picsum.photos/id/1048/800/600" 
              alt="Map Location" 
              className="map-image"
            />
            <div className="map-overlay">
              <div className="map-label">
                <p className="map-label-text">Interactive Map Placeholder</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
