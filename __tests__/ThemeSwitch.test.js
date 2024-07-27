import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeSwitch from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeProvider";

const renderWithProvider = (component) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe("ThemeSwitch", () => {
  test("renders ThemeSwitch component", () => {
    renderWithProvider(<ThemeSwitch />);

    // Check if the input checkbox is rendered
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  test("toggles theme on checkbox change", () => {
    renderWithProvider(<ThemeSwitch />);

    const checkbox = screen.getByRole("checkbox");

    // Initial state of checkbox
    expect(checkbox).not.toBeChecked();

    // Click to toggle theme
    fireEvent.click(checkbox);

    // Check if the checkbox is checked after click
    expect(checkbox).toBeChecked();

    // Click to toggle theme back
    fireEvent.click(checkbox);

    // Check if the checkbox is unchecked after click
    expect(checkbox).not.toBeChecked();
  });
});
