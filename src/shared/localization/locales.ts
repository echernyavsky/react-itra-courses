import byMessages from "./by.json";
import enMessages from "./en.json";
import esMessages from "./es.json";
import plMessages from "./pl.json";
import ruMessages from "./ru.json";

const locales = {
  EN: "en",
  PL: "pl",
  ES: "es",
  BY: "by",
  RU: "ru",
};

export const localizationDictionaries = {
  [locales.BY]: byMessages,
  [locales.EN]: enMessages,
  [locales.ES]: esMessages,
  [locales.PL]: plMessages,
  [locales.RU]: ruMessages,
};

export default locales;
