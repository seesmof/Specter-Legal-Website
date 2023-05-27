import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Areas from "./components/Areas";

const Page = () => {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-background text-accent">
      <Header />
      <Hero />
      <Areas />
    </div>
  );
};

export default Page;
