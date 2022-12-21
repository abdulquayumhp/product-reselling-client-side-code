import React from "react";
import useTitle from "../../../CustomHook/UseTitle/UseTitle";

const Service = () => {
  useTitle("service");
  return (
    <div className="w-11/12 lg:w-10/12 bg-blue-50 mx-auto rounded-lg my-10 py-20  ">
      <h1 className="text-center text-lg md:text-3xl">Coming soon...</h1>
    </div>
  );
};

export default Service;
