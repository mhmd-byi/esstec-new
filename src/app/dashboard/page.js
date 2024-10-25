"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const hasWindow = typeof window !== "undefined";
  
  useEffect(() => {
    const authentication = hasWindow && localStorage.getItem("isAuthenticated");
    if (!authentication) return router.push('/');
  }, [hasWindow])
    return (
      <div></div>
    );
}