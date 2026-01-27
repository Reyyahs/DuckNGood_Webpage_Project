/**
 * Global Type Definitions
 * 
 * This file contains TypeScript interfaces and enums used throughout the application
 * to ensure type safety for data structures like Menu Items.
 */

/**
 * Enum for Dish Categories to ensure consistency in menu filtering.
 */
export enum DishCategory {
  STARTERS = 'Starters',
  MAINS = 'Mains',
  DESSERTS = 'Desserts',
  DRINKS = 'Drinks'
}

/**
 * Interface representing a single menu item (Dish).
 */
export interface Dish {
  id: string;              // Unique identifier
  name: string;            // Name of the dish
  description: string;     // Short description of ingredients/preparation
  price: number;           // Cost in USD
  category: DishCategory;  // Category classification
  image: string;           // URL to the dish image
  isSpicy?: boolean;       // Dietary flag: Spicy
  isVegetarian?: boolean;  // Dietary flag: Vegetarian
  isGlutenFree?: boolean;  // Dietary flag: Gluten Free
  featured?: boolean;      // Flag to display on Home page highlights
}