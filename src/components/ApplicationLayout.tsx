import NavigationPanel from "./NavigationPanel.tsx";
import Footer from "./Footer.tsx";
import { Outlet, useNavigate } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import GlobalContext, {
  GlobalContextType,
} from "../shared/contexts/GlobalContext.tsx";
import { useContext } from "react";

export default function ApplicationLayout() {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(GlobalContext) as GlobalContextType;

  return (
    <HeroUIProvider navigate={navigate}>
      <ToastProvider placement="top-right" />
      <main
        className={`min-h-screen bg-background pb-[70px] text-foreground ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div>
          <NavigationPanel />
        </div>
        <div className="mt-20 px-10 py-2">
          <Outlet />
        </div>
        <Footer />
      </main>
    </HeroUIProvider>
  );
}
