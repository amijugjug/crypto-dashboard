import React from "react";
import { render, screen } from "@testing-library/react";
import CryptoRow from "../src/components/CryptoRow";

const mockCrypto = {
  id: "bitcoin",
  symbol: "BTC",
  name: "Bitcoin",
  priceUsd: "40000",
  marketCapUsd: "700000000000",
};

describe("CryptoRow Component", () => {
  test("renders CryptoRow component", () => {
    render(<CryptoRow crypto={mockCrypto} />);

    expect(screen.getByText("BTC")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("$40000.00")).toBeInTheDocument();
    expect(screen.getByText("$700000000000.00")).toBeInTheDocument();
  });

  test("renders favorite button", () => {
    render(<CryptoRow crypto={mockCrypto} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
