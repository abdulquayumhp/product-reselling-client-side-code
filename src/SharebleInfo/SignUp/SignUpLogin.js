import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";
import Loding from "../Lodin/Loding";
import "./SignUpLogin";

//start

const SignUpLogin = () => {
  // usetitle

  const [signUpError, setSignUpError] = useState("");
  const [firebaseError, setFirebaseError] = useState("");
  // handle loading
  // state

  //loding

  // context
  const { createUser, updateUser, loading, setLoading } =
    useContext(UserContext);
  // console.log(createUser);

  const navigate = useNavigate();

  // useForm code
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // image hosting api
  const imageHostKey = process.env.REACT_APP_imageBb_key;
  // console.log(imageHostKey);

  // handleSubmition
  const handleSignUp = (data) => {
    // console.log(data);
    setSignUpError("");
    setLoading(true);

    // image hosting
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const image = imgData.data.url;
        // console.log(image);
        // console.log(data.name);

        // data send in firebase
        createUser(data.email, data.password)
          .then((update) => {
            const user = update.user;
            handleUpdateUser(data.name, image);
            // console.log(user);

            const url = `${process.env.REACT_APP_LOCALHOST}allUser`;
            // console.log(url);

            const allUser = {
              name: data.name,
              email: data.email,
              password: data.password,
              role: data.role,
              image,
            };

            fetch(url, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(allUser),
            })
              .then((update) => {
                console.log(update);
              })
              .catch((err) => console.log(err));
          })
          // create user catch
          .catch((err) => {
            console.log(err);
            setFirebaseError(err.message);
          });

        const handleUpdateUser = (name, image) => {
          console.log(name, image);
          const userProfile = {
            displayName: name,
            photoURL: image,
          };
          updateUser(userProfile)
            .then(() => {
              toast.success("successfully login");
              navigate("/signIn");
              setLoading(false);
            })
            .catch((err) => {
              console.error(err);
            });
        };
      });
  };

  // handleUser

  //return start
  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="py-14 px-10 lg:px-0 lg:mx-5 container"
      >
        <h1 className="text-3xl font-bold text-blue-900">SignUp</h1>
        <p className="mb-10 pt-5">
          See your growth and get consulting support!
        </p>

        <div className="divider w-10/12 pr-5 ">OR</div>

        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="password" className="block text-blue-900 text-lg">
            Enter Your Name
          </label>
          <input
            type="text"
            name="password"
            {...register("name", { required: "name is required" })}
            placeholder="name"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-3 rounded-3xl bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>
        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="password" className="block text-blue-900 text-lg">
            Enter Your Email
          </label>
          <input
            type="email"
            name="email"
            {...register("email", { required: "email is required" })}
            placeholder="email"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-3 rounded-3xl bg-blue-100 text-black outline-none placeholder-black"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="password" className="block text-blue-900 text-lg">
            Enter Your Email
          </label>
          <select
            {...register("role")}
            className="space-y-1 text-sm mb-3 lg:w-4/5 rounded-3xl py-2 px-2 outline-none "
          >
            <option value="Buyer">Buyer</option>
            <option value="seller">seller</option>
          </select>
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="flex space-x-4 items-center">
          <label
            htmlFor="image"
            className="p-3 text-center  cursor-pointer  font-bold border  hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900 hover:border-white hover:text-white bg-blue-100 text-black rounded-3xl placeholder-black border-blue-400"
          >
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              {...register("image", { required: "photo is required" })}
              hidden
            />
            <h1 className="md:w-56 w-26">Upload Image</h1>
            {errors.image && <p>{errors.image.message}</p>}
          </label>
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
              minLength: {
                value: 6,
                message: "password must have long",
              },
            })}
            placeholder="pass"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-3 rounded-3xl bg-blue-100 text-black outline-none placeholder-black"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="space-y-1 text-sm mt-10 ">
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

        <div>{signUpError && <p>{signUpError}</p>}</div>
        <p className="text-red-500">
          {firebaseError && firebaseError + "please try again"}
        </p>
      </form>
    </>
  );
};

export default SignUpLogin;
