import React from "react";

const JobCategoryItem = ({ category }) => {
  return (
    <div className="mx-auto custom-bg p-8 w-[280px] h-[210px] relative">
      <div className="bottom-6 absolute">
        <img
          src={category.icon}
          className="w-[70px] h-[70px] icon-bg p-4 mb-4"
          alt=""
        />
        <h2 className="text-xl md:text-2xl font-bold my-2">{category.title}</h2>
        <p className="text-base md:text-lg text-gray-400">
          {category.num_jobs} Jobs Available
        </p>
      </div>
    </div>
  );
};

export default JobCategoryItem;
