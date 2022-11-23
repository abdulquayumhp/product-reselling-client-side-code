import React from "react";
import { Link } from "react-router-dom";

const SignUpBanner = () => {
  return (
    <div className="pt-36 text-center">
      <div className="md:pl-20">
        <img
          className="md:h-16  object-cover"
          src="https://assets.vakilsearch.com/live-gif/zolvitWhiteTransparent.gif"
          alt="/"
        />
      </div>
      <h1 className="text-5xl font-bold text-blue-900">Welcome Back!</h1>
      <p className="py-6 text-lg pt-10 px-10 pb-10">
        Uniquely deliver long-term high-impact vortals through accurate
        scenarios.
      </p>
      <p className="mb-5">Already Have an Account</p>
      <Link
        className=" border-white border-2 hover:bg-blue-400 bg-blue-900 py-3 px-16 md:px-32 rounded-3xl "
        to="/signIn"
      >
        <button className=" text-white">SIGN IN</button>
      </Link>
    </div>
  );
};

export default SignUpBanner;
