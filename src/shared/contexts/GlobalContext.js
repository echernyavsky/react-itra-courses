import { createContext } from "react";
import locales from "../constants/locales";

const GlobalContext = createContext({
    showBorders: false,
    currentLocale: locales.EN,
});

export default GlobalContext;