"use client";

import React, { useState } from "react";
import {
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import esstecLogo from "@/assets/images/esstec-logo.svg";
import { useRouter } from "next/navigation";

export const SidebarWithLogo = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isAuthenticated", false);
    }
    router.push("/");
  };

  return (
    <div className="h-[calc(100vh-2rem)] w-full max-w-[25rem] p-4 text-text-primary rounded-xl border-2 border-text-primary">
      <div className="mb-6 flex items-center gap-4 p-4">
        <Image src={esstecLogo} alt="Esstec Logo" className="w-full" />
      </div>
      <ul className="space-y-4">
        <li className="cursor-pointer" onClick={() => setProjectsOpen(!projectsOpen)}>
          <div className="flex items-center justify-between">
            <span>Projects</span>
            {projectsOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
          </div>
          {projectsOpen && (
            <ul className="pl-4 mt-2">
              <li className="cursor-pointer" onClick={() => router.push('/dashboard/projects/allProjects')}>All Projects</li>
              <li className="cursor-pointer" onClick={() => router.push('/dashboard/projects/addProjects')}>Add Project</li>
            </ul>
          )}
        </li>
        <li className="cursor-pointer" onClick={() => setClientsOpen(!clientsOpen)}>
          <div className="flex items-center justify-between">
            <span>Clients</span>
            {clientsOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
          </div>
          {clientsOpen && (
            <ul className="pl-4 mt-2">
              <li className="cursor-pointer" onClick={() => router.push('/dashboard/projects/allProjects')}>All Clients</li>
              <li className="cursor-pointer" onClick={() => router.push('/dashboard/projects/addProjects')}>Add Client</li>
            </ul>
          )}
        </li>
        <li>
          <div className="flex items-center">
            <Cog6ToothIcon className="h-5 w-5" />
            <span className="ml-2">Settings</span>
          </div>
        </li>
        <li className="cursor-pointer" onClick={handleLogout}>
          <div className="flex items-center">
            <PowerIcon className="h-5 w-5" />
            <span className="ml-2">Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
