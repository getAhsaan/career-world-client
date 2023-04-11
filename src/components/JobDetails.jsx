import React from "react";
import { useLoaderData } from "react-router-dom";
import { addToLocalStorageDb } from "../fakeDb";

const JobDetails = () => {
  const targetJobs = useLoaderData();
  const handleApplyJob = (id) => {
    addToLocalStorageDb(id);
  };
  return (
    <div className="container mx-auto text-center">
      Job Details
      <button
        onClick={() => handleApplyJob(targetJobs.id)}
        className="btn-custom"
      >
        Apply JOb
      </button>
    </div>
  );
};

export default JobDetails;
