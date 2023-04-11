import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobItem from "./AppliedJobItem";

const AppliedJobs = () => {
  const apllideJobsData = useLoaderData();
  console.log(apllideJobsData);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl md:text-6xl my-10">Applied Jobs</h1>
      <div>
        {apllideJobsData.map((jobData) => (
          <AppliedJobItem
            key={jobData.id}
            jobData={jobData}
          />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
