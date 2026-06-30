'use client';

import React from 'react';
import { Star, Award, Utensils } from 'lucide-react';
import Link from 'next/link';
import { useMenu } from '@/context/MenuContext';
import FeaturesSection from '@/components/ui/FeaturesSection';
import '@/app/styles/Home.css';

const REVIEWS = [
  {
    id: 1,
    author: 'Sophie Morel',
    rating: 5,
    text: 'The roasted duck was absolutely divine! The skin was perfectly crispy and the meat tender. Best French dining experience in the city.',
    time: '2 days ago',
  },
  {
    id: 2,
    author: 'James Thornton',
    rating: 5,
    text: 'Impeccable service and a wine list to die for. The Duck Confit is a must-try. Will definitely be returning for our anniversary.',
    time: '1 week ago',
  },
  {
    id: 3,
    author: 'Elena Rodriguez',
    rating: 5,
    text: 'Lovely atmosphere and great food. The portions are generous. I wish I had saved more room for the lavender crème brûlée!',
    time: '2 weeks ago',
  },
];

const FEATURES = [
  {
    icon: Utensils,
    title: 'Farm to Table',
    description:
      'We partner with local free-range farms to ensure every ingredient is ethically sourced and of the highest quality.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description:
      'Recognized by top culinary critics for our innovative approach to texture, flavor balance, and presentation.',
  },
  {
    icon: Star,
    title: 'World Class Service',
    description:
      'Impeccable attention to detail. Our staff is dedicated to providing an unforgettable dining experience.',
  },
  {
    icon: Star,
    title: 'Amazing Taste',
    description:
      'Great things come from great taste. Our staff is dedicated to providing an unforgettable dining experience.',
  },
];

export default function Home() {
  const { items } = useMenu();
  const featuredDishes = items.filter(item => item.featured).slice(0, 3);

  return (
    <div className="home-container">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-bg-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
            alt="Fine dining ambience at DucknGood"
            className="hero-image"
          />
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="hero-content animate-fade-zoom">
          <div className="hero-badge">
            <span className="hero-badge-line"></span>
            <span className="hero-badge-text">Authentic Lao-Thai Cuisine · Est. 2019</span>
            <span className="hero-badge-line"></span>
          </div>
          <h1 className="hero-title">
            Where <em>Duck</em> Meets Tradition.
          </h1>
          <p className="hero-subtitle">
            Bold flavors rooted in Hmong heritage. From our signature roasted duck to hand-rolled
            pho — every dish tells a story.
          </p>
          <div className="hero-buttons">
            <Link href="/menu" className="btn-primary">
              View the Menu
            </Link>
            <Link href="/contact" className="btn-ghost">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <FeaturesSection features={FEATURES} />

      {/* Signature Dishes */}
      <section className="dishes-section">
        <div className="dishes-header">
          <div>
            <span className="section-eyebrow">Chef&apos;s Selection</span>
            <h2 className="section-title">Signature Dishes</h2>
          </div>
          <Link href="/menu" className="dishes-view-all">
            Full Menu →
          </Link>
        </div>

        {featuredDishes.length > 0 ? (
          <div className="dishes-grid">
            {featuredDishes.map(dish => (
              <div key={dish.id} className="dish-card-new">
                <div className="dish-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dish.image} alt={dish.name} className="dish-img-new" />
                  <span className="dish-badge-new">Featured</span>
                </div>
                <div className="dish-body-new">
                  <span className="section-eyebrow">Signature</span>
                  <h3 className="dish-name-new">{dish.name}</h3>
                  <p className="dish-desc-new">{dish.description}</p>
                  <div className="dish-footer-new">
                    <span className="dish-price-new">${dish.price}</span>
                    <Link href="/menu" className="dish-link-new">
                      View Menu →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--cream-dim)', fontSize: '0.9rem' }}>
            No featured dishes available at the moment.
          </p>
        )}
      </section>

      {/* Reviews */}
      <section className="reviews-section-new section-padding">
        <div className="container-custom">
          <div className="reviews-header-new">
            <span className="section-eyebrow">Guest Experiences</span>
            <h2 className="section-title">
              What People
              <br />
              Are Saying
            </h2>
          </div>
          <div className="reviews-grid-new">
            {REVIEWS.map(review => (
              <div key={review.id} className="review-card-new">
                <div className="review-stars-new">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#C89B3C" stroke="none" />
                  ))}
                </div>
                <p className="review-text-new">&ldquo;{review.text}&rdquo;</p>
                <div className="review-meta-new">
                  <span className="review-author-new">{review.author}</span>
                  <span className="review-time-new">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section-new">
        <div className="cta-rule-new"></div>
        <span className="section-eyebrow">Book your table</span>
        <h2 className="cta-title-new">
          Taste the
          <br />
          <em>Excellence</em>
        </h2>
        <p className="cta-text-new">
          Experience why DucknGood is the city&apos;s premier destination for modern poultry
          cuisine.
        </p>
        <Link href="/contact" className="btn-primary">
          Reserve a Table
        </Link>
      </section>
    </div>
  );
}
