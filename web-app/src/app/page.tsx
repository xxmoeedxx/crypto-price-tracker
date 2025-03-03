// src/app/page.tsx
'use client'; // Mark this as a Client Component

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RefreshButton from './components/RefreshButton';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import CryptoList from './components/CryptoList';

// Fetch cryptocurrency prices from CoinCap API V3
const fetchCryptoPrices = async () => {
  const response = await axios.get('https://rest.coincap.io/v3/assets', {
    headers: {
      Authorization: `Bearer a49570a1e1b3c4d95b6004af1196a354603a57f5d96860361b9995250b401cf3`,
    },
  });
  return response.data.data; // CoinCap API V3 returns data in a `data` field
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefetching, setIsRefetching] = useState(false);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    refetchOnWindowFocus: false, // Disable refetch on window focus
    refetchOnReconnect: false, // Disable refetch on network reconnect
  });

  // Filter cryptocurrencies based on search term
  const filteredData = (data || []).filter((crypto: any) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRefetch = async () => {
    setIsRefetching(true); // Manually set loading state
    await refetch(); // Fetch new data
    setIsRefetching(false); // Reset loading state
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-950 to-pink-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex justify-end mb-6">
        <RefreshButton isRefetching={isRefetching} handleRefetch={handleRefetch} />
      </div>
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">Top 5 Cryptocurrencies</h2>
      {(isLoading || isRefetching) && <LoadingSpinner />}
      {isError && <ErrorMessage />}
      {!isLoading && !isRefetching && !isError && (
        <CryptoList data={filteredData.slice(0, 5)} />
      )}
      </div>
    </div>
  );
}