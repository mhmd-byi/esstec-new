"use client";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      if (response.ok) {
        setProjects(data);
      } else {
        alert("Failed to fetch projects");
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-semibold my-4">Projects</h1>
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex justify-between items-center bg-white shadow px-4 py-2 rounded-lg"
          >
            <div>{project.name}</div>
            <a
              href={`/dashboard/projects/editProjects/${project._id}`}
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fas fa-pencil-alt"></i> Edit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
