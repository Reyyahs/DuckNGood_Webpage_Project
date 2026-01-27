'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Award, Utensils, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useMenu } from '@/context/MenuContext';
import FeaturesSection from '@/components/FeaturesSection';
import '@/app/styles/Home.css';

// --- Static Data for Reviews ---
const REVIEWS = [
  {
    id: 1,
    author: "Sophie Morel",
    rating: 5,
    text: "The roasted duck was absolutely divine! The skin was perfectly crispy and the meat tender. Best French dining experience in the city.",
    time: "2 days ago"
  },
  {
    id: 2,
    author: "James Thornton",
    rating: 5,
    text: "Impeccable service and a wine list to die for. The Duck Confit is a must-try. Will definitely be returning for our anniversary.",
    time: "1 week ago"
  },
  {
    id: 3,
    author: "Elena Rodriguez",
    rating: 5,
    text: "Lovely atmosphere and great food. The portions are generous. I wish I had saved more room for the lavender crème brûlée!",
    time: "2 weeks ago"
  }
];

// --- Features Data ---
const FEATURES = [
  {
    icon: Utensils,
    title: "Farm to Table",
    description: "We partner with local free-range farms to ensure every ingredient is ethically sourced and of the highest quality."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by top culinary critics for our innovative approach to texture, flavor balance, and presentation."
  },
  {
    icon: Star,
    title: "World Class Service",
    description: "Impeccable attention to detail. Our staff is dedicated to providing an unforgettable dining experience."
  },
{
    icon: Star,
    title: "Amazing Taste",
    description: "Great things come from great taste. Our staff is dedicated to providing an unforgettable dining experience."
  },
];

export default function Home() {
  const { items } = useMenu();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Filter featured items
  const featuredDishes = items.filter(item => item.featured);

  // Carousel Handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredDishes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play carousel
  useEffect(() => {
    if (featuredDishes.length <= 1 || isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [featuredDishes.length, isPaused]);

  return (
    <div className="home-container">
      
      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-bg-container">
          <img 
            src="https://picsum.photos/id/431/1920/1080" 
            alt="Roasted Duck Centerpiece" 
            className="hero-image"
          />
          <div className="hero-overlay-gradient"></div>
          <div className="hero-overlay-dark"></div>
        </div>

        <div className="hero-content animate-fade-zoom">
          <div className="hero-badge">
            <span className="hero-badge-text">Michelin Star Rated 2024</span>
          </div>
          <h1 className="hero-title">
            Duck<span className="text-accent">n</span>Good
          </h1>
          <p className="hero-subtitle">
            Where traditional French techniques meet modern culinary innovation.
            An unforgettable dining experience centered around the finest poultry.
          </p>
          <div className="hero-buttons">
            <Link href="/menu" className="btn-primary">
              View Menu
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* --- Features/Highlights Section --- */}
      <FeaturesSection features={FEATURES} />

      {/* --- Featured Menu Carousel Section --- */}
      <section className="menu-preview-section section-padding">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-eyebrow">Chef's Selection</span>
            <h3 className="section-title">Signature Dishes</h3>
          </div>

          {featuredDishes.length > 0 ? (
            <div 
              className="carousel-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Previous Button */}
              <button 
                onClick={prevSlide} 
                className="carousel-btn prev" 
                aria-label="Previous Slide"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Carousel Track */}
              <div className="carousel-viewport">
                <div 
                  className="carousel-track" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {featuredDishes.map((dish) => (
                    <div key={dish.id} className="carousel-slide">
                      <div className="dish-card carousel-mode">
                        <div className="dish-image-container carousel-mode-img">
                          <img 
                            src={dish.image} 
                            alt={dish.name} 
                            className="dish-image"
                          />
                          <span className="dish-badge-overlay">Featured</span>
                        </div>
                        <div className="dish-content carousel-mode-content">
                          <div className="dish-header">
                            <h4 className="dish-name">{dish.name}</h4>
                            <span className="dish-price">${dish.price}</span>
                          </div>
                          <p className="dish-description">
                            {dish.description}
                          </p>
                          <div className="dish-meta">
                             {/* Optional: Add icons like GF/Veg here if needed */}
                          </div>
                          <Link href="/menu" className="dish-link text-lg">
                            View Full Menu <ArrowRight className="link-icon" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button 
                onClick={nextSlide} 
                className="carousel-btn next" 
                aria-label="Next Slide"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Indicators */}
              <div className="carousel-dots">
                {featuredDishes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`carousel-dot ${currentSlide === idx ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>No featured dishes available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- Reviews Section --- */}
      <section className="reviews-section section-padding">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-eyebrow">Guest Experiences</span>
            <h3 className="section-title">What People Are Saying</h3>
            
            {/* Google Rating Badge */}
            <div className="google-rating-badge">
              <div className="google-logo">
                <span className="g-blue">G</span>
                <span className="g-red">o</span>
                <span className="g-yellow">o</span>
                <span className="g-blue">g</span>
                <span className="g-green">l</span>
                <span className="g-red">e</span>
              </div>
              <div className="rating-info">
                <span className="rating-score">4.9</span>
                <div className="stars-row">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#fbbf24" stroke="none" />)}
                </div>
                <span className="review-count">Based on 128 reviews</span>
              </div>
            </div>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-quote-icon">
                  <Quote size={20} className="text-white" />
                </div>
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" stroke="none" />
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-footer">
                  <div className="review-author-avatar">
                    {review.author.charAt(0)}
                  </div>
                  <div className="review-meta">
                    <span className="review-author">{review.author}</span>
                    <span className="review-time">{review.time}</span>
                  </div>
                  <div className="review-source-icon">
                    {/* SVG Representation of Google G Icon */}
                    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call To Action Section --- */}
      <section className="cta-section">
        <div className="pattern-overlay"></div>
        <div className="cta-content">
          <h2 className="cta-title">Taste the Excellence</h2>
          <p className="cta-text">
            Experience why DucknGood is the city's premier destination for modern poultry cuisine.
          </p>
          <Link href="/contact" className="btn-white">
            Visit Us
          </Link>
        </div>
      </section>
    </div>
  );
}
