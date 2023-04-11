import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const AppliedJobItem = ({ jobData }) => {
  return (
    <div className="mx-auto border rounded-lg p-6 w-[95%] md:w-[80%] md:flex justify-between items-center my-4">
      <div className="md:flex gap-8 ">
        <div>
          <img
            src={jobData.icon}
            className="bg-gray-200 rounded-lg px-8 py-16 w-[150px] my-2"
            alt="jobData-icon"
          />
        </div>
        <div>
          <h2 className="text-md md:text-xl font-bold">{jobData.title}</h2>
          <p className="mb-4 text-gray-600">{jobData.company_name}</p>
          <div className="text-xs">
            {jobData.job_type.map((jobType, index) => (
              <span
                className="cursor-pointer border rounded border-[#9873FF] px-2 py-1 mr-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
                key={index}
              >
                {jobType}
              </span>
            ))}
          </div>
          <div className=" md:flex gap-8 mt-4">
            <div className="flex gap-2 my-2">
              <MapPinIcon className="h-6 w-6 text-gray-400" />
              {jobData.location}
            </div>
            <div className="flex gap-2 my-2">
              <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
              Salary : {jobData.salary}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/job-details/${jobData.id}`}>
          <button className="btn btn-custom-view mt-2">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobItem;
