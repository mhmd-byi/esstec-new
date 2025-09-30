import React, { useState, useEffect } from "react";

function ExpertiseForm() {
  const [expertise, setExpertise] = useState({
    name: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        if (response.ok) {
          setCategories(data);
          // Set default category if available
          if (data.length > 0) {
            setExpertise(prev => ({ ...prev, category: data[0].name }));
          }
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleNameChange = (e) => {
    setExpertise({ ...expertise, name: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setExpertise({ ...expertise, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/expertise", {
        method: "POST",
        body: JSON.stringify(expertise),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Expertise created successfully!");
        setExpertise({
          name: "",
          category: "branding & communication",
        });
      } else {
        throw new Error("Failed to create the expertise.");
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
        <label htmlFor="category" className="flex items-center">
          Category
        </label>
        <select
          name="category"
          id="category"
          value={expertise.category}
          onChange={handleCategoryChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          disabled={loading}
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
        Submit
      </button>
    </form>
  );
}

export default ExpertiseForm;
