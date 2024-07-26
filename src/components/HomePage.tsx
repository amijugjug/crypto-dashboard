"use client";

import { useState, useEffect, useRef } from "react";
import { Cryptocurrency } from "@/interfaces/Crypto";
import WebSocket from "isomorphic-ws";
import HomePageSkeleton from "@/components/Skeleton/HomePageSkeleton";
import CryptoRow from "@/components/CryptoRow";
import CryptoCarousel from "@/components/CryptoCarousel";

const HomePage = ({ cryptoList }: { cryptoList: Cryptocurrency[] }) => {
  const ws = useRef<WebSocket | null>(null);

  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  }>({
    key: "name",
    direction: "ascending",
  });
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    if (cryptoList.length > 0) {
      setCryptocurrencies(cryptoList);
      setIsLoading(false);
    }
  }, [cryptoList]);

  useEffect(() => {
    ws.current = new WebSocket(`${process.env.NEXT_PUBLIC_WS_URL}assets=ALL`);
    ws.current.onmessage = (event: any) => {
      const data = JSON.parse(event.data);
      setCryptocurrencies((prevCryptos) =>
        prevCryptos.map((crypto) =>
          data[crypto.id] ? { ...crypto, priceUsd: data[crypto.id] } : crypto
        )
      );
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const sortedCryptocurrencies = [...cryptocurrencies].sort((a, b) => {
    type SortableKeys = keyof Cryptocurrency;
    const key = sortConfig.key as SortableKeys;

    if (a[key] < b[key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key: string) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const paginatedCryptocurrencies = sortedCryptocurrencies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(cryptocurrencies.length / itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <CryptoCarousel cryptos={cryptoList.slice(0, 6)} />
      {isLoading ? (
        <HomePageSkeleton />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Cryptocurrencies</h1>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th
                  className="px-4 py-2 border-b cursor-pointer"
                  onClick={() => handleSort("symbol")}
                >
                  Symbol
                </th>
                <th
                  className="px-4 py-2 border-b cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Name
                </th>
                <th className="px-4 py-2 border-b">Price</th>
                <th className="px-4 py-2 border-b">Market Cap</th>
                <th className="px-4 py-2 border-b">Favorites</th>
              </tr>
            </thead>
            <tbody>
              {paginatedCryptocurrencies.map((crypto) => (
                <CryptoRow key={crypto.id} crypto={crypto} />
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
