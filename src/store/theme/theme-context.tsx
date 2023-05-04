import { createContext, useEffect, useState } from "react";
import { ChildrenRoot } from "../../types/shared";

type Theme = "dark" | "light";

type ThemeContextData = {
  theme: Theme;
  changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextData | null>(null);

export const ThemeContextProvider = ({ children }: ChildrenRoot) => {
  const initialState = () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark" || theme === "light") {
      return theme;
    }

    return "dark";
  };

  const [theme, setTheme] = useState<Theme>(initialState);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
