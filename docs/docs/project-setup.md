# Crypto Price Tracker Documentation

## Overview
This project is a **Crypto Price Tracker** that fetches live cryptocurrency prices using the CoinCap API. It is built using **Next.js (App Router)**, **React Query** for data fetching and caching, and **Tailwind CSS** for styling.

## Features
- Fetches live cryptocurrency prices from CoinCap API.
- Allows searching for specific cryptocurrencies.
- Displays the **Top 5 cryptocurrencies** based on price.
- Provides a refresh button to manually fetch updated prices.
- Handles **loading** and **error states** gracefully.

---

## Setup Guide
### Prerequisites
- Node.js installed (LTS recommended)
- Yarn or npm installed
- A CoinCap API key

### Installation
Clone the repository and install dependencies:
```sh
# Clone the repository
git clone https://github.com/your-repo/crypto-tracker.git
cd crypto-tracker

# Install dependencies
npm install  # or yarn install
```

### Running the Application
```sh
npm run dev  # or yarn dev
```
The application will be available at `http://localhost:3000`.

---

## API Integration
### Fetching Cryptocurrency Prices
The project uses **Axios** to fetch data from the CoinCap API:
```ts
const fetchCryptoPrices = async () => {
  const response = await axios.get('https://rest.coincap.io/v3/assets', {
    headers: {
      Authorization: `Bearer YOUR_API_KEY`,
    },
  });
  return response.data.data;
};
```
This function returns an array of cryptocurrency data objects, which include:
- `id`: Unique identifier
- `name`: Cryptocurrency name
- `symbol`: Short symbol (e.g., BTC for Bitcoin)
- `priceUsd`: Current price in USD

---

## State Management
We use **React Query** to efficiently handle API requests:
```tsx
const { data, isLoading, isError, refetch } = useQuery({
  queryKey: ['cryptoPrices'],
  queryFn: fetchCryptoPrices,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
});
```
### Why React Query?
- **Automatic caching** for API responses
- **Optimized refetching** without excessive network requests
- **Built-in error handling**

### Manual Data Refetching
We provide a button to **manually refresh prices**, which calls `refetch()`:
```tsx
const handleRefetch = async () => {
  setIsRefetching(true);
  await refetch();
  setIsRefetching(false);
};
```

---

## UI & Components
### Search Bar
Allows users to search for a specific cryptocurrency:
```tsx
<input
  type="text"
  placeholder="Search cryptocurrencies..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full p-3 border border-gray-300 rounded-lg"
/>
```

### Refresh Button with Animation
The refresh button includes an icon and an animation when fetching data:
```tsx
<button onClick={handleRefetch} className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
  <RefreshCw className={`w-5 h-5 ${isRefetching ? "animate-spin" : ""}`} />
  Refresh Prices
</button>
```

### Cryptocurrency List
Displays the top 5 cryptocurrencies:
```tsx
{filteredData.slice(0, 5).map((crypto) => (
  <li key={crypto.id} className="p-4 border-b">
    <div className="flex justify-between">
      <span className="font-semibold">{crypto.name} ({crypto.symbol})</span>
      <span>${parseFloat(crypto.priceUsd).toFixed(2)}</span>
    </div>
  </li>
))}
```

---

## Challenges & Solutions
### 1. **API Rate Limits**
**Issue**: CoinCap has rate limits, and too many requests caused issues.
**Solution**: Used **React Query caching** and disabled automatic refetching on window focus.

### 2. **Handling Loading & Error States**
**Issue**: UI needed a way to indicate loading and errors.
**Solution**: Added loading animations and error messages:
```tsx
{isLoading && <p>Loading...</p>}
{isError && <p className="text-red-500">Failed to fetch prices.</p>}
```

---

## Conclusion
This Crypto Price Tracker provides a **fast, efficient**, and **user-friendly** way to view cryptocurrency prices in real time. 🚀

**Next Steps:**
- Add more filtering options
- Implement real-time WebSocket updates
- Deploy to **Vercel** or **GitHub Pages**

