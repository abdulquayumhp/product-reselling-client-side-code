import React from "react";
import useTitle from "../../CustomHook/UseTitle/UseTitle";
import SignInBanner from "./SignInBanner";
import SignInLogin from "./SignInLogin";

const SignIn = () => {
  useTitle("signIn");
  return (
    <div className="flex lg:flex-row flex-col md:w-9/12 mx-auto bg-blue-200 my-20 rounded-l-lg rounded-r-lg">
      <div className="md:w-[700px] w-full  bg-blue-200 rounded-l-lg">
        <SignInLogin />
      </div>
      <div className=" bg-blue-100 rounded-r-lg">
        <SignInBanner />
      </div>
    </div>
  );
};

export default SignIn;
