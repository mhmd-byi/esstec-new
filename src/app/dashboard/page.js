"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const authentication = localStorage.getItem("isAuthenticated");
  useEffect(() => {
    if (!authentication) return router.push('/');
  }, [])
    return (
      <div></div>
    );
}