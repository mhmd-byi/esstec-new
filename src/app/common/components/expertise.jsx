"use client";

import { useEffect, useState } from "react";

export const ExpertiseComponent = () => {
  const [expertise, setExpertise] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpertise = async () => {
      try {
        const response = await fetch("/api/expertise");
        const data = await response.json();
        if (response.ok) {
          setExpertise(data);
        } else {
          console.error("Failed to fetch expertise");
        }
      } catch (error) {
        console.error("Error fetching expertise:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpertise();
  }, []);

  // Group expertise by category
  const groupedExpertise = expertise.reduce((acc, item) => {
    const category = item.category || "other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Define category order and display names
  const categoryConfig = {
    "branding & communication": {
      displayName: "branding & communication",
      order: 1
    },
    "virtual computing": {
      displayName: "VIRTUAL COMPUTING",
      order: 2
    },
    "spatial experience": {
      displayName: "spatial experience",
      order: 3
    }
  };

  // Sort categories by order
  const sortedCategories = Object.keys(groupedExpertise).sort((a, b) => {
    const orderA = categoryConfig[a]?.order || 999;
    const orderB = categoryConfig[b]?.order || 999;
    return orderA - orderB;
  });

  if (loading) {
    return (
      <div className="overflow-scroll md:overflow-hidden max-h-full space-y-4 p-2 md:space-y-6 md:h-full grid grid-cols-1 px-5 md:px-32">
        <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl md:mt-20 md:-mb-20">
          Digital & Physical
        </h2>
        <div className="text-center text-text-primary">
          <p>Loading expertise...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-scroll md:overflow-hidden max-h-full space-y-4 p-2 md:space-y-6 md:h-full grid grid-cols-1 px-5 md:px-32">
      <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl md:mt-20 md:-mb-20">
        Digital & Physical
      </h2>
      <div className="space-y-5 text-center text-xs uppercase text-text-primary sm:space-y-6 md:text-sm">
        {sortedCategories.map((category) => {
          const categoryData = groupedExpertise[category];
          const config = categoryConfig[category] || { displayName: category };
          
          return (
            <p key={category}>
              <span className="font-medium">{config.displayName}</span>
              <br />-<br />
              {categoryData.map((item, index) => (
                <span key={item._id}>
                  {item.name}
                  {index < categoryData.length - 1 ? " / " : ""}
                </span>
              ))}
            </p>
          );
        })}
        <p>*</p>
      </div>
    </div>
  );
};
