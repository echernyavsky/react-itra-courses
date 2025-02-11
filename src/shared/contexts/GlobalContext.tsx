import { createContext } from "react";

export type GlobalContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  isDarkMode: boolean;
  setDarkMode: (value: string) => void;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export default GlobalContext;
