import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  return (
    <div className="mx-auto border rounded-lg p-6 xl:w-[600px] xl:h-[320px] lg:w-[450px] lg:h-[320px] w-[300px] h-[320px]">
      <img
        src={feature.icon}
        className="w-[116px] h-[40px] my-2"
        alt="feature-icon"
      />
      <h2 className="text-md md:text-xl font-bold">{feature.title}</h2>
      <p className="mb-4 text-gray-600">{feature.company_name}</p>
      <div className="text-xs">
        {feature.job_type.map((jobType, index) => (
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
          {feature.location}
        </div>
        <div className="flex gap-2 my-2">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
          Salary : {feature.salary}
        </div>
      </div>
      <Link to={`/job-details/${feature.id}`}>
        <button className="btn btn-custom-view mt-2">View Details</button>
      </Link>
    </div>
  );
};

export default Feature;
