import React from "react";
import { useLoaderData } from "react-router-dom";
import { addToLocalStorageDb } from "../fakeDb";

const JobDetails = () => {
  const targetJobs = useLoaderData();
  const handleApplyJob = (id) => {
    addToLocalStorageDb(id);
  };
  return (
    <div className="container mx-auto w-[90%] md:w-[80%]">
      <h1 className="text-center text-4xl md:text-6xl my-10">Job Details</h1>
      <div className="md:flex items-center justify-between gap-8">
        <div className="w-3/4">
          <p className="my-4">
            <span className="font-bold">Job Description : </span>{" "}
            {targetJobs.job_description}
          </p>
          <p className="my-4">
            <span className="font-bold">Job Responsibility : </span>{" "}
            {targetJobs.job_responsibilities}
          </p>
          <p className="my-4">
            <span className="font-bold">Educational Requirements : </span>{" "}
            {targetJobs.educational_requirements}
          </p>
          <p className="my-4">
            <span className="font-bold">Job Experience : </span>{" "}
            {targetJobs.experience}
          </p>
        </div>
        <div className="bg-indigo-100 md:w-1/4 p-6 rounded-lg">
          <h2 className="font-bold">Job Details</h2>
          <hr className="bg-indigo-300 h-[2px] my-4" />
          <p><span className="font-semibold">Salary : </span>{targetJobs.salary}</p>
          <p><span className="font-semibold">Job Title : </span>{targetJobs.title}</p>
          <h2 className="font-bold mt-4">Contact Information</h2>
          <hr className="bg-indigo-300 h-[2px] my-4" />
          <p><span className="font-semibold">Phone : </span>{targetJobs.phone}</p>
          <p><span className="font-semibold">Email : </span>{targetJobs.email}</p>
          <p><span className="font-semibold">Address : </span>{targetJobs.address}</p>
          <button
            onClick={() => handleApplyJob(targetJobs.id)}
            className="btn-custom md:w-full w-[50%] mt-4"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
