import React, { useContext } from "react";
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
          <h1 className="text-5xl font-bold ">Welcome {email?.displayName}</h1>
          <br />
          <p className="text-3xl font-medium text-blue-400">
            To become a our {email.role}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardForAll;
