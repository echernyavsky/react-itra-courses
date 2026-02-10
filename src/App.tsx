import "./App.css";
import AppRoutes from "./components/AppRoutes.tsx";
import { IntlProvider } from "react-intl";
import { localizationDictionaries } from "./shared/localization/locales.ts";
import { useState } from "react";
import locales from "./shared/localization/locales.ts";
import localStorageKeys from "./shared/constants/localStorageKeys.ts";
import GlobalContext from "./shared/contexts/GlobalContext.tsx";

function App() {
  const [locale, setLocale] = useState(
    localStorage.getItem(localStorageKeys.LOCALE) || locales.EN,
  );

  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem(localStorageKeys.DARK_MODE) === "true",
  );

  return (
    <>
      <GlobalContext.Provider
        value={{ locale, setLocale, isDarkMode, setDarkMode }}
      >
        <IntlProvider
          messages={localizationDictionaries[locale]}
          locale={locale}
        >
          <AppRoutes />
        </IntlProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
