import { createContext } from "react";
import locales from "../constants/locales";

const GlobalContext = createContext({
    showBorders: false,
    locale: locales.EN,
});

export default GlobalContext;