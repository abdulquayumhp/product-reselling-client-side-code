import React from "react";
import useTitle from "../../CustomHook/UseTitle/UseTitle";
import SignUpBanner from "./SignUpBanner";
import SignUpLogin from "./SignUpLogin";

const SignUp = () => {
  useTitle("signUp");

  return (
    <div className="flex lg:flex-row flex-col md:w-9/12 mx-auto bg-blue-200 my-20 rounded-l-lg rounded-r-lg">
      <div className="h-[740px] w-full lg:w-[500px] bg-blue-200 rounded-l-lg">
        <SignUpBanner />
      </div>
      <div className="flex-1 bg-blue-100 rounded-r-lg">
        <SignUpLogin />
      </div>
    </div>
  );
};

export default SignUp;
