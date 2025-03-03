// src/app/components/ErrorMessage.tsx
import React from 'react';

const ErrorMessage = () => {
  return (
    <div className="text-center py-8">
      <p className="text-red-500">Failed to fetch prices. Please try again.</p>
    </div>
  );
};

export default ErrorMessage;