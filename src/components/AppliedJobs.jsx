import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobItem from "./AppliedJobItem";
import DetailsCommon from "./DetailsCommon";

const AppliedJobs = () => {
  const apllideJobsData = useLoaderData();
  console.log(apllideJobsData);
  const [filterJob, setFilterJob] = useState(apllideJobsData);

  // handle filter
  const handleFilter = (e) => {
    const filterOption = e.target.value;
    console.log(filterOption);
    const filteredJob = apllideJobsData.filter((ajd) => {
      if (filterOption.toLowerCase() !== "all") {
        return ajd.job_type[0].toLowerCase() === filterOption.toLowerCase();
      }
      return ajd;
    });
    setFilterJob(filteredJob);
    console.log(filteredJob);
  };
  return (
    <>
      <DetailsCommon>Applied Job</DetailsCommon>
      <div className="container mx-auto my-20">
        <div className="text-end mr-32">
          <select
            onChange={handleFilter}
            className="select select-bordered w-full max-w-xs w-48"
          >
            <option
              disabled
              value
            >
              Filter By
            </option>
            <option>All</option>
            <option>Remote</option>
            <option>Onsite</option>
          </select>
        </div>
        <div>
          {filterJob.map((jobData) => (
            <AppliedJobItem
              key={jobData.id}
              jobData={jobData}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
