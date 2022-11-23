import React from "react";
import { Link } from "react-router-dom";

const SignInBanner = () => {
  return (
    <div className="lg:h-[600px] ">
      <img
        className="object-cover h-full -mb-10 "
        src="https://blog-assets.freshworks.com/freshsales-crm/wp-content/uploads/2020/02/26144739/Untitled-3-05.png"
        alt="/"
      />
      <div className="text-center">
        <p className="mb-5">Don't have an account</p>
        <Link
          className=" border-white border-2 hover:bg-blue-400 bg-blue-900 py-3 px-16 md:px-32 rounded-3xl "
          to="/signUp"
        >
          <button className=" text-white">SIGN UP</button>
        </Link>
      </div>
    </div>
  );
};

export default SignInBanner;
