"use client";
import { useEffect, useState } from "react";

const AllExpertisePage = () => {
  const [expertise, setExpertise] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpertise = async () => {
      const response = await fetch("/api/expertise");
      const data = await response.json();
      if (response.ok) {
        setExpertise(data);
      } else {
        alert("Failed to fetch expertise");
      }
      setLoading(false);
    };

    fetchExpertise();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-semibold my-4">All Expertise</h1>
      <div className="space-y-3">
        {expertise.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center bg-white shadow px-4 py-2 rounded-lg"
          >
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-gray-500">{item.category}</div>
            </div>
            <a
              href={`/dashboard/expertise/editExpertise/${item._id}`}
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

export default AllExpertisePage;
