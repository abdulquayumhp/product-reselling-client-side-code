import { useQuery } from "@tanstack/react-query";
import React from "react";

const DashboardAllUser = () => {
  const url = `${process.env.REACT_APP_LOCALHOST}ResellAllUser`;
  // console.log(url);

  const { data: resellAllUser, isLoading } = useQuery({
    queryKey: ["ResellAllUser"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  console.log(resellAllUser);

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
            {resellAllUser &&
              resellAllUser.map((resellUser, i) => (
                <>
                  <tr>
                    <th>{i + 1}</th>
                    <th>
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={resellUser.image}
                      />
                    </th>
                    <td>{resellUser.data.name}</td>
                    <td>{resellUser.data.email}</td>
                    <td>{resellUser.data.role}</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllUser;
