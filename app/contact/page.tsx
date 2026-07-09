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
          <p className="contact-subtitle">We&apos;d love to hear from you.</p>
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
                3005 1st Ave SW,
                <br />
                Hickory, NC 28602
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <Phone size={24} />
              </div>
              <h3 className="info-card-title">Phone</h3>
              <p className="info-card-text">
                +1 (555) 123-DUCK
                <br />
                +1 (555) 987-6543
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <Mail size={24} />
              </div>
              <h3 className="info-card-title">Email</h3>
              <p className="info-card-text">hello@duckngood.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper">
                <Clock size={24} />
              </div>
              <h3 className="info-card-title">Hours</h3>
              <p className="info-card-text">
                Mon-Tues: 11AM - 8PM
                <br />
                Wed : Closed
                <br />
                Fri-Sat: 11AM - 8PM
                <br />
                Sun: 11AM - 6PM
              </p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9011115480794!2d-81.39148042421016!3d35.728650472572056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88512ef985a10a25%3A0x2afbd1e705ced568!2sDuck%20N&#39;%20Good%20Asian%20Cuisine!5e0!3m2!1sen!2sus!4v1782784177174!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
