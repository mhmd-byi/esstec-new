"use client";
import { useEffect, useState } from "react";

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch("/api/clients");
      const data = await response.json();
      if (response.ok) {
        setClients(data);
      } else {
        alert("Failed to fetch clients");
      }
      setLoading(false);
    };

    fetchClients();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-semibold my-4">Clients</h1>
      <div className="space-y-3">
        {clients.map((client) => (
          <div
            key={client._id}
            className="flex justify-between items-center bg-white shadow px-4 py-2 rounded-lg"
          >
            <div>{client.name}</div>
            <a
              href={`/dashboard/clients/editClients/${client._id}`}
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

export default ClientsPage;
