import React from "react";
import ExtraSectionHome from "./ExtraSectionHome/ExtraSectionHome";
import Advertising from "./HeroAdvertising/Advertising";
import HeroSection from "./HeroSection/HeroSection";
import HomeCategory from "./HomeCategory/HomeCategory";
import ReactGallary from "./ReactGallary/ReactGallary";

const HomeAll = () => {
  return (
    <div className="w-10/12 mx-auto">
      <HeroSection />
      <Advertising />
      <HomeCategory />
      <ReactGallary />
      <ExtraSectionHome />
    </div>
  );
};

export default HomeAll;
