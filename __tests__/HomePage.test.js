import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "@/components/HomePage";
import WebSocket from "isomorphic-ws";

jest.mock("isomorphic-ws");

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
  // Add more mock cryptocurrencies if needed
];

describe("HomePage", () => {
  beforeEach(() => {
    WebSocket.mockClear();
  });

  test("renders HomePage component", () => {
    render(<HomePage cryptoList={mockCryptos} />);

    expect(screen.getByText("Famous Cryptocurrencies")).toBeInTheDocument();
    expect(screen.getByText("Cryptocurrencies")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
  });

  test("sorts cryptocurrencies by name", async () => {
    render(<HomePage cryptoList={mockCryptos} />);

    const nameHeader = screen.getByText("Name");
    fireEvent.click(nameHeader);

    await waitFor(() => {
      const rows = screen.getAllByRole("row");
      expect(rows[1]).toHaveTextContent("Bitcoin");
      expect(rows[2]).toHaveTextContent("Ethereum");
    });
  });

  test("paginates cryptocurrencies", async () => {
    const manyCryptos = Array.from({ length: 15 }, (_, i) => ({
      id: `${i + 1}`,
      symbol: `SYM${i + 1}`,
      name: `Crypto${i + 1}`,
      priceUsd: `${(i + 1) * 1000}.00`,
      marketCapUsd: `${(i + 1) * 1000000}.00`,
    }));

    render(<HomePage cryptoList={manyCryptos} />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(11); // 10 items per page + 1 header row

    const nextPageButton = screen.getByText("2");
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      const newRows = screen.getAllByRole("row");
      expect(newRows).toHaveLength(6); // 5 items on the second page + 1 header row
    });
  });

  test("updates cryptocurrency prices via WebSocket", async () => {
    render(<HomePage cryptoList={mockCryptos} />);

    const wsInstance = WebSocket.mock.instances[0];
    const wsMessage = {
      data: JSON.stringify({ 1: "46000.00", 2: "3100.00" }),
    };

    wsInstance.onmessage(wsMessage);

    await waitFor(() => {
      expect(screen.getByText("$46000.00")).toBeInTheDocument();
      expect(screen.getByText("$3100.00")).toBeInTheDocument();
    });
  });
});
