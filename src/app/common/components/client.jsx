import { clientData } from "./clientsData";

export const ClientComponent = () => {
  return (
    <div className="scrollbar max-h-full w-full space-y-4 overflow-y-auto p-4 md:space-y-6">
      <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl md:pb-20">
        clients
      </h2>
      <div className="grid gap-4 text-left text-xs uppercase text-text-primary xs:grid-cols-2 md:grid-cols-3 md:text-sm lg:grid-cols-4 md:pl-12 lg:pl-24">
        {clientData.map((client, index) => (
          <div key={index} className="">
            <p>{client.name}</p>
            <a
              href={`https://${client.website}`}
              target="_blank"
              className="cursor-pointer font-medium lowercase"
            >
              {client.website}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
