import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function EditExpertiseForm() {
  const regex = /[^/]+$/;
  const pathname = usePathname();
  const match = pathname.match(regex);
  const expertiseId = match[0];
  const [expertise, setExpertise] = useState({
    name: "",
    category: "branding & communication",
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExpertise() {
      const response = await fetch(`/api/expertise/${expertiseId}`);
      const data = await response.json();
      if (response.ok) {
        setExpertise({
          name: data.name,
          category: data.category,
        });
      } else {
        alert("Failed to fetch expertise details");
      }
      setLoading(false);
    }

    fetchExpertise();
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
        >
          <option value="branding & communication">Branding & Communication</option>
          <option value="virtual computing">Virtual Computing</option>
          <option value="spatial experience">Spatial Experience</option>
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