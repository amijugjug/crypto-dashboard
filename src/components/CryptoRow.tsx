import { Cryptocurrency } from "@/interfaces/Crypto";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import React from "react";

const CryptoRow = ({ crypto }: { crypto: Cryptocurrency }) => {
  return (
    <tr key={crypto.id} className="hover:bg-gray-100">
      <td className="px-4 py-2 border-b text-center">{crypto.symbol}</td>
      <td className="px-4 py-2 border-b text-center">
        <Link
          href={`/crypto/${crypto.id}`}
          className="text-blue-500 hover:underline"
        >
          {crypto.name}
        </Link>
      </td>
      <td className="px-4 py-2 border-b text-center">
        ${parseFloat(crypto.priceUsd).toFixed(2)}
      </td>
      <td className="px-4 py-2 border-b text-center">
        ${parseFloat(crypto.marketCapUsd).toFixed(2)}
      </td>
      <td className="px-4 py-2 border-b text-center">
        <FavoriteButton id={crypto.id} />
      </td>
    </tr>
  );
};

export default CryptoRow;
