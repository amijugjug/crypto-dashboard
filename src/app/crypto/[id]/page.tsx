"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCryptocurrencyDetails } from "@/services/coinCap.services";
import { Cryptocurrency } from "@/interfaces/Crypto";

const CryptoDetailsPage = ({ params }: { params: { id: string } }) => {
  const [crypto, setCrypto] = useState<Cryptocurrency | null>(null);

  useEffect(() => {
    const fetchCrypto = async () => {
      const data = await getCryptocurrencyDetails(params.id);
      setCrypto(data);
    };
    fetchCrypto();
  }, [params.id]);

  if (!crypto) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{crypto.name} Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Symbol:</span>
            <span>{crypto.symbol}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Price (USD):</span>
            <span>${parseFloat(crypto.priceUsd).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Market Cap (USD):</span>
            <span>${parseFloat(crypto.marketCapUsd).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Volume (24Hr):</span>
            <span>${parseFloat(crypto.volumeUsd24Hr).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Change (24Hr):</span>
            <span
              className={`${
                parseFloat(crypto.changePercent24Hr) >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to List
      </Link>
    </div>
  );
};

export default CryptoDetailsPage;
