import React from "react";
import "../index.css";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center p-4 pt-16">
        <h1 className="px-4 text-center text-5xl font-[400] leading-[1.35]">
          Offering the highest quality{" "}
          <span className="font-[300] italic">legal services</span>
        </h1>
        <p className="py-8 text-center text-lg">
          Through 10 years of experience and over 200 million in transaction
          values we offer the most premium legal services.
        </p>
        <a href="#" className="button mt-2 scale-[1.35] px-8 py-3">
          Let's talk
        </a>
      </div>

      <div className="relative mt-14 flex w-full items-center justify-center">
        <img
          src="../../public/hero_image.webp"
          alt=""
          className="z-20 scale-90"
        />
        <div className="absolute z-10 h-2/3 w-full bg-accent"></div>
      </div>
    </div>
  );
};

export default Hero;
