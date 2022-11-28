import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { UserContext } from "../../../../AuthContext/AuthContext";
import useAdmin from "../../../../CustomHook/UserEmail/UserEmail";
import Loding from "../../../../SharebleInfo/Lodin/Loding";

const DashboardAllUser = () => {
  const url = `${process.env.REACT_APP_LOCALHOST}ResellAllUser`;
  // console.log(url);

  const { user } = useContext(UserContext);

  const [email] = useAdmin(user?.email);

  const {
    data: resellAllUser,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ResellAllUser"],
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

  const handleDelete = (id) => {
    // console.log(id);
    const url = `${process.env.REACT_APP_LOCALHOST}allUserDelete/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((update) => {
        console.log(update.data);
        refetch();
        toast.success("successfully user Delete");
      });
  };

  if (isLoading) {
    return <Loding />;
  }
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
              <th>Delete</th>
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
                    <td>{resellUser.name}</td>
                    <td>{resellUser.email}</td>
                    <td>{resellUser.role}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(resellUser?._id)}
                        className="bg-blue-200 py-2 px-5 cursor-pointer hover:bg-blue-300"
                      >
                        Delete
                      </button>
                    </td>
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
