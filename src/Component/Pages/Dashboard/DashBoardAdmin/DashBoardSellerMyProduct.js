import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserContext } from "../../../../AuthContext/AuthContext";
import useAdmin from "../../../../CustomHook/UserEmail/UserEmail";
import Loding from "../../../../SharebleInfo/Lodin/Loding";

const DashBoardSellerMyProduct = () => {
  const { user } = useContext(UserContext);

  const role = { role: "seller" };

  const [email] = useAdmin(user?.email);
  console.log(email);
  const url = `${process.env.REACT_APP_LOCALHOST}MyProduct?email=${user?.email}`;
  // console.log(url);

  const {
    data: resellMyProduct,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ResellMyProduct", email?.email],
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

  console.log(resellMyProduct);

  const handleDelete = (id) => {
    // console.log(id);
    const url = `${process.env.REACT_APP_LOCALHOST}myProductDelete/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((update) => {
        console.log(update.data);
        refetch();
      });
  };

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div>
      <div className="overflow-x-auto md:w-10/12 mx-auto my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Img</th>
              <th>Name</th>
              <th>Category</th>
              <th>Date</th>
              <th>Original Price</th>
              <th>Resale Price</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {resellMyProduct &&
              resellMyProduct.map((resellUser, i) => (
                <>
                  <tr>
                    <th>{i + 1}</th>
                    <th>
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={resellUser.picture}
                      />
                    </th>
                    <td>{resellUser.name}</td>
                    <td>{resellUser.category_name}</td>
                    <td>{resellUser.date}</td>
                    <td>{resellUser.original_Price}</td>
                    <td>{resellUser.resale_price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(resellUser?._id)}
                        className="bg-blue-200 py-2 px-5 cursor-pointer hover:bg-blue-300"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button className="bg-blue-200 py-2 px-5 cursor-pointer hover:bg-blue-300">
                        pay
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

export default DashBoardSellerMyProduct;
