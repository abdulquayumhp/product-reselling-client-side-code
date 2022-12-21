import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../AuthContext/AuthContext";
import useAdmin from "../../../../CustomHook/UserEmail/UserEmail";

const DashboardForAll = () => {
  const { user } = useContext(UserContext);

  const [email] = useAdmin(user?.email);
  console.log(email);

  return (
    <>
      <div className="text-center  h-96  flex justify-center items-center">
        <div className="">
          <Link to="/">
            <div className="">
              <img
                className=" md:h-36 mx-auto object-cover mb-5"
                src="https://assets.vakilsearch.com/live-gif/zolvitWhiteTransparent.gif"
                alt="/"
              />
            </div>
          </Link>
          <h1 className="text-2xl md:text-8xl font-bold ">
            Welcome {email?.displayName}
          </h1>
          <br />
          <p className="text-2xl md:text-5xl font-medium text-blue-400">
            To become a our {email.role}
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardForAll;
