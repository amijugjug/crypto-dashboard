"use client";

import { useEffect, useState } from "react";
import { Cryptocurrency } from "@/interfaces/Crypto";
import Link from "next/link";
import CryptoRow from "./CryptoRow";

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
              <CryptoRow crypto={crypto} key={crypto.id} />
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
