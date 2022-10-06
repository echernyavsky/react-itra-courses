import { createContext } from "react";
import locales from "../constants/locales";

const LocalizationContext = createContext({
    locale: locales.EN,
});

export default LocalizationContext;