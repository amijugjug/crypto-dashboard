import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "../src/components/ThemeToggle";

describe("ThemeToggle Component", () => {
  test("toggles between light and dark mode", () => {
    render(<ThemeToggle />);
    const toggleButton = screen.getByRole("checkbox");

    expect(document.body).toHaveClass("light"); // Assuming default is light

    fireEvent.click(toggleButton);

    expect(document.body).toHaveClass("dark");

    fireEvent.click(toggleButton);

    expect(document.body).toHaveClass("light");
  });
});
