import NavigationPanel from "./NavigationPanel.tsx";
import Sidebar from "./Sidebar.tsx";

interface ApplicationLayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

export default function ApplicationLayout({
  children,
}: ApplicationLayoutProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="md:col-span-3 lg:col-span-4">
        <NavigationPanel />
      </div>
      <div className="md:col-span-1 lg:col-span-1">
        <Sidebar />
      </div>
      <div className="md:col-span-2 lg:col-span-3">{children}</div>
    </div>
  );
}
