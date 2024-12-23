"use client";
import { usePathname } from "next/navigation";
import EditForm from "@/app/dashboard/adminComponents/projectForm/editForm";

export default function editProjects() {
  const regex = /[^/]+$/;
  const pathname = usePathname();
  const match = pathname.match(regex);
  const id = match[0];

  return (
    <div>
      <h1 className="text-xl font-bold text-center my-4">Update Project</h1>
      {id && <EditForm projectId={id} />}
    </div>
  );
}
