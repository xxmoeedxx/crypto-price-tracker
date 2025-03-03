// src/app/components/RefreshButton.tsx
import React from 'react';
import { RefreshCw } from 'lucide-react';

interface RefreshButtonProps {
  isRefetching: boolean;
  handleRefetch: () => void;
}

const RefreshButton = ({ isRefetching, handleRefetch }: RefreshButtonProps) => {
  return (
    <button
      onClick={handleRefetch}
      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition duration-200"
    >
      <RefreshCw className={`w-5 h-5 ${isRefetching ? 'animate-spin' : ''}`} />
      Refresh Prices
    </button>
  );
};

export default RefreshButton;