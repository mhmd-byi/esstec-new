import { useEffect, useState } from "react";
import { clientData } from "./clientsData";

export const ClientComponent = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch("/api/clients");
      const data = await response.json();
      if (response.ok) {
        setClients(data);
      } else {
        alert("Failed to fetch projects");
      }
      setLoading(false);
    };

    fetchClients();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-scroll md:overflow-hidden max-h-full w-full space-y-4 p-2 md:space-y-6 md:h-full grid grid-cols-1 px-5 md:px-0">
      <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl md:mt-20 md:-mb-20">
        clients
      </h2>
      <div className="grid gap-4 text-center md:text-left text-xs uppercase text-text-primary grid-cols-1 md:grid-cols-3 md:text-sm lg:grid-cols-4 md:pl-12 lg:pl-24">
        {clients.map(
          (client, index) =>
            client.isClientActive && (
              <div key={index}>
                <p>{client.name}</p>
                <a
                  href={`https://${client.websiteUrl}`}
                  target="_blank"
                  rel="noopener noreferrer" // Important for security when using target="_blank"
                  className="cursor-pointer font-medium lowercase"
                >
                  {client.websiteUrl}
                </a>
              </div>
            )
        )}
      </div>
    </div>
  );
};
