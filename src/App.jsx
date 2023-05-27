import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Page = () => {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-background text-accent">
      <Header />
      <Hero />
    </div>
  );
};

export default Page;
