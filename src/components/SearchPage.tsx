"use client";

import { useEffect, useState } from "react";
import { Cryptocurrency } from "@/interfaces/Crypto";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";

const SearchPage = ({
  cryptoList,
  query,
}: {
  cryptoList: Cryptocurrency[];
  query: string;
}) => {
  const [results, setResults] = useState<Cryptocurrency[]>([]);

  useEffect(() => {
    setResults(cryptoList);
  }, [cryptoList]);

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:underline">
        Back to List
      </Link>
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {results.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Symbol</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Market Cap</th>
              <th className="px-4 py-2 border-b">Favorites</th>
            </tr>
          </thead>
          <tbody>
            {results.map((crypto) => (
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
      ) : query?.length ? (
        <p>No results found for {query}</p>
      ) : (
        <p>Perform search from the search box</p>
      )}
    </div>
  );
};

export default SearchPage;
