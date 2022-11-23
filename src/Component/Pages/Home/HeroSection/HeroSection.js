import React from "react";
import useTitle from "../../../../CustomHook/UseTitle/UseTitle";

import "./Homesection.css";

const HeroSection = () => {
  useTitle("Home");

  return (
    <div className=" my-10 home-container rounded-lg flex justify-center md:flex-row flex-col">
      <div className="w-full md:w-[500px] lg:w-[800px] text-white pl-10 pt-36 lg:pl-36 md:pb-0 pb-20">
        <h1 className="text-3xl md:text-6xl">OUTDOOR</h1>
        <p className="pt-5 text-4xl md:text-8xl font-medium">SUPER SALE</p>
        <p className="pt-5 text-xl">Every item are you need reuseable item</p>
        <div className="flex pt-5">
          <div className="w-px h-16 bg-white mr-5"></div>
          <div>
            <p className=" text-lg">SALE UP TO</p>
            <p className=" text-lg text-yellow-500 font-bold">30% OFF</p>
          </div>
        </div>
        <button className=" bg-white hover:bg-slate-300 text-black mt-10 px-12 py-2 font-bold">
          Shop Now
        </button>
      </div>
      <div className="flex-1">
        <img
          className=" h-[800px] object-cover rounded-r-lg"
          src="https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
      </div>
    </div>
  );
};

export default HeroSection;

// btn btn-primary bg-gradient-to-r from-primary to-secondary text-white
