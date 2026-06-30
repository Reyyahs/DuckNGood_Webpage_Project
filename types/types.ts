/**
 * Global Type Definitions
 */

export enum DishCategory {
  NOODLES = 'Noodles',
  APPETIZERS = 'Appetizers',
  ENTREES = 'Duckn Entrees',
  HOUSE_SPECIALS = 'House Specials',
  TERIYAKI = 'Teriyaki',
  FRIED_RICE = 'Fried Rice',
  SIDES = 'Sides & Extras',
  KIDS = 'Kids Menu',
  DRINKS = 'Drinks',
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: DishCategory;
  image: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  featured?: boolean;
}
