import React, { useContext } from "react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

import { ThemeContext } from "./Theme";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="p-2">
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <BsSun className="text-primary text-2xl mr-2 hover:text-hoverblue" />
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <BsMoonStarsFill className="text-primary text-2xl mr-2 hover:text-hoverblue" />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
