import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchPage from "@/components/SearchPage";

const mockCryptos = [
  {
    id: "1",
    symbol: "BTC",
    name: "Bitcoin",
    priceUsd: "45000.00",
    marketCapUsd: "850000000000",
  },
  {
    id: "2",
    symbol: "ETH",
    name: "Ethereum",
    priceUsd: "3000.00",
    marketCapUsd: "350000000000",
  },
];

describe("SearchPage", () => {
  test("renders SearchPage component", () => {
    render(<SearchPage cryptoList={mockCryptos} query="Bitcoin" />);

    expect(screen.getByText("Search Results")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
  });

  test("displays search results based on query", () => {
    render(<SearchPage cryptoList={mockCryptos} query="Bitcoin" />);

    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.queryByText("Ethereum")).not.toBeInTheDocument();
  });

  test("displays no results message when no match is found", () => {
    render(<SearchPage cryptoList={mockCryptos} query="NonExistent" />);

    expect(
      screen.getByText("No results found for NonExistent")
    ).toBeInTheDocument();
  });

  test("displays prompt when no query is provided", () => {
    render(<SearchPage cryptoList={mockCryptos} query="" />);

    expect(
      screen.getByText("Perform search from the search box")
    ).toBeInTheDocument();
  });
});
