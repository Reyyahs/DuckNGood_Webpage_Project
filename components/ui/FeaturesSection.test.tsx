import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturesSection, { FeatureCard } from './FeaturesSection';
import { Utensils } from 'lucide-react';

describe('FeaturesSection', () => {
  const mockFeatures = [
    {
      icon: Utensils,
      title: 'Test Feature',
      description: 'This is a test feature description',
    },
  ];

  it('renders features correctly', () => {
    render(<FeaturesSection features={mockFeatures} />);

    expect(screen.getByText('Test Feature')).toBeInTheDocument();
    expect(screen.getByText('This is a test feature description')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <FeaturesSection features={mockFeatures} className="custom-class" />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });
});

describe('FeatureCard', () => {
  it('renders feature card with icon, title, and description', () => {
    render(<FeatureCard icon={Utensils} title="Test Title" description="Test Description" />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
