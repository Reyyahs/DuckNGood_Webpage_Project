'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Dish } from '../types';
import { MENU_ITEMS } from '../lib/constants';

/**
 * Menu Context
 *
 * Provides global state management for menu items.
 * FEATURES:
 * - CRUD operations for dishes.
 * - LocalStorage persistence (Simulates database).
 */

interface MenuContextType {
  items: Dish[];
  addDish: (dish: Dish) => void;
  updateDish: (dish: Dish) => void;
  deleteDish: (id: string) => void;
}

// Create the Context
const MenuContext = createContext<MenuContextType | undefined>(undefined);

const STORAGE_KEY = 'duckngood_menu_data_v2';

/**
 * MenuProvider Component
 */
export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state function to check localStorage first
  const [items, setItems] = useState<Dish[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : MENU_ITEMS;
    } catch (error) {
      console.error('Failed to load menu from storage', error);
      return MENU_ITEMS;
    }
  });

  // Persist to LocalStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save menu to storage', error);
    }
  }, [items]);

  // --- Actions ---

  const addDish = (dish: Dish) => {
    setItems(prev => [...prev, dish]);
  };

  const updateDish = (updatedDish: Dish) => {
    setItems(prev => prev.map(item => (item.id === updatedDish.id ? updatedDish : item)));
  };

  const deleteDish = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ items, addDish, updateDish, deleteDish }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
