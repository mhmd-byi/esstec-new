"use client";

import { useRouter } from "next/navigation";
import { SidebarWithLogo } from "./adminComponents/sidebar";
import { useEffect, useState } from "react";
import { sessionStrgAuthKey } from "@/helper/helper";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const hasWindow = typeof window !== "undefined";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authentication =
      hasWindow && sessionStorage.getItem(sessionStrgAuthKey) === "true";
    if (!authentication) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen mx-auto flex justify-center items-center bg-bg-primary">
      <div className="flex flex-row w-full p-4 space-x-4">
        <div className="w-1/5">
          <SidebarWithLogo />
        </div>
        <div className="w-4/5 text-text-primary border-2 border-text-primary rounded-xl p-4">
          {loading ? <span>Loading...</span> : children}
        </div>
      </div>
    </div>
  );
}
