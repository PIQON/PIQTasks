import { useContextWithoutNull } from "../../hooks/use-context-without-null";
import { ThemeContext } from "./theme-context";

export const useThemeContext = () => {
  const themeContext = useContextWithoutNull(ThemeContext);
  return themeContext;
};
