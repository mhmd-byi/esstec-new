'use client';
import { SidebarWithLogo } from "./adminComponents/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen mx-auto flex justify-center items-center bg-bg-primary">
      <div className="flex flex-row w-full p-4 space-x-4">
        <div className="w-1/5">
          <SidebarWithLogo />
        </div>
        <div className="w-4/5 text-text-primary border-2 border-text-primary rounded-xl p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
