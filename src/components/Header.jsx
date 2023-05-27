import React from "react";
import "../index.css";

const Header = () => {
  return (
    <div className="flex justify-between p-4 py-6">
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
      </div>
    </div>
  );
};

export default Header;
