import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Feature from "./Feature";

const FeaturedJobs = () => {
  const { featuredJobsData } = useLoaderData();
  const [allJobsData, setAllJobsData] = useState([]);
  const handleSeeAllJobs = () => {
    setAllJobsData(featuredJobsData);
  };
  return (
    <div className=" mt-10 custom-container mx-auto ">
      <h1 className="text-3xl md:text-4xl font-bold text-center my-2">
        Featured Jobs
      </h1>
      <p className="text-center text-gray-400">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 justify-center gap-4 mt-10">
        {allJobsData.length > 0
          ? allJobsData.map((feature) => (
              <Feature
                key={feature.id}
                feature={feature}
              />
            ))
          : featuredJobsData.slice(0, 4).map((feature) => (
              <Feature
                key={feature.id}
                feature={feature}
              />
            ))}
      </div>
      <div
        className={`text-center ${
          featuredJobsData.length === allJobsData.length && "hidden"
        }`}
      >
        <button
          className="btn btn-custom mt-8"
          onClick={handleSeeAllJobs}
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
