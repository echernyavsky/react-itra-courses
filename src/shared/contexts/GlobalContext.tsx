import { createContext } from "react";

export type GlobalContextType = {
  locale: string;
  setLocale: (value: string) => void;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export default GlobalContext;