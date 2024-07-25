"use client";

import { useState, useEffect, useRef } from "react";
import { getCryptocurrencies } from "@/services/coinCap.services";
import { Cryptocurrency } from "@/interfaces/Crypto";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";

const HomePage = () => {
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
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptocurrencies();
      setCryptocurrencies(data);
    };
    fetchData();
  }, []);

  const sortedCryptocurrencies = [...cryptocurrencies].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
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
            <tr key={crypto.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{crypto.symbol}</td>
              <td className="px-4 py-2 border-b">
                <Link
                  href={`/crypto/${crypto.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {crypto.name}
                </Link>
              </td>
              <td className="px-4 py-2 border-b">
                ${parseFloat(crypto.priceUsd).toFixed(2)}
              </td>
              <td className="px-4 py-2 border-b">
                ${parseFloat(crypto.marketCapUsd).toFixed(2)}
              </td>
              <td className="px-4 py-2 border-b">
                <FavoriteButton id={crypto.id} />
              </td>
            </tr>
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
                : "bg-white text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
