import { Dish, DishCategory } from '../types';

export const APP_NAME = 'DucknGood';

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
};

export const AI_SYSTEM_INSTRUCTION = `You are the knowledgeable and friendly virtual concierge for DucknGood, an Asian restaurant specializing in pho, duck dishes, and Lao-Thai cuisine.
Your goal is to assist guests by answering questions about our menu, location, hours, and specials.

Policy:
- We do not accept reservations. Seating is first-come, first-served.
- If asked about booking, politely inform the guest of our walk-in only policy.

Key Menu Highlights:
- Noodles: Pho (Veggie, Chicken, Beef, Combination, Roast Pork, Roast Duck), Kapong Noodle, Pad Thai, Pad See Ew.
- Appetizers: Garden Spring Rolls, Egg Rolls, Stuffed Chicken Wings, Fried Potstickers, Fried Laab Wings, Papaya Salad.
- Duckn Entrees: Duck Platter ($17.49), Duck N Combo ($26.49), Chicken/Beef/Shrimp Laab, Thai Basil dishes.
- House Specials: Roasted Pecking Duck (1/4 $15.95, 1/2 $25.95, Whole $39.99), Roasted Pork Belly ($15.95/lb), Duckn Papaya Tray ($39.99).
- Teriyaki: Chicken, Steak, Shrimp, and combo plates.
- Drinks: Bubble Tea, Boba, Thai Tea, Mangonada, Sweet Tea, Hot Tea, and more.

Restaurant Details:
- Address: 3005 1st Ave SW, Hickory, NC 28602.
- Hours: Mon-Tues 11AM-8PM, Wed Closed, Thur-Sat 11AM-8PM, Sun 11AM-6PM.
- Contact: +1 (555) 123-DUCK, hello@duckngood.com.

Style Guide:
- Maintain a warm, friendly, and helpful tone.
- Keep responses concise (under 3 sentences when possible).
- Recommend specific dishes based on user preferences.
- If asked about dietary options, mention we mark GF (Gluten Free), Veg (Vegetarian), and Spicy items.`;

export const MENU_ITEMS: Dish[] = [
  // --- Noodles ---
  {
    id: 'n1',
    name: 'Veggie Pho',
    description:
      'Classic vegetable broth pho with fresh herbs and rice noodles. Med $10.95 / Lg $11.95 / XL $12.95',
    price: 10.95,
    category: DishCategory.NOODLES,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=75',
    isVegetarian: true,
  },
  {
    id: 'n2',
    name: 'Chicken Pho',
    description:
      'Tender chicken in rich aromatic broth with rice noodles and fresh garnishes. Med $12.95 / Lg $13.95 / XL $14.95',
    price: 12.95,
    category: DishCategory.NOODLES,
    image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=75',
  },
  {
    id: 'n3',
    name: 'Beef Pho',
    description:
      'Slow-simmered beef broth with rice noodles, sliced beef, and traditional herbs. Med $12.95 / Lg $13.95 / XL $14.95',
    price: 12.95,
    category: DishCategory.NOODLES,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=75',
    featured: true,
  },
  {
    id: 'n4',
    name: 'Combination Pho',
    description:
      'A hearty combination of meats in our signature broth with rice noodles. Med $14.95 / Lg $15.95 / XL $16.95',
    price: 14.95,
    category: DishCategory.NOODLES,
    image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=75',
  },
  {
    id: 'n5',
    name: 'Roast Pork Pho',
    description:
      'Savory roast pork over rice noodles in our fragrant broth. Med $14.95 / Lg $15.95 / XL $16.95',
    price: 14.95,
    category: DishCategory.NOODLES,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=75',
  },
  {
    id: 'n6',
    name: 'Roast Duck Pho',
    description:
      'Our signature roast duck over rice noodles in rich aromatic broth. Med $23.95 / Lg $24.95 / XL $25.95',
    price: 23.95,
    category: DishCategory.NOODLES,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=75',
    featured: true,
  },
  {
    id: 'n7',
    name: 'Kapong Noodle',
    description:
      'Traditional Kapong noodles with your choice of broth and toppings. Med $12.95 / Lg $13.95 / XL $14.95',
    price: 12.95,
    category: DishCategory.NOODLES,
    image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=75',
  },
  {
    id: 'n8',
    name: 'Pad Thai',
    description:
      'Classic stir-fried rice noodles with egg, bean sprouts, and your choice of protein. Ask server for pricing.',
    price: 0,
    category: DishCategory.NOODLES,
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=75',
  },
  {
    id: 'n9',
    name: 'Pad See Ew',
    description:
      'Wide rice noodles stir-fried in sweet soy sauce with egg and vegetables. No Meat $10.95 / Chicken $13.95 / Steak $14.95 / Shrimp $14.95 / Two Meats $15.95',
    price: 10.95,
    category: DishCategory.NOODLES,
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=75',
  },

  // --- Appetizers ---
  {
    id: 'a1',
    name: 'Garden Spring Rolls (2)',
    description: 'Fresh garden spring rolls with crisp vegetables and dipping sauce.',
    price: 4.99,
    category: DishCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=75',
    isVegetarian: true,
  },
  {
    id: 'a2',
    name: 'Egg Rolls (2)',
    description: 'Crispy golden egg rolls filled with savory pork and vegetables.',
    price: 4.99,
    category: DishCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&q=75',
  },
  {
    id: 'a3',
    name: 'Stuffed Chicken Wing (1)',
    description: 'House specialty stuffed chicken wing, seasoned and fried to perfection.',
    price: 3.99,
    category: DishCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=75',
  },
  {
    id: 'a4',
    name: 'Fried Potstickers (5)',
    description: 'Crispy pan-fried potstickers filled with seasoned pork and vegetables.',
    price: 4.99,
    category: DishCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=75',
  },
  {
    id: 'a5',
    name: 'Fried Chicken Wings (6)',
    description: 'Crispy fried chicken wings seasoned with our house blend of spices.',
    price: 7.99,
    category: DishCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=75',
  },
  {
    id: 'a6',
    name: 'Fried Laab Wings (6)',
    description: 'Crispy chicken wings tossed in our signature Laab herb seasoning.',
    price: 8.99,
    category: DishCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=75',
    isSpicy: true,
  },
  {
    id: 'a7',
    name: 'Papaya Salad',
    description: 'Traditional shredded green papaya salad, Lao or Thai style. Sm $8.75 / Lg $15.95',
    price: 8.75,
    category: DishCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=75',
    isSpicy: true,
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'a8',
    name: 'Chef Special Papaya Salad',
    description: "Chef's special version of our papaya salad with premium toppings.",
    price: 15.95,
    category: DishCategory.APPETIZERS,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=75',
    isSpicy: true,
    isVegetarian: true,
    isGlutenFree: true,
  },

  // --- Duckn Entrees ---
  {
    id: 'e1',
    name: 'Papaya Platter',
    description: 'Generous papaya salad platter served with sticky rice and accompaniments.',
    price: 14.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=75',
    isSpicy: true,
  },
  {
    id: 'e2',
    name: 'Stuffed Chicken Wings Platter',
    description: 'Platter of our signature stuffed chicken wings with sides.',
    price: 12.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=75',
  },
  {
    id: 'e3',
    name: 'Hmong Sausage Platter',
    description: 'Traditional Hmong sausage served with sticky rice and fresh herbs.',
    price: 12.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&q=75',
  },
  {
    id: 'e4',
    name: 'Pork Platter',
    description: 'Savory roasted pork served with rice and house dipping sauce.',
    price: 12.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=75',
  },
  {
    id: 'e5',
    name: 'Duck Platter',
    description: 'Signature roasted duck platter served with rice and house sauce.',
    price: 17.49,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75',
    featured: true,
  },
  {
    id: 'e6',
    name: 'Duck N Combo',
    description: 'The ultimate DucknGood combo — roasted duck with premium sides and sauces.',
    price: 26.49,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75',
    featured: true,
  },
  {
    id: 'e7',
    name: 'Chicken Laab',
    description: 'Minced chicken tossed with toasted rice, fresh herbs, lime juice, and chili.',
    price: 13.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=75',
    isSpicy: true,
    isGlutenFree: true,
  },
  {
    id: 'e8',
    name: 'Beef Laab',
    description: 'Minced beef tossed with toasted rice, fresh herbs, lime juice, and chili.',
    price: 15.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=75',
    isSpicy: true,
    isGlutenFree: true,
  },
  {
    id: 'e9',
    name: 'Shrimp Laab',
    description: 'Minced shrimp tossed with toasted rice, fresh herbs, lime juice, and chili.',
    price: 15.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=75',
    isSpicy: true,
    isGlutenFree: true,
  },
  {
    id: 'e10',
    name: 'Roast Pork Laab',
    description: 'Roast pork tossed with toasted rice, fresh herbs, lime juice, and chili.',
    price: 15.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=75',
    isSpicy: true,
    isGlutenFree: true,
  },
  {
    id: 'e11',
    name: 'Thai Basil Chicken',
    description: 'Stir-fried ground chicken with fresh Thai basil, garlic, and chilies over rice.',
    price: 13.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=75',
    isSpicy: true,
  },
  {
    id: 'e12',
    name: 'Thai Basil Crispy Pork',
    description:
      'Crispy pork belly stir-fried with fresh Thai basil, garlic, and chilies over rice.',
    price: 13.95,
    category: DishCategory.ENTREES,
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=75',
    isSpicy: true,
  },

  // --- House Specials ---
  {
    id: 'h1',
    name: 'Roasted Pecking Duck',
    description:
      'Whole roasted Peking-style duck with crispy skin. 1/4 $15.95 / 1/2 $25.95 / Whole $39.99',
    price: 15.95,
    category: DishCategory.HOUSE_SPECIALS,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75',
    isGlutenFree: true,
    featured: true,
  },
  {
    id: 'h2',
    name: 'Roasted Pork Belly',
    description: 'Slow-roasted pork belly with crackling skin. Priced at $15.95 per pound.',
    price: 15.95,
    category: DishCategory.HOUSE_SPECIALS,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=75',
    isGlutenFree: true,
  },
  {
    id: 'h3',
    name: 'Pork Intestine',
    description: 'Cleaned and seasoned pork intestine prepared in our house style.',
    price: 14.95,
    category: DishCategory.HOUSE_SPECIALS,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=75',
  },
  {
    id: 'h4',
    name: 'Fried Tilapia Fish',
    description: 'Whole tilapia fried golden and served with house dipping sauce.',
    price: 19.95,
    category: DishCategory.HOUSE_SPECIALS,
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&q=75',
    isGlutenFree: true,
  },
  {
    id: 'h5',
    name: 'Bitter Soup',
    description: 'Traditional bitter soup with herbs and your choice of meat.',
    price: 14.95,
    category: DishCategory.HOUSE_SPECIALS,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=75',
  },
  {
    id: 'h6',
    name: "Duckn' Papaya Tray",
    description: 'A feast tray with papaya salad and all the fixings. Add 2 small rice for +$7.50.',
    price: 39.99,
    category: DishCategory.HOUSE_SPECIALS,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=75',
    isSpicy: true,
  },

  // --- Teriyaki ---
  {
    id: 't1',
    name: 'Chicken Teriyaki',
    description: 'Grilled chicken glazed with house teriyaki sauce, served over steamed rice.',
    price: 12.5,
    category: DishCategory.TERIYAKI,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=75',
  },
  {
    id: 't2',
    name: 'Steak Teriyaki',
    description: 'Grilled steak glazed with house teriyaki sauce, served over steamed rice.',
    price: 14.25,
    category: DishCategory.TERIYAKI,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=75',
  },
  {
    id: 't3',
    name: 'Shrimp Teriyaki',
    description: 'Grilled shrimp glazed with house teriyaki sauce, served over steamed rice.',
    price: 14.25,
    category: DishCategory.TERIYAKI,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=75',
  },
  {
    id: 't4',
    name: 'Chicken & Steak Teriyaki',
    description: 'Combo plate of grilled chicken and steak with teriyaki glaze over rice.',
    price: 15.5,
    category: DishCategory.TERIYAKI,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=75',
  },
  {
    id: 't5',
    name: 'Steak & Shrimp Teriyaki',
    description: 'Combo plate of grilled steak and shrimp with teriyaki glaze over rice.',
    price: 15.5,
    category: DishCategory.TERIYAKI,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=75',
  },
  {
    id: 't6',
    name: 'House Special Teriyaki',
    description: "Chef's combination of premium proteins with house teriyaki sauce over rice.",
    price: 15.95,
    category: DishCategory.TERIYAKI,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=75',
  },

  // --- Fried Rice ---
  {
    id: 'fr1',
    name: 'Fried Rice',
    description:
      'Wok-fried jasmine rice with egg and vegetables. No Meat $10.95 / Chicken $13.95 / Steak $14.95 / Shrimp $14.95 / House $15.95',
    price: 10.95,
    category: DishCategory.FRIED_RICE,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=75',
  },
  {
    id: 'fr2',
    name: 'Thai Basil Fried Rice',
    description:
      'Wok-fried jasmine rice with fresh Thai basil, egg, and your choice of protein. Ask server for pricing.',
    price: 0,
    category: DishCategory.FRIED_RICE,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=75',
    isSpicy: true,
  },

  // --- Sides & Extras ---
  {
    id: 'si1',
    name: 'Sticky Rice',
    description: 'Traditional glutinous rice. Sm $5.00 / Lg $9.00',
    price: 5.0,
    category: DishCategory.SIDES,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=75',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'si2',
    name: 'Jasmine Rice',
    description: 'Steamed fragrant jasmine rice. Sm $3.50 / Lg $7.00',
    price: 3.5,
    category: DishCategory.SIDES,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=75',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'si3',
    name: 'Hmong Sausage',
    description: 'Traditional Hmong-style pork sausage seasoned with lemongrass and herbs.',
    price: 7.95,
    category: DishCategory.SIDES,
    image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&q=75',
    isGlutenFree: true,
  },
  {
    id: 'si4',
    name: 'Stir Fry Mixed Veggies',
    description: 'Seasonal vegetables stir-fried in garlic sauce. Sm $5.95 / Lg $9.95',
    price: 5.95,
    category: DishCategory.SIDES,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=75',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'si5',
    name: 'Beef Broth',
    description: 'Our slow-simmered rich beef broth, perfect as a side or add-on.',
    price: 3.5,
    category: DishCategory.SIDES,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=75',
    isGlutenFree: true,
  },
  {
    id: 'si6',
    name: 'Egg Drop Soup',
    description: 'Classic egg drop soup with silky egg ribbons. Sm $4.95 / Lg $7.95',
    price: 4.95,
    category: DishCategory.SIDES,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=75',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'si7',
    name: 'Shrimp Sauce',
    description: 'House shrimp dipping sauce.',
    price: 1.0,
    category: DishCategory.SIDES,
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=75',
  },
  {
    id: 'si8',
    name: 'Original Pepper Sauce',
    description: 'House original pepper dipping sauce.',
    price: 1.0,
    category: DishCategory.SIDES,
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=75',
    isSpicy: true,
  },
  {
    id: 'si9',
    name: "Chong's Spicy Sauce",
    description: "Chong's signature extra spicy house sauce.",
    price: 1.0,
    category: DishCategory.SIDES,
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=75',
    isSpicy: true,
  },

  // --- Kids Menu ---
  {
    id: 'k1',
    name: 'Kids Pho',
    description: 'A smaller portion of our classic pho, perfect for little ones.',
    price: 8.95,
    category: DishCategory.KIDS,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=75',
  },
  {
    id: 'k2',
    name: 'Kids Kapong',
    description: 'A smaller portion of Kapong noodles for kids.',
    price: 8.95,
    category: DishCategory.KIDS,
    image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=75',
  },
  {
    id: 'k3',
    name: 'Fried Rice & Wings (4)',
    description: 'Kids fried rice served with 4 chicken wings.',
    price: 8.95,
    category: DishCategory.KIDS,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=75',
  },

  // --- Drinks ---
  {
    id: 'dr1',
    name: 'Blended Bubble Tea',
    description: 'Creamy blended bubble tea with tapioca pearls.',
    price: 6.0,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    isVegetarian: true,
  },
  {
    id: 'dr2',
    name: 'Boba Tapioca Pearls',
    description: 'Add tapioca boba pearls to any drink.',
    price: 1.0,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    isVegetarian: true,
  },
  {
    id: 'dr3',
    name: 'Rainbow Jelly',
    description: 'Add colorful rainbow jelly topping to any drink.',
    price: 1.5,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    isVegetarian: true,
  },
  {
    id: 'dr4',
    name: 'Bottled Water',
    description: 'Cold bottled water.',
    price: 1.8,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=75',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'dr5',
    name: 'Canned Soda',
    description: 'Assorted canned sodas.',
    price: 1.8,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&q=75',
    isVegetarian: true,
  },
  {
    id: 'dr6',
    name: 'Gatorade',
    description: 'Assorted Gatorade sports drinks.',
    price: 2.95,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=75',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'dr7',
    name: 'Sweet Tea',
    description: 'House-brewed sweet iced tea.',
    price: 2.95,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=75',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'dr8',
    name: 'Thai Tea',
    description: 'Creamy Thai iced tea made with strong brewed tea and condensed milk.',
    price: 6.0,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'dr9',
    name: 'Hot Tea',
    description: 'Your choice of hot brewed tea.',
    price: 3.95,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=75',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 'dr10',
    name: 'Navaam',
    description: 'Traditional Lao-style refreshing drink.',
    price: 5.25,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=75',
    isVegetarian: true,
  },
  {
    id: 'dr11',
    name: 'Mangonada',
    description: 'A Mexican-inspired mango drink with chamoy, chili powder, and tamarind.',
    price: 7.5,
    category: DishCategory.DRINKS,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    isVegetarian: true,
  },
];
