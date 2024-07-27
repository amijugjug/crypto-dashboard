import { render, screen } from "@testing-library/react";
import CryptoCarousel from "@/components/CryptoCarousel";
import "@testing-library/jest-dom";

// Mock the data
const mockCryptos = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    priceUsd: "20000.00",
    marketCapUsd: "400000000.00",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    priceUsd: "1500.00",
    marketCapUsd: "150000000.00",
  },
  {
    id: "litecoin",
    name: "Litecoin",
    symbol: "LTC",
    priceUsd: "100.00",
    marketCapUsd: "5000000.00",
  },
];

jest.mock("react-slick", () => {
  const Carousel = ({ children }) => <div>{children}</div>;
  return Carousel;
});

describe("CryptoCarousel", () => {
  it("should render the carousel with given cryptocurrencies", () => {
    render(<CryptoCarousel cryptos={mockCryptos} />);

    const cryptoNames = mockCryptos.map((crypto) => crypto.name);
    cryptoNames.forEach((name) => {
      const cryptoElement = screen.getByText(name);
      expect(cryptoElement).toBeInTheDocument();
    });
  });

  it("should display the cryptocurrency details", () => {
    render(<CryptoCarousel cryptos={mockCryptos} />);

    const cryptoSymbols = mockCryptos.map((crypto) => crypto.symbol);
    cryptoSymbols.forEach((symbol) => {
      const symbolElement = screen.getByText(symbol);
      expect(symbolElement).toBeInTheDocument();
    });

    const cryptoPrices = mockCryptos.map(
      (crypto) => `$${parseFloat(crypto.priceUsd).toFixed(2)}`
    );
    cryptoPrices.forEach((price) => {
      const priceElement = screen.getByText(price);
      expect(priceElement).toBeInTheDocument();
    });
  });

  it("should have links to the cryptocurrency detail pages", () => {
    render(<CryptoCarousel cryptos={mockCryptos} />);

    const links = mockCryptos.map((crypto) =>
      screen.getByRole("link", { name: crypto.name })
    );
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", `/crypto/${mockCryptos[index].id}`);
    });
  });
});
