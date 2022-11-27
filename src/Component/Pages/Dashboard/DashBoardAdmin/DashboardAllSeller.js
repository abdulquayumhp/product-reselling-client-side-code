import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { UserContext } from "../../../../AuthContext/AuthContext";
import useAdmin from "../../../../CustomHook/UserEmail/UserEmail";

import axios from "axios";

const DashboardAllSeller = () => {
  const { user } = useContext(UserContext);

  const role = { role: "seller" };

  const [email] = useAdmin(user?.email);
  console.log(email);
  const url = `${process.env.REACT_APP_LOCALHOST}allSeller/${role.role}`;
  // console.log(url);

  const {
    data: resellAllSeller,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ResellAllSeller", email?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const verificationUser = (id) => {
    const verifyUser = "verifyUser";

    axios
      .put(`${process.env.REACT_APP_LOCALHOST}verifyUser/${id}`, {
        verifyUser,
      })
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          toast.success("add product successfully done");
          console.log(res);
          refetch();
        }
      });

    // console.log(resellAllUser);
  };

  return (
    <div>
      <div className="overflow-x-auto md:w-10/12 mx-auto my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Img</th>
              <th>Name</th>
              <th>Email</th>
              <th>verify</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {resellAllSeller &&
              resellAllSeller.map((resellUser, i) => (
                <>
                  <tr>
                    <th>{i + 1}</th>
                    <th>
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={resellUser.image}
                      />
                    </th>
                    <td>{resellUser.name}</td>
                    <td>{resellUser.email}</td>
                    <td>
                      {resellUser.verifyUser ? (
                        <button className="bg-blue-200 py-1 px-4">
                          verified
                        </button>
                      ) : (
                        <button
                          onClick={() => verificationUser(resellUser._id)}
                          className="bg-blue-200 py-1 px-4"
                        >
                          verify
                        </button>
                      )}
                    </td>
                    <td>{resellUser.role}</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllSeller;
