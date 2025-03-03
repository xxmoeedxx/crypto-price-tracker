// src/app/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        Crypto Price Tracker
      </h1>
      <p className="text-gray-200 mt-2">Live cryptocurrency prices</p>
    </header>
  );
};

export default Header;