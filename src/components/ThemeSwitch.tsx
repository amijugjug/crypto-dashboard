import React from "react";
import s from "./ThemeSwitch.module.css";
import { useTheme } from "@/contexts/ThemeProvider";

const ThemeSwitch = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="inline-block h-[34px] relative w-[60px]">
      <label className={s.themeSwitch}>
        <input
          type="checkbox"
          id="checkbox"
          className={s.input}
          onChange={toggleTheme}
        />
        <div className={`${s.slider} ${s.round}`}></div>
      </label>
    </div>
  );
};

export default ThemeSwitch;
