// File: /app/components/ProjectForm.js
import axios from "axios";
import React, { useState, useEffect } from "react";

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
    monthYear: "",
  });

  const [expertiseList, setExpertiseList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch expertise and categories data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch expertise
        const expertiseResponse = await fetch('/api/expertise');
        const expertiseData = await expertiseResponse.json();
        if (expertiseResponse.ok) {
          setExpertiseList(expertiseData);
        } else {
          console.error('Failed to fetch expertise');
        }

        // Fetch categories
        const categoriesResponse = await fetch('/api/categories');
        const categoriesData = await categoriesResponse.json();
        if (categoriesResponse.ok) {
          setCategories(categoriesData);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNameChange = (e) => {
    setProject({ ...project, name: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setProject({ ...project, isProjectActive: e.target.checked });
  };

  const handleYearChange = (e) => {
    setProject({ ...project, year: e.target.value });
  };

  const handleMonthYearChange = (e) => {
    const monthYearValue = e.target.value;
    setProject({ ...project, monthYear: monthYearValue });
    
    // Extract year from month-year format (YYYY-MM)
    if (monthYearValue) {
      const year = monthYearValue.split('-')[0];
      setProject(prev => ({ ...prev, year: year }));
    }
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
      type: "image", // Default to image
      poster: "", // For videos
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
          year: "",
          monthYear: "",
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
              htmlFor="monthYear"
              className="block text-sm font-medium text-gray-700"
            >
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
            {type === "desktopImages" ? "Desktop Media" : "Mobile Media"}
          </label>
          {project[type].map((image, index) => (
            <div key={index} className="space-y-2 mb-2">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter media URL (image or video)"
                  value={image.url}
                  onChange={(e) =>
                    handleImageChange(type, index, "url", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <select
                  value={image.type || "image"}
                  onChange={(e) =>
                    handleImageChange(type, index, "type", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              {(image.type === "video" || (image.url && image.url.match(/\.(mp4|webm|ogg|mov|avi|mkv)$/i))) && (
                <input
                  type="text"
                  placeholder="Enter video poster/thumbnail URL (optional)"
                  value={image.poster || ""}
                  onChange={(e) =>
                    handleImageChange(type, index, "poster", e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
              <input
                type="text"
                placeholder="Enter alt text"
                value={image.alt}
                onChange={(e) =>
                  handleImageChange(type, index, "alt", e.target.value)
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image Title (Choose one option)
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Either type a custom title or select from expertise dropdown
                </p>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter custom title"
                    value={image.title}
                    onChange={(e) => {
                      handleImageChange(type, index, "title", e.target.value);
                      // Clear dropdown selection when typing
                      const dropdown = document.getElementById(`expertise-dropdown-${type}-${index}`);
                      if (dropdown) dropdown.value = "";
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-1/2"
                  />
                  <select
                    id={`expertise-dropdown-${type}-${index}`}
                    onChange={(e) => {
                      if (e.target.value) {
                        handleImageChange(type, index, "title", e.target.value);
                        // Clear text input when selecting from dropdown
                        const textInput = document.querySelector(`input[placeholder="Enter custom title"]`);
                        if (textInput) textInput.value = "";
                      }
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-1/2"
                    defaultValue=""
                  >
                    <option value="">Select from expertise</option>
                    {(() => {
                      // Group expertise by category
                      const groupedExpertise = expertiseList.reduce((acc, item) => {
                        const category = item.category || "other";
                        if (!acc[category]) {
                          acc[category] = [];
                        }
                        acc[category].push(item);
                        return acc;
                      }, {});

                      // Use dynamic categories from database
                      const sortedCategories = Object.keys(groupedExpertise).sort((a, b) => {
                        const categoryA = categories.find(cat => cat.name === a);
                        const categoryB = categories.find(cat => cat.name === b);
                        const orderA = categoryA?.order || 999;
                        const orderB = categoryB?.order || 999;
                        return orderA - orderB;
                      });

                      return sortedCategories.map((category) => {
                        const categoryData = groupedExpertise[category];
                        
                        return (
                          <optgroup key={category} label={category}>
                            {categoryData.map((expertise) => (
                              <option key={expertise._id} value={expertise.name}>
                                {expertise.name}
                              </option>
                            ))}
                          </optgroup>
                        );
                      });
                    })()}
                  </select>
                </div>
              </div>
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
