import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";
import useToken from "../../CustomHook/UseToken/UseToken";
import Loding from "../Lodin/Loding";

const SignInLogin = () => {
  // usetitle
  const [firebaseError, setFirebaseError] = useState("");

  // userContext
  const { userLogin, setLoading, loading, googleSignUp } =
    useContext(UserContext);
  //   console.log(userLogin);

  //useToken
  const [loginUserEmail, setLoginUserEmail] = useState("");
  // console.log(loginUserEmail);
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignIn = (data) => {
    setFirebaseError("");

    setLoading(true);
    userLogin(data.email, data.password)
      .then((update) => {
        const user = update.user;
        console.log(user);
        setLoginUserEmail(data.email);
        setLoading(false);
        toast.success("successfully login");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setFirebaseError(err.message);
      });
  };
  const handleGoogleLogin = () => {
    setLoading(true);

    // console.log("hello");
    googleSignUp()
      .then((update) => {
        const user = update.user;
        console.log("google", user);
        setLoginUserEmail(user.email);
        setLoading(false);
        toast.success("successfully Google login");
        const url = `${process.env.REACT_APP_LOCALHOST}allUser`;
        // console.log(url);

        const item = {
          name: user.displayName,
          email: user.email,
          role: "Buyer",
          image: user.photoURL,
        };
        // console.log(item);

        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(item),
        });

        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setFirebaseError(err.message);
      });
  };

  //   return start
  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="py-14 px-10 lg:px-0 lg:mx-5 container"
      >
        <div className="md:pl-20">
          <img
            className="md:h-16  object-cover"
            src="https://assets.vakilsearch.com/live-gif/zolvitWhiteTransparent.gif"
            alt="/"
          />
        </div>
        <h1 className="text-3xl font-bold text-blue-900">SignUp</h1>
        <p className="mb-10 pt-5">
          See your growth and get consulting support!
        </p>

        <div
          onClick={handleGoogleLogin}
          className="flex items-center justify-center lg:w-4/5 border-blue-400 border  w-full px-4 py-3 rounded-3xl hover:bg-blue-400 bg-blue-100 text-black "
        >
          <FaGoogle className="mr-5 text-blue-900" />
          <p className="cursor-default text-blue-900">Sign in with Google</p>
        </div>

        <div className="divider w-10/12 pr-5 ">OR</div>

        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="password" className="block text-blue-900 text-lg">
            Enter Your Email
          </label>
          <input
            type="email"
            name="email"
            {...register("email", { required: "name is required" })}
            placeholder="abdul@gmail.com"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-3 rounded-3xl bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>

        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="password" className="block text-blue-900 text-lg">
            Password
          </label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "password is required",
            })}
            placeholder="*******"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-3 rounded-3xl bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>
        <div className="space-y-1 text-sm ">
          <label htmlFor="password" className="block text-blue-900 text-lg">
            Submit Your info
          </label>

          {loading ? (
            <Loding />
          ) : (
            <input
              type="submit"
              value="SignIn"
              className="lg:w-4/5 border-white border  w-full px-4 py-3 rounded-3xl hover:bg-blue-200 bg-blue-300  outline-none placeholder-white text-black"
            />
          )}
        </div>
        <p className="text-red-500">
          {firebaseError && firebaseError + "please try again"}
        </p>
      </form>
    </>
  );
};

export default SignInLogin;
