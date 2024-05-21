import "./App.css";
import AppRoutes from "./components/AppRoutes.tsx";
import { IntlProvider } from "react-intl";
import { localizationDictionaries } from "./shared/localization/locales.ts";

function App() {
  return (
    <>
      <IntlProvider messages={localizationDictionaries["en"]} locale={"en"}>
        <AppRoutes />
      </IntlProvider>
    </>
  );
}

export default App;
