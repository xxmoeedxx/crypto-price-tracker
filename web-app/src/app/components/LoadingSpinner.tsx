// src/app/components/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
      <p className="text-gray-200 mt-2">Loading prices...</p>
    </div>
  );
};

export default LoadingSpinner;