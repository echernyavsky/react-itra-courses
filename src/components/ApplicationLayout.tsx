import NavigationPanel from "./NavigationPanel.tsx";
import Footer from "./Footer.tsx";
import { Outlet, useNavigate } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";

export default function ApplicationLayout() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate}>
      <main className={`min-h-screen bg-background pb-[70px] text-foreground`}>
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
