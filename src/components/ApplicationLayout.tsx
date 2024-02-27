import NavigationPanel from "./NavigationPanel.tsx";
import Sidebar from "./Sidebar.tsx";
import Footer from "./Footer.tsx";
import { Outlet, useNavigate } from "react-router";
import { NextUIProvider } from "@nextui-org/react";
import { useContext } from "react";
import GlobalContext, {
  GlobalContextType,
} from "../shared/contexts/GlobalContext.tsx";

export default function ApplicationLayout() {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(GlobalContext) as GlobalContextType;

  return (
    <NextUIProvider navigate={navigate}>
      <main
        className={`min-h-screen bg-background text-foreground ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div>
          <NavigationPanel />
        </div>
        <div className="p-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
              <Sidebar />
            </div>
            <div className="md:col-span-2 lg:col-span-3 xl:col-span-5">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </NextUIProvider>
  );
}
