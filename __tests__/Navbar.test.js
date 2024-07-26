import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../src/components/Navbar";

describe("Navbar Component", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  test("search input updates correctly", () => {
    render(<Navbar />);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Bitcoin" } });
    expect(searchInput.value).toBe("Bitcoin");
  });
});
