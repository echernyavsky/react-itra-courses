import "./App.css";
import ApplicationLayout from "./components/ApplicationLayout.tsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes.tsx";
import { IntlProvider } from "react-intl";

function App() {
  const isDark = false;

  return (
    <IntlProvider locale="en">
      <main
        className={`min-h-screen bg-background text-foreground ${
          isDark ? "dark" : ""
        }`}
      >
        <div className="container mx-auto">
          <BrowserRouter>
            <ApplicationLayout>
              <AppRoutes />
            </ApplicationLayout>
          </BrowserRouter>
        </div>
      </main>
    </IntlProvider>
  );
}

export default App;
