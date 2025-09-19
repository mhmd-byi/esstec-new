import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function EditForm() {
  const regex = /[^/]+$/;
  const pathname = usePathname();
  const match = pathname.match(regex);
  const projectId = match[0];
  const [project, setProject] = useState({
    name: "",
    isProjectActive: false,
    desktopImages: [
      {
        url: "",
        alt: "",
        height: 394,
        width: 743,
        title: "",
      },
    ],
    mobileImages: [
      {
        url: "",
        alt: "",
        height: 140,
        width: 193,
        title: "",
      },
    ],
    year: "",
    monthYear: "",
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      const response = await fetch(`/api/projects/${projectId}`);
      const data = await response.json();
      if (response.ok) {
        setProject({
          name: data.name,
          isProjectActive: data.isProjectActive,
          desktopImages: data.desktopImages || [
            { url: "", alt: "", height: 394, width: 743, title: "" },
          ],
          mobileImages: data.mobileImages || [
            { url: "", alt: "", height: 140, width: 193, title: "" },
          ],
          year: data.year || "",
          monthYear: data.monthYear || "",
        });
      } else {
        alert("Failed to fetch project details");
      }
      setLoading(false);
    }

    fetchProject();
  }, [projectId]);

  const handleChange = (e, type, index, field) => {
    if (type) {
      const newImages = [...project[type]];
      newImages[index] = { ...newImages[index], [field]: e.target.value };
      setProject((prev) => ({ ...prev, [type]: newImages }));
    } else {
      const { name, value, checked } = e.target;
      setProject((prev) => ({
        ...prev,
        [name]: name === "isProjectActive" ? checked : value,
      }));
    }
  };

  const handleAddImageField = (type) => {
    const width = type === "desktopImages" ? 743 : 193;
    const height = type === "desktopImages" ? 394 : 140;
    const newImage = { url: "", alt: "", height: height, width: width, title: "" };
    setProject((prev) => ({ ...prev, [type]: [...prev[type], newImage] }));
  };

  const handleRemoveImageField = (type, index) => {
    const updatedImages = [...project[type]];
    updatedImages.splice(index, 1);
    setProject((prev) => ({ ...prev, [type]: updatedImages }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
      if (response.ok) {
        alert("Project updated successfully!");
      } else {
        alert("Failed to update the project.");
      }
    } catch (error) {
      alert("Error updating project: " + error.message);
    }
  };

  const handleYearChange = (e) => {
    setProject((prev) => ({ ...prev, year: e.target.value }));
  };

  const handleMonthYearChange = (e) => {
    const monthYearValue = e.target.value;
    setProject(prev => ({ ...prev, monthYear: monthYearValue }));
    
    // Extract year from month-year format (YYYY-MM)
    if (monthYearValue) {
      const year = monthYearValue.split('-')[0];
      setProject(prev => ({ ...prev, year: year }));
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
          onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">Is Active?</span>
        </label>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col">
            <label htmlFor="monthYear" className="block text-sm font-medium text-gray-700">
              Project Month & Year
            </label>
            <input
              type="month"
              name="monthYear"
              id="monthYear"
              value={project.monthYear}
              onChange={handleMonthYearChange}
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
                onChange={(e) => handleChange(e, type, index, "url")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                placeholder="Enter alt text"
                value={image.alt}
                onChange={(e) => handleChange(e, type, index, "alt")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                name="title"
                id="title"
                value={image.title}
                onChange={(e) => handleChange(e, type, index, "title")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {project[type].length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveImageField(type, index)}
                  className="bg-red-500 text-white px-2 py-1 rounded shadow"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddImageField(type)}
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
        Update Project
      </button>
    </form>
  );
}

export default EditForm;
