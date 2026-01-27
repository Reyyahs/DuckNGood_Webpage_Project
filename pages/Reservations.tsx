import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Reservations Page (Deprecated)
 * 
 * We no longer accept reservations online.
 * Redirects users to the home page.
 */
export const Reservations: React.FC = () => {
  return <Navigate to="/" replace />;
};