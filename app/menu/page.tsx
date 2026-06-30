'use client';

import React, { useState } from 'react';
import { useMenu } from '@/context/MenuContext';
import { DishCategory, Dish } from '../../types';
import '@/app/styles/Menu.css';

export default function Menu() {
  const { items } = useMenu();
  const [activeCategory, setActiveCategory] = useState<DishCategory | 'All'>('All');

  // Create list of categories for filter tabs
  const categories = ['All', ...Object.values(DishCategory)];

  // Filter items based on selected category
  const filteredItems =
    activeCategory === 'All' ? items : items.filter(item => item.category === activeCategory);

  // Group items by category (used when All is selected)
  const groupedItems = Object.values(DishCategory).reduce(
    (acc, cat) => {
      const group = items.filter(item => item.category === cat);
      if (group.length > 0) acc[cat] = group;
      return acc;
    },
    {} as Record<string, Dish[]>
  );

  return (
    <div className="menu-page">
      {/* Header */}
      <div className="menu-header-bg">
        <div className="menu-header-content">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-subtitle">
            Authentic Lao-Thai cuisine with our signature roasted duck.
          </p>
        </div>
      </div>

      {/* Sticky Category Filter */}
      <div className="filter-bar">
        <div className="filter-container">
          <div className="filter-scroll">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as DishCategory | 'All')}
                className={`filter-btn ${activeCategory === cat ? 'active' : 'inactive'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom">
        {activeCategory === 'All' ? (
          /* Grouped view — one section per category */
          Object.entries(groupedItems).map(([category, categoryItems]) => (
            <div key={category} className="menu-category-section">
              <h2 className="menu-category-heading">{category}</h2>
              <div className="menu-grid">
                {categoryItems.map((item: Dish) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))
        ) : (
          /* Single-category flat grid */
          <>
            <div className="menu-grid">
              {filteredItems.map((item: Dish) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
            {filteredItems.length === 0 && (
              <div className="empty-state">
                <p className="empty-text">No items found in this category.</p>
              </div>
            )}
          </>
        )}

        <div className="mt-12 mb-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm italic">* All prices do not reflect taxes.</p>
        </div>
      </div>
    </div>
  );
}

function MenuCard({ item }: { item: Dish }) {
  return (
    <div className="menu-item animate-slide-up">
      <div className="menu-item-image-wrapper">
        <img src={item.image} alt={item.name} className="menu-item-image" />
      </div>
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{item.name}</h3>
          <span className="menu-item-price">
            {item.price > 0
              ? item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
              : 'Ask server'}
          </span>
        </div>
        <p className="menu-item-desc">{item.description}</p>
        <div className="tags">
          {item.isGlutenFree && <span className="tag tag-gf">GF</span>}
          {item.isVegetarian && <span className="tag tag-veg">Veg</span>}
          {item.isSpicy && <span className="tag tag-spicy">Spicy</span>}
        </div>
      </div>
    </div>
  );
}
