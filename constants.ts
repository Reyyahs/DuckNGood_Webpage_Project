import { Dish, DishCategory } from './types';

/**
 * Application Constants
 * 
 * Stores static configuration, initial data, and system prompts.
 */

export const APP_NAME = "DucknGood";

/**
 * AI System Instruction
 * 
 * Defines the persona and knowledge base for the Gemini AI Chatbot.
 * It provides context about the menu, location, and tone of voice.
 */
export const AI_SYSTEM_INSTRUCTION = `You are the knowledgeable and charming virtual concierge for DucknGood, a modern French restaurant specializing in duck cuisine.
Your goal is to assist guests by answering questions about our menu, location, hours, and atmosphere.

Policy:
- We do not accept reservations. Seating is first-come, first-served.
- If asked about booking, politely inform the guest of our walk-in only policy.

Key Menu Items:
- Starters: Duck Rillettes (Slow-cooked), Foie Gras Terrine (House-made), Crispy Duck Skin Salad.
- Mains: Signature Roasted Duck (Dry-aged, lavender honey), Duck Confit (Truffled mash), Smoked Duck Breast Pasta.
- Desserts: Orange Cointreau Soufflé, Lavender Crème Brûlée.
- Drinks: The Golden Egg (Duck fat washed bourbon), Pinot Noir Reserve.

Restaurant Details:
- Address: 123 Culinary Ave, Food District, FD 90210.
- Hours: Mon-Thu 5pm-10pm, Fri-Sat 5pm-11pm, Sun 4pm-9:30pm.
- Contact: +1 (555) 123-DUCK, hello@duckngood.com.

Style Guide:
- Maintain a polite, somewhat formal but warm French-inspired persona.
- Keep responses concise (under 3 sentences when possible).
- Recommend specific dishes based on user preferences.
- If asked about allergies, mention we mark GF (Gluten Free), Veg (Vegetarian), and Spicy items on the menu.`;

/**
 * Initial Menu Data
 * 
 * Populates the MenuContext with default items.
 */
export const MENU_ITEMS: Dish[] = [
  // --- Starters ---
  {
    id: 's1',
    name: 'Duck Rillettes',
    description: 'Slow-cooked shredded duck leg with aromatic herbs, served with toasted sourdough and cornichons.',
    price: 18,
    category: DishCategory.STARTERS,
    image: 'https://picsum.photos/id/102/800/600',
    featured: true
  },
  {
    id: 's2',
    name: 'Foie Gras Terrine',
    description: 'House-made terrine with fig jam and brioche.',
    price: 26,
    category: DishCategory.STARTERS,
    image: 'https://picsum.photos/id/292/800/600'
  },
  {
    id: 's3',
    name: 'Crispy Duck Skin Salad',
    description: 'Augula, pomegranate, roasted pecans, and crispy duck skin cracklings with orange vinaigrette.',
    price: 16,
    category: DishCategory.STARTERS,
    image: 'https://picsum.photos/id/493/800/600',
    isGlutenFree: true
  },
  // --- Mains ---
  {
    id: 'm1',
    name: 'Signature Roasted Duck',
    description: 'Dry-aged for 7 days, glazed with lavender honey and roasted to perfection. Served with roasted root vegetables.',
    price: 42,
    category: DishCategory.MAINS,
    image: 'https://picsum.photos/id/431/800/600',
    featured: true,
    isGlutenFree: true
  },
  {
    id: 'm2',
    name: 'Duck Confit',
    description: 'Traditional french preparation, crispy skin leg served over truffled mashed potatoes.',
    price: 36,
    category: DishCategory.MAINS,
    image: 'https://picsum.photos/id/835/800/600'
  },
  {
    id: 'm3',
    name: 'Smoked Duck Breast Pasta',
    description: 'Handmade pappardelle, creamy mushroom sauce, spinach, and smoked duck slices.',
    price: 32,
    category: DishCategory.MAINS,
    image: 'https://picsum.photos/id/412/800/600'
  },
  // --- Desserts ---
  {
    id: 'd1',
    name: 'Orange Cointreau Soufflé',
    description: 'Light, airy, and served with a dark chocolate ganache pour.',
    price: 14,
    category: DishCategory.DESSERTS,
    image: 'https://picsum.photos/id/1060/800/600',
    isVegetarian: true
  },
  {
    id: 'd2',
    name: 'Lavender Crème Brûlée',
    description: 'Classic custard with a floral twist and caramelized sugar crust.',
    price: 12,
    category: DishCategory.DESSERTS,
    image: 'https://picsum.photos/id/1080/800/600',
    isVegetarian: true,
    isGlutenFree: true
  },
  // --- Drinks ---
  {
    id: 'dr1',
    name: 'The Golden Egg',
    description: 'Duck fat washed bourbon, maple syrup, bitters, orange zest.',
    price: 18,
    category: DishCategory.DRINKS,
    image: 'https://picsum.photos/id/999/800/600'
  },
  {
    id: 'dr2',
    name: 'Pinot Noir Reserve',
    description: 'Glass of our house reserve Pinot Noir, perfect pairing for duck.',
    price: 15,
    category: DishCategory.DRINKS,
    image: 'https://picsum.photos/id/296/800/600'
  }
];