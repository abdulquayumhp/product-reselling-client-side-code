import React from "react";
import Advertising from "./HeroAdvertising/Advertising";
import HeroSection from "./HeroSection/HeroSection";
import HomeCategory from "./HomeCategory/HomeCategory";

const HomeAll = () => {
  return (
    <div className="w-10/12 mx-auto">
      <HeroSection />
      <Advertising />
      <HomeCategory />
    </div>
  );
};

export default HomeAll;
