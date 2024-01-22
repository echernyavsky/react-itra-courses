import "./App.css";
import AppRoutes from "./components/AppRoutes.tsx";
import { IntlProvider } from "react-intl";
import locales, {
  localizationDictionaries,
} from "./shared/localization/locales.ts";

function App() {
  // const [currentLocale, setCurrentLocale] = useState<string>(
  //   localStorage.getItem(localStorageKeys.LOCALE) || locales.EN,
  // );

  return (
    <>
      {/*
     <GlobalContext.Provider
       value={{
         locale: currentLocale,
         setLocale: setCurrentLocale,
       }}
     >
    */}
      <IntlProvider
        messages={localizationDictionaries[locales.EN]}
        locale={locales.EN}
      >
        <AppRoutes />
      </IntlProvider>
      {/* </GlobalContext.Provider> */}
    </>
  );
}

export default App;
