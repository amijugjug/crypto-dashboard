import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavoriteButton from "@/components/FavoriteButton";
import { FAVORITES } from "@/constants";
import * as localStorageHelper from "@/helpers/localStorage.helper";

const mockGetLocalStorageItem = jest.spyOn(
  localStorageHelper,
  "getLocalStorageItem"
);
const mockSetLocalStorageItem = jest.spyOn(
  localStorageHelper,
  "setLocalStorageItem"
);

describe("FavoriteButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the button with "Favorite" when not in favorites', () => {
    mockGetLocalStorageItem.mockReturnValue([]);
    render(<FavoriteButton id="1" />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Favorite");
    expect(button).toHaveClass("bg-gray-200 text-black");
  });

  test('renders the button with "Unfavorite" when in favorites', () => {
    mockGetLocalStorageItem.mockReturnValue(["1"]);
    render(<FavoriteButton id="1" />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Unfavorite");
    expect(button).toHaveClass("bg-red-500 text-white");
  });

  test("toggles favorite state when clicked", () => {
    mockGetLocalStorageItem.mockReturnValue([]);
    render(<FavoriteButton id="1" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockSetLocalStorageItem).toHaveBeenCalledWith(FAVORITES, ["1"]);
    expect(button).toHaveTextContent("Unfavorite");
    expect(button).toHaveClass("bg-red-500 text-white");

    fireEvent.click(button);
    expect(mockSetLocalStorageItem).toHaveBeenCalledWith(FAVORITES, []);
    expect(button).toHaveTextContent("Favorite");
    expect(button).toHaveClass("bg-gray-200 text-black");
  });

  test("handles localStorage interaction correctly", () => {
    mockGetLocalStorageItem.mockReturnValue(["1", "2"]);
    render(<FavoriteButton id="1" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockSetLocalStorageItem).toHaveBeenCalledWith(FAVORITES, ["2"]);
  });
});
