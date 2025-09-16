// File: /app/components/ProjectForm.js
import axios from "axios";
import React, { useState } from "react";

function ProjectForm() {
  const [project, setProject] = useState({
    name: "",
    isProjectActive: false,
    title: "",
    desktopImages: [
      {
        imageUrl: "",
        alt: "",
        height: 394,
        width: 743,
      },
    ],
    mobileImages: [
      {
        imageUrl: "",
        alt: "",
        height: 140,
        width: 193,
      },
    ],
    year: "",
  });

  const handleNameChange = (e) => {
    setProject({ ...project, name: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setProject({ ...project, isProjectActive: e.target.checked });
  };

  const handleYearChange = (e) => {
    setProject({ ...project, year: e.target.value });
  };

  const handleImageChange = (type, index, field, value) => {
    const updatedImages = [...project[type]];
    updatedImages[index] = { ...updatedImages[index], [field]: value };
    setProject({ ...project, [type]: updatedImages });
  };

  const addImageField = (type) => {
    const width = type === "desktopImages" ? 743 : 193;
    const height = type === "desktopImages" ? 394 : 140;
    const newImage = {
      imageUrl: "",
      alt: "",
      title: "",
      width: width,
      height: height,
    };
    setProject({ ...project, [type]: [...project[type], newImage] });
  };

  const removeImageField = (type, index) => {
    const updatedImages = [...project[type]];
    if (updatedImages.length > 1) {
      updatedImages.splice(index, 1);
      setProject({ ...project, [type]: updatedImages });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify(project),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Project submitted successfully!");
        setProject({
          name: "",
          isProjectActive: false,
          title: "",
          desktopImages: [{ imageUrl: "", alt: "", height: 394, width: 743 }],
          mobileImages: [{ imageUrl: "", alt: "", height: 140, width: 193 }],
        });
      } else {
        throw new Error("Failed to submit the project.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Project Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={project.name}
          onChange={handleNameChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4 flex">
        <div className="flex w-full">
          <label htmlFor="isProjectActive" className="flex items-center">
            <input
              type="checkbox"
              name="isProjectActive"
              id="isProjectActive"
              checked={project.isProjectActive}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Is Active?</span>
          </label>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col">
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700"
            >
              Project Year
            </label>
            <input
              type="number"
              name="year"
              id="year"
              value={project.year}
              onChange={handleYearChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      {["desktopImages", "mobileImages"].map((type) => (
        <div key={type} className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            {type === "desktopImages" ? "Desktop Images" : "Mobile Images"}
          </label>
          {project[type].map((image, index) => (
            <div key={index} className="space-y-2 mb-2">
              <input
                type="text"
                placeholder="Enter image URL"
                value={image.url}
                onChange={(e) =>
                  handleImageChange(type, index, "url", e.target.value)
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                placeholder="Enter alt text"
                value={image.alt}
                onChange={(e) =>
                  handleImageChange(type, index, "alt", e.target.value)
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                placeholder="Enter title"
                value={image.title}
                onChange={(e) =>
                  handleImageChange(type, index, "title", e.target.value)
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {project[type].length > 1 && (
                <button
                  type="button"
                  onClick={() => removeImageField(type, index)}
                  className="bg-red-500 text-white px-2 py-1 rounded shadow"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addImageField(type)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Image
          </button>
        </div>
      ))}
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit Project
      </button>
    </form>
  );
}

export default ProjectForm;
