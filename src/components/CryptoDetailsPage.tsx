"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cryptocurrency } from "@/interfaces/Crypto";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CryptoDetailsSkeleton from "@/components/Skeleton/CryptoDetailsSkeleton";
import CryptoChartSkeleton from "@/components/Skeleton/CryptoChartSkeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoDetailsPage = ({
  cryptoData,
  cryptoHistory,
}: {
  cryptoData: Cryptocurrency;
  cryptoHistory: any;
}) => {
  const [crypto, setCrypto] = useState<Cryptocurrency | null>(null);
  const [isLoadingCrypto, setIsLoadingCrypto] = useState(true);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);

  useEffect(() => {
    setCrypto(cryptoData);
    setIsLoadingCrypto(false);

    setIsLoadingHistory(false);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:underline">
        Back to List
      </Link>
      <h1 className="text-3xl font-bold mb-4">
        {crypto?.name || "Loading..."}
      </h1>
      {isLoadingCrypto ? (
        <CryptoDetailsSkeleton />
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Symbol:</span>
              <span>{crypto?.symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Price (USD):</span>
              <span>${parseFloat(crypto?.priceUsd || "0").toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Market Cap (USD):</span>
              <span>${parseFloat(crypto?.marketCapUsd || "0").toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Volume (24Hr):</span>
              <span>
                ${parseFloat(crypto?.volumeUsd24Hr || "0").toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Change (24Hr):</span>
              <span
                className={`${
                  parseFloat(crypto?.changePercent24Hr || "0") >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {parseFloat(crypto?.changePercent24Hr || "0").toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      )}
      {isLoadingHistory ? (
        <CryptoChartSkeleton />
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-bold mb-4">
            Price History (Last 30 Days)
          </h2>
          <Line data={cryptoHistory} />
        </div>
      )}
    </div>
  );
};

export default CryptoDetailsPage;
