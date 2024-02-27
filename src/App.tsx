import "./App.css";
import AppRoutes from "./components/AppRoutes.tsx";
import { IntlProvider } from "react-intl";
import locales, {
  localizationDictionaries,
} from "./shared/localization/locales.ts";
import { useState } from "react";
import localStorageKeys from "./shared/constants/localStorageKeys.ts";
import GlobalContext from "./shared/contexts/GlobalContext.tsx";

function App() {
  const [currentLocale, setCurrentLocale] = useState<string>(
    localStorage.getItem(localStorageKeys.LOCALE) || locales.EN,
  );

  const [isDarkMode, setDarkMode] = useState<boolean>(
    !!localStorage.getItem(localStorageKeys.DARK_MODE) || false,
  );

  return (
    <>
      <GlobalContext.Provider
        value={{
          locale: currentLocale,
          setLocale: setCurrentLocale,
          isDarkMode: isDarkMode,
          setDarkMode: setDarkMode,
        }}
      >
        <IntlProvider
          messages={localizationDictionaries[currentLocale]}
          locale={currentLocale}
        >
          <AppRoutes />
        </IntlProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
