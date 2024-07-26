"use client";
import { THEME, LIGHT, DARK } from "@/constants";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/helpers/localStorage.helper";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(LIGHT);

  useEffect(() => {
    const storedTheme = getLocalStorageItem(THEME);
    document.body.classList.remove(LIGHT, DARK);
    console.log("storedTheme", storedTheme);
    if (storedTheme) {
      document.body.classList.add(storedTheme);
      setTheme(storedTheme);
    } else {
      document.body.classList.add(LIGHT);
      setTheme(LIGHT);
    }
  }, []);

  useEffect(() => {
    console.log("3");
    setLocalStorageItem(THEME, theme);
    document.body.classList.remove(LIGHT, DARK);
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
