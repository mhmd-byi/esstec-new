import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function EditExpertiseForm() {
  const regex = /[^/]+$/;
  const pathname = usePathname();
  const match = pathname.match(regex);
  const expertiseId = match[0];
  const [expertise, setExpertise] = useState({
    name: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch categories
        const categoriesResponse = await fetch('/api/categories');
        const categoriesData = await categoriesResponse.json();
        if (categoriesResponse.ok) {
          setCategories(categoriesData);
        } else {
          console.error('Failed to fetch categories');
        }

        // Fetch expertise
        const response = await fetch(`/api/expertise/${expertiseId}`);
        const data = await response.json();
        if (response.ok) {
          setExpertise({
            name: data.name,
            category: data.category || "",
          });
        } else {
          alert("Failed to fetch expertise details");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [expertiseId]);

  const handleNameChange = (e) => {
    setExpertise({ ...expertise, name: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setExpertise({ ...expertise, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/expertise/${expertiseId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expertise),
      });
      if (response.ok) {
        alert("Expertise updated successfully!");
      } else {
        alert("Failed to update the expertise.");
      }
    } catch (error) {
      alert("Error updating expertise: " + error.message);
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
          Expertise Title
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={expertise.name}
          onChange={handleNameChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="category"
          id="category"
          value={expertise.category}
          onChange={handleCategoryChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          disabled={isLoading}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update Expertise
      </button>
    </form>
  );
}

export default EditExpertiseForm;