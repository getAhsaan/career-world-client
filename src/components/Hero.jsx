import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <div className="custom-bg">
     <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h1 className="md:text-7xl text-3xl font-semibold">
              One Step Closer To Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
                Dream Job
              </span>
            </h1>
            <p className="text-gray-600 my-4">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <Link>
            <button className="btn-custom">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="https://i.ibb.co/1r4JHzJ/P3-OLGJ1-copy-1.png"
          className="lg:ml-12 2xl:-mb-16"
          alt="hero-image"
        />
      </div>
    </div>
   </div>
  );
};

export default Hero;
