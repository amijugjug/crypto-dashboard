import React from "react";
import Slider from "react-slick";
import { Cryptocurrency } from "@/interfaces/Crypto";
import Link from "next/link";

const CryptoCarousel = ({ cryptos }: { cryptos: Cryptocurrency[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Famous Cryptocurrencies
      </h2>
      <Slider {...settings}>
        {cryptos.map((crypto) => (
          <div key={crypto.id} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Link
                href={`/crypto/${crypto.id}`}
                className="text-blue-500 hover:underline"
              >
                <h3 className="text-xl font-semibold mb-2">{crypto.name}</h3>
              </Link>

              <p className="text-gray-500 mb-4">{crypto.symbol}</p>
              <p className="text-gray-700 font-bold">
                ${parseFloat(crypto.priceUsd).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CryptoCarousel;
