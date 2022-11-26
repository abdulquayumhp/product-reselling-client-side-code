import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserContext } from "../../../../AuthContext/AuthContext";
import useAdmin from "../../../../CustomHook/UserEmail/UserEmail";

const DashboardAllSeller = () => {
  const { user } = useContext(UserContext);

  const role = { role: "seller" };

  const [email] = useAdmin(user?.email);
  console.log(email);
  const url = `${process.env.REACT_APP_LOCALHOST}allSeller/${role.role}`;
  // console.log(url);

  const { data: resellAllSeller, isLoading } = useQuery({
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
