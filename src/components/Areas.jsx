import React from "react";
import { BsMortarboard, BsPeopleFill } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";

const Areas = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-4 pb-8 pt-16 text-center">
        <h2 className="text-3xl">Areas of practice</h2>
        <p className="py-6 text-lg">
          Nullam tincidunt adipiscing enim. Praesent egestas neques eu enim.
          Vivamus elementum semper nisi. Etiam rhoncus.
        </p>
        <a href="#" className="button px-8">
          See all services
        </a>
      </div>

      <div className=" grid grid-cols-1 gap-6 p-4">
        <div className="rounded-lg border border-card_border bg-card_background p-6">
          <div className="flex flex-row items-center gap-2 text-xl font-medium">
            <BsMortarboard className="text-3xl" />
            University law
          </div>
          <p className="py-6 text-lg">
            Nullam tincidunt adipsicing enim. Praesent egestas neque eu enim.
          </p>
          <a
            href="#"
            className="font-medium underline-offset-4 hover:underline"
          >
            Read more
          </a>
        </div>
        <div className="rounded-lg border border-card_border bg-card_background p-6">
          <div className="flex flex-row items-center gap-2 text-xl font-medium">
            <AiOutlineRocket className="text-3xl" />
            Startups
          </div>
          <p className="py-6 text-lg">
            Nullam tincidunt adipiscing enim. Praesent egestas neque eu enim.
          </p>
          <a
            href="#"
            className="font-medium underline-offset-4 hover:underline"
          >
            Read more
          </a>
        </div>
        <div className="rounded-lg border border-card_border bg-card_background p-6">
          <div className="flex flex-row items-center gap-2 text-xl font-medium">
            <RiMoneyDollarBoxLine className="text-3xl" />
            Venture capital
          </div>
          <p className="py-6 text-lg">
            Nullam tincidunt adipsicing enim. Praesent egestas neque eu enim.
          </p>
          <a
            href="#"
            className="font-medium underline-offset-4 hover:underline"
          >
            Read more
          </a>
        </div>
        <div className="rounded-lg border border-card_border bg-card_background p-6">
          <div className="flex flex-row items-center gap-2 text-xl font-medium">
            <BsPeople className="text-3xl" />
            Corporate
          </div>
          <p className="py-6 text-lg">
            Nullam tincidunt adipsicing enim. Praesent egestas neque eu enim.
          </p>
          <a
            href="#"
            className="font-medium underline-offset-4 hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Areas;
