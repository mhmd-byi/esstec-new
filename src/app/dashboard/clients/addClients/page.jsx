"use client";

import ClientForm from "../../adminComponents/clientForm/clientForm";


export default function addClients() {
  return (
    <div>
      <h1 className="text-xl font-bold text-center my-4">Add New Client</h1>
      <ClientForm />
    </div>
  );
}
