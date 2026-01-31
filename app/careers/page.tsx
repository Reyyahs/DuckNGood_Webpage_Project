'use client';

import React from 'react';
import { TrendingUp, Heart, ChefHat, DollarSign, Check } from 'lucide-react';
import '@/app/styles/Careers.css';

interface JobPosition {
  id: string;
  title: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'job1',
    title: 'Sous Chef',
    type: 'Full-time',
    department: 'Kitchen',
    description:
      'We are looking for an experienced Sous Chef to assist in leading our kitchen team. You will work closely with our Head Chef to maintain our high standards of culinary excellence.',
    requirements: [
      'Minimum 3 years experience in fine dining',
      'Strong leadership and communication skills',
      'Deep knowledge of French cooking techniques',
      'Ability to work under pressure',
    ],
  },
  {
    id: 'job2',
    title: 'Chef de Partie',
    type: 'Full-time',
    department: 'Kitchen',
    description:
      'Responsible for running a specific section of the kitchen. You must ensure that all dishes are prepared to the highest standard.',
    requirements: [
      'Culinary degree or equivalent experience',
      'Passion for precision and plating',
      'Team player mentality',
      'Flexibility with shifts',
    ],
  },
  {
    id: 'job3',
    title: 'Sommelier',
    type: 'Full-time',
    department: 'Front of House',
    description:
      'Curate our wine list and guide guests through pairings. Must have extensive knowledge of French wines and spirits.',
    requirements: [
      'Certified Sommelier qualification',
      'Excellent customer service skills',
      'Inventory management experience',
      'Passion for storytelling',
    ],
  },
];

export default function Careers() {
  return (
    <div className="careers-page">
      {/* Header */}
      <div className="careers-header">
        <div className="careers-header-content">
          <h1 className="careers-title">Join Our Team</h1>
          <p className="careers-subtitle">Grow your culinary career with DucknGood.</p>
        </div>
      </div>

      <div className="container-custom">
        {/* Overview Section */}
        <section className="why-join-section">
          <h2 className="section-title-careers">Why Work With Us?</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <ChefHat size={32} className="benefit-icon" />
              <h3>Learn from the Best</h3>
              <p>
                Work under renowned chefs in a Michelin-rated kitchen and develop world-class
                techniques.
              </p>
            </div>

            <div className="benefit-card">
              <TrendingUp size={32} className="benefit-icon" />
              <h3>Career Growth</h3>
              <p>
                Clear progression paths and continuous learning opportunities to advance your
                skills.
              </p>
            </div>

            <div className="benefit-card">
              <Heart size={32} className="benefit-icon" />
              <h3>Supportive Culture</h3>
              <p>
                A passionate team environment where your contributions are valued and celebrated.
              </p>
            </div>

            <div className="benefit-card">
              <DollarSign size={32} className="benefit-icon" />
              <h3>Competitive Compensation</h3>
              <p>Excellent pay, benefits, and meal discounts for all team members.</p>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="open-positions-section">
          <h2 className="section-title-careers">Open Positions</h2>

          <div className="positions-grid">
            {OPEN_POSITIONS.map(job => (
              <div key={job.id} className="position-card">
                <div className="position-header">
                  <div>
                    <h3 className="position-title">{job.title}</h3>
                    <p className="position-department">{job.department}</p>
                  </div>
                  <span className="position-type">{job.type}</span>
                </div>

                <p className="position-description">{job.description}</p>

                <div className="requirements-section">
                  <h4 className="requirements-title">Requirements:</h4>
                  <ul className="requirements-list">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>
                        <Check size={16} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
