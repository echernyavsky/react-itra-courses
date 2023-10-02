import "./App.css";
import ApplicationLayout from "./components/ApplicationLayout.tsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes.tsx";

function App() {
  const isDark = false;

  return (
    <main
      className={`text-foreground bg-background min-h-screen ${
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
  );
}

export default App;
