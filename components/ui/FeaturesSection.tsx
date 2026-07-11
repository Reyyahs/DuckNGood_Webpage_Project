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

const EYEBROWS = ['Farm to Table', 'Award Winning', 'World Class', 'Bold Flavors'];

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <Icon className="feature-card-icon" aria-hidden="true" />
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-desc">{description}</p>
    </div>
  );
}

export default function FeaturesSection({ features, className }: FeaturesSectionProps) {
  return (
    <div className={`features-strip${className ? ` ${className}` : ''}`}>
      {features.map((f, i) => (
        <div key={i} className="features-strip-item">
          <span className="features-strip-eyebrow">{EYEBROWS[i] ?? f.title}</span>
          <h3 className="features-strip-title">{f.title}</h3>
          <p className="features-strip-desc">{f.description}</p>
        </div>
      ))}
    </div>
  );
}
