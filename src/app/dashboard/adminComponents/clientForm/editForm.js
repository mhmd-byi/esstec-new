import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function EditForm() {
  const regex = /[^/]+$/;
  const pathname = usePathname();
  const match = pathname.match(regex);
  const clientId = match[0];
  const [client, setClient] = useState({
    name: "",
    isClientActive: false,
    websiteUrl: "",
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClient() {
      const response = await fetch(`/api/clients/${clientId}`);
      const data = await response.json();
      if (response.ok) {
        setClient({
          name: data.name,
          isClientActive: data.isClientActive,
          websiteUrl: data.websiteUrl,
        });
      } else {
        alert("Failed to fetch client details");
      }
      setLoading(false);
    }

    fetchClient();
  }, [clientId]);

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
      const response = await fetch(`/api/clients/${clientId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
      });
      if (response.ok) {
        alert("Client updated successfully!");
      } else {
        alert("Failed to update the client.");
      }
    } catch (error) {
      alert("Error updating client: " + error.message);
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
          Client Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={client.name}
          onChange={(e) => handleNameChange(e)}
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
            onChange={(e) => handleCheckboxChange(e)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">Is Active?</span>
        </label>
      </div>
      <div className="mb-4">
        <label
          htmlFor="websiteUrl"
          className="block text-sm font-medium text-gray-700"
        >
          Website Url
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={client.websiteUrl}
          onChange={(e) => handleWebsiteUrlChange(e)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update Client
      </button>
    </form>
  );
}

export default EditForm;
