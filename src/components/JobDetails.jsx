import React from "react";
import { useLoaderData } from "react-router-dom";
import { addToLocalStorageDb } from "../fakeDb";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import DetailsCommon from "./DetailsCommon";

const JobDetails = () => {
  const targetJobs = useLoaderData();
  const handleApplyJob = (id) => {
    addToLocalStorageDb(id);
  };
  return (
    <>
    <DetailsCommon>
      Job Details
    </DetailsCommon>
      <div className="container mx-auto w-[90%] md:w-[80%] my-20">
        <div className="md:flex  justify-between gap-8">
          <div className="w-2/3">
            <p className="mb-4">
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
          <div className=" md:w-1/3">
            <div className="bg-indigo-100 p-6 rounded-lg">
              <h2 className="font-bold">Job Details</h2>
              <hr className="bg-indigo-300 h-[2px] my-4" />
              <div>
                <span>
                  <CurrencyDollarIcon class="h-6 w-6 text-indigo-600 inline" />
                </span>{" "}
                <span className="my-2">
                  <span className="font-semibold">Salary : </span>
                  {targetJobs.salary}
                </span>
              </div>
              <div className="my-2">
                <span>
                  <CalendarDaysIcon class="h-6 w-6 text-indigo-600 inline" />
                </span>{" "}
                <span className="my-2">
                  <span className="font-semibold">Job Title : </span>
                  {targetJobs.title}
                </span>
              </div>
              <h2 className="font-bold mt-4">Contact Information</h2>
              <hr className="bg-indigo-300 h-[2px] my-4" />
              <div className="my-2">
                <span>
                  <PhoneIcon class="h-6 w-6 text-indigo-600 inline" />
                </span>{" "}
                <span className="my-2">
                  <span className="font-semibold">Phone : </span>
                  {targetJobs.phone}
                </span>
              </div>
              <div className="my-2">
                <span>
                  <EnvelopeIcon class="h-6 w-6 text-indigo-600 inline" />
                </span>{" "}
                <span className="my-2">
                  <span className="font-semibold">Email : </span>
                  {targetJobs.email}
                </span>
              </div>
              <div className="my-2">
                <span>
                  <MapPinIcon class="h-6 w-6 text-indigo-600 inline" />
                </span>{" "}
                <span>
                  <span className="font-semibold">Address : </span>
                  {targetJobs.address}
                </span>
              </div>
            </div>
            <button
              onClick={() => handleApplyJob(targetJobs.id)}
              className="btn-custom md:w-full w-[50%] mt-4"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
