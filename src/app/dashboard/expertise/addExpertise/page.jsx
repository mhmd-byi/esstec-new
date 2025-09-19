"use client";
import ExpertiseForm from "@/app/dashboard/adminComponents/expertiseForm/expertiseForm";

const AddExpertisePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-semibold my-4">Add New Expertise</h1>
      <ExpertiseForm />
    </div>
  );
};

export default AddExpertisePage;
