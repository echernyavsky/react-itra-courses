import NavigationPanel from "./NavigationPanel.tsx";
import Sidebar from "./Sidebar.tsx";

interface ApplicationLayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

export default function ApplicationLayout({
  children,
}: ApplicationLayoutProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4">
        <NavigationPanel />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="col-span-3">{children}</div>
    </div>
  );
}
