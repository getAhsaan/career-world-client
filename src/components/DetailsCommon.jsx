import React from "react";
import bgOne from "../assets/Vector.png";
import bgTwo from "../assets/Vector-1.png";

const DetailsCommon = ({ children }) => {
  return (
    <div
      className="h-[250px] items-center justify-center flex bg-no-repeat relative "
      style={{
        backgroundImage: `url(${bgOne}) , linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)`,
        backgroundPosition: "left bottom, center",
      }}
    >
        <img className="absolute right-0 -top-24" src={bgTwo} alt='bg' />
      <h2 className="font-bold text-4xl">{children}</h2>
    </div>
  );
};

export default DetailsCommon;
