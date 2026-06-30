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

const EYEBROWS = ['Farm to Table', 'Award Winning', 'World Class', 'Curated Cellar'];

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <div className="features-strip">
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
