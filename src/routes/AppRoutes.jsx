import React from 'react';
import Home from '../pages/Home';

export default function AppRoutes() {
  // Simple state router fallback in case user wants multiple pages later
  // For now, it directly displays the Home landing page.
  return <Home />;
}
