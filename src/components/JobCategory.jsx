import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import JobCategoryItem from "./JobCategoryItem";

const JobCategory = () => {
  const jobCategoryData = useLoaderData();
  return <div className="custom-container mt-10">
    <h1 className="text-3xl md:text-4xl font-bold text-center my-2">Job Category List</h1>
    <p className="text-center text-gray-400">Explore thousands of job opportunities with all the information you need. Its your future</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
    {
        jobCategoryData.map(category=><JobCategoryItem key={category.id} category={category}/>)
    }
    </div>
  </div>;
};

export default JobCategory;
