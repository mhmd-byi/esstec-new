import React, { useState } from "react";

function ClientForm() {
  const [client, setClient] = useState({
    name: "",
    isClientActive: false,
    websiteUrl: "",
  });

  const handleNameChange = (e) => {
    setClient({ ...client, name: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setClient({ ...client, isClientActive: e.target.checked });
  };

  const handleWebsiteUrlChange = (e) => {
    setClient({ ...client, websiteUrl: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        body: JSON.stringify(client),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Client submitted successfully!");
        setClient({
          name: "",
          isClientActive: false,
          websiteUrl: "",
        });
      } else {
        throw new Error("Failed to submit the client.");
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
          Client Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={client.name}
          onChange={handleNameChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="isClientActive" className="flex items-center">
          <input
            type="checkbox"
            name="isClientActive"
            id="isClientActive"
            checked={client.isClientActive}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">Is Active?</span>
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="websiteUrl" className="flex items-center">
          Website Url
        </label>
        <input
          type="text"
          name="websiteUrl"
          id="websiteUrl"
          value={client.websiteUrl}
          onChange={handleWebsiteUrlChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
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

export default ClientForm;
