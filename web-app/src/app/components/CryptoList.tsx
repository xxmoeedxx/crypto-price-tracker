// src/app/components/CryptoList.tsx
import React from 'react';

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
}

interface CryptoListProps {
  data: Crypto[];
}

const CryptoList = ({ data }: CryptoListProps) => {
  return (
    <div className="bg-pink-300 shadow-md rounded-lg overflow-hidden">
      <ul>
        {data.map((crypto, index) => (
          <li
            key={crypto.id}
            className={`p-4 ${
              index % 2 === 0 ? 'bg-purple-50' : 'bg-pink-50'
            } hover:bg-purple-200 transition duration-200`}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold text-purple-800">{crypto.name}</span>
                <span className="text-pink-600 text-sm ml-2">({crypto.symbol})</span>
              </div>
              <span className="text-purple-800">
                ${parseFloat(crypto.priceUsd).toFixed(2)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;