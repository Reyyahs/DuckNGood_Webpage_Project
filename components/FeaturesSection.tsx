import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  features: FeatureCardProps[];
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">
        <Icon size={32} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default function FeaturesSection({ features, className = '' }: FeaturesSectionProps) {
  return (
    <section className={`features-section section-padding ${className}`}>
      <div className="container-custom">
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}