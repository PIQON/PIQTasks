import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("Customer must be in provider!");
  }

  return context;
};
