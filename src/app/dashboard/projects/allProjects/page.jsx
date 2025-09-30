"use client";
import { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Sortable Project Item Component
const SortableProjectItem = ({ project }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex justify-between items-center bg-white shadow px-4 py-2 rounded-lg cursor-move hover:shadow-md transition-shadow"
    >
      <div className="flex items-center">
        <div className="mr-3 text-gray-400">
          <i className="fas fa-grip-vertical"></i>
        </div>
        <div>{project.name}</div>
      </div>
      <a
        href={`/dashboard/projects/editProjects/${project._id}`}
        className="text-blue-500 hover:text-blue-700"
        onClick={(e) => e.stopPropagation()}
      >
        <i className="fas fa-pencil-alt"></i> Edit
      </a>
    </div>
  );
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      if (response.ok) {
        // Ensure all projects have a position field
        const projectsWithPosition = data.map((project, index) => ({
          ...project,
          position: project.position !== undefined ? project.position : index
        }));
        setProjects(projectsWithPosition);
      } else {
        alert("Failed to fetch projects");
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = projects.findIndex((project) => project._id === active.id);
      const newIndex = projects.findIndex((project) => project._id === over.id);

      const newProjects = arrayMove(projects, oldIndex, newIndex);
      setProjects(newProjects);

      // Update positions in the database
      try {
        const positionUpdates = newProjects.map((project, index) => ({
          id: project._id,
          position: index
        }));

        const response = await fetch("/api/projects/reorder", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ positionUpdates }),
        });

        if (!response.ok) {
          console.error("Failed to update project positions");
          // Revert the local state if the API call failed
          setProjects(projects);
        }
      } catch (error) {
        console.error("Error updating project positions:", error);
        // Revert the local state if there was an error
        setProjects(projects);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-semibold my-4">Projects</h1>
      <p className="text-sm text-gray-600 mb-4">
        Drag and drop projects to reorder them. The order will be saved automatically.
      </p>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={projects.map(project => project._id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3">
            {projects.map((project) => (
              <SortableProjectItem key={project._id} project={project} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ProjectsPage;
