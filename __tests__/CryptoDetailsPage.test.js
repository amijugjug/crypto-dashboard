import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CryptoDetailsPage from "@/components/CryptoDetailsPage";

const mockCryptoData = {
  id: "bitcoin",
  name: "Bitcoin",
  symbol: "BTC",
  priceUsd: "40000",
  marketCapUsd: "800000000000",
  volumeUsd24Hr: "40000000000",
  changePercent24Hr: "5",
};

const mockCryptoHistory = {
  labels: ["Jan 1", "Jan 2", "Jan 3"],
  datasets: [
    {
      label: "Price",
      data: [35000, 37000, 40000],
    },
  ],
};

jest.mock("isomorphic-ws", () => {
  return jest.fn().mockImplementation(() => ({
    onmessage: jest.fn(),
    close: jest.fn(),
  }));
});

describe("CryptoDetailsPage", () => {
  test("renders the loading state initially", () => {
    render(
      <CryptoDetailsPage id="bitcoin" cryptoData={null} cryptoHistory={null} />
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders the crypto data correctly", () => {
    render(
      <CryptoDetailsPage
        id="bitcoin"
        cryptoData={mockCryptoData}
        cryptoHistory={mockCryptoHistory}
      />
    );
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("BTC")).toBeInTheDocument();
    expect(screen.getByText("$40000.00")).toBeInTheDocument();
    expect(screen.getByText("$800000000000.00")).toBeInTheDocument();
    expect(screen.getByText("$40000000000.00")).toBeInTheDocument();
    expect(screen.getByText("5.00%")).toBeInTheDocument();
  });

  test("renders the crypto price history chart", () => {
    render(
      <CryptoDetailsPage
        id="bitcoin"
        cryptoData={mockCryptoData}
        cryptoHistory={mockCryptoHistory}
      />
    );
    expect(
      screen.getByText("Price History (Last 30 Days)")
    ).toBeInTheDocument();
  });
});
