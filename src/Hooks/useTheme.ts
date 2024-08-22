import { useContext } from "react";
import { ThemeProviderContext } from "../HOC/theme-provider";

const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  return context;
};

export { useTheme };
