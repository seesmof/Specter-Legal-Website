import React from "react";
import "../index.css";

const Hero = () => {
  return (
    <div className="flex flex-col py-12 pb-6">
      <h1 className="px-12 text-center text-5xl font-[400] leading-[1.35]">
        Offering the highest quality{" "}
        <span className="font-[300] italic">legal services</span>
      </h1>
    </div>
  );
};

export default Hero;
