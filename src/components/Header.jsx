import React from "react";
import "../index.css";
import { BsFilter } from "react-icons/bs";

const Header = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between bg-background p-4 py-6">
      <a href="#" className="">
        <img
          src="https://assets.website-files.com/643a7ed169b7a562c0cd61f3/643a81a4d7203275741ccd62_LogoLight.svg"
          alt="Page Logo"
          className=""
        />
      </a>
      <div className="flex flex-row items-center gap-2">
        <a href="#" className="button capitalize">
          cart
        </a>
        <a
          href="#"
          className="rounded-full bg-secondary p-2 text-3xl duration-300 hover:bg-secondary/50"
        >
          <BsFilter />
        </a>
      </div>
    </div>
  );
};

export default Header;
