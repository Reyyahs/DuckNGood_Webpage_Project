import React from 'react';
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  ChefHat,
  Clock,
  DollarSign,
  Check,
} from 'lucide-react';
import './Careers.css';

/**
 * Job Position Interface
 * Defines structure for open role listings.
 */
interface JobPosition {
  id: string;
  title: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
}

// --- Static Data for Job Openings ---
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

/**
 * Careers Page Component
 *
 * Displays company values and current job openings.
 */
export const Careers: React.FC = () => {
  return (
    <div className="careers-page">
      {/* Header */}
      <div className="careers-header">
        <div className="careers-header-content animate-fade-zoom">
          <span className="careers-eyebrow">Join the Flock</span>
          <h1 className="careers-title">Craft Excellence With Us</h1>
          <p className="careers-subtitle">
            Be part of a team that is redefining the modern dining experience. Passion, precision,
            and poultry.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Why DucknGood?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We believe that happy staff leads to happy guests. We invest in our team just as much
              as we invest in our ingredients.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper">
                <ChefHat className="h-8 w-8" />
              </div>
              <h3 className="value-title">Culinary Innovation</h3>
              <p className="value-text">
                Work with the finest ingredients and state-of-the-art equipment. We encourage
                creativity and new ideas in the kitchen.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-wrapper">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="value-title">Growth Opportunities</h3>
              <p className="value-text">
                We promote from within. Whether you start as a commis or a server, there is a clear
                path for career advancement.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-wrapper">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="value-title">Inclusive Culture</h3>
              <p className="value-text">
                A supportive, diverse, and respectful work environment where every team member's
                voice is heard and valued.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-wrapper">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="value-title">Comprehensive Benefits</h3>
              <p className="value-text">
                Competitive salary, health insurance, paid time off, and of course, amazing staff
                meals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-700 pb-6">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-2">Current Openings</h2>
              <p className="text-gray-400">Find your place in our kitchen or dining room.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-brand-500 font-medium">
                {OPEN_POSITIONS.length} positions available
              </span>
            </div>
          </div>

          <div className="jobs-list">
            {OPEN_POSITIONS.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-meta-item">
                        <Briefcase className="h-4 w-4" /> {job.department}
                      </span>
                      <span className="job-meta-item">
                        <Clock className="h-4 w-4" /> {job.type}
                      </span>
                      <span className="job-meta-item">
                        <DollarSign className="h-4 w-4" /> Competitive
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@duckngood.com?subject=Application for ${job.title}`}
                    className="apply-btn"
                  >
                    Apply Now
                  </a>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements">
                  <h4 className="req-title">Requirements:</h4>
                  <ul className="req-list">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="req-item">
                        <Check className="h-4 w-4 text-brand-500 mt-1 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-brand-500/5 border border-brand-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">Don't see the right role?</h3>
            <p className="text-gray-400 mb-6">
              We are always looking for talent. Send your resume and cover letter to us directly.
            </p>
            <a
              href="mailto:careers@duckngood.com"
              className="inline-block px-6 py-3 border border-brand-500 text-brand-500 font-semibold rounded-lg hover:bg-brand-500 hover:text-dark-900 transition-colors"
            >
              Email Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
