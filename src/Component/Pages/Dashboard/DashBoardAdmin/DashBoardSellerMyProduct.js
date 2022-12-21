import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../../../AuthContext/AuthContext";
import useAdmin from "../../../../CustomHook/UserEmail/UserEmail";
import Loding from "../../../../SharebleInfo/Lodin/Loding";

const DashBoardSellerMyProduct = () => {
  const { user } = useContext(UserContext);

  const role = { role: "seller" };

  const [email] = useAdmin(user?.email);
  // console.log(email);
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

  // console.log(url);

  // console.log(resellMyProduct);

  const handleDelete = (id) => {
    // console.log(id);

    if (window.confirm("are you sure if you delate you can't recover data")) {
      const url = `${process.env.REACT_APP_LOCALHOST}myProductDelete/${id}`;

      fetch(url)
        .then((res) => res.json())
        .then((update) => {
          console.log(update.data);
          refetch();
        });
    }
  };

  const handleAdvertising = (e) => {
    console.log(e);

    axios
      .post(`${process.env.REACT_APP_LOCALHOST}advertisingProduct`, {
        category_name: e.category_name,
        name: e.name,
        capacity: e.capacity,
        color: e.color,
        original_Price: e.original_Price,
        years_of_use: e.years_of_use,
        resale_price: e.resale_price,
        location: e.location,
        seller_name: e.seller_name,
        seller_email: e.seller_email,
        Seller_number: e.Seller_number,
        date: e.date,
        seller_img: e.seller_img,
        picture: e.picture,
      })
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          toast.success("add product successfully done");
          console.log(res);
          refetch();
        } else {
          toast.error("already added advertising section ");
        }
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
              <th>Delate</th>
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
                    <td>
                      <button
                        onClick={() => handleDelete(resellUser?._id)}
                        className="bg-blue-200 py-2 px-5 cursor-pointer hover:bg-blue-300"
                      >
                        Delete
                      </button>
                    </td>
                    <td>{resellUser.date}</td>
                    <td>{resellUser.original_Price}</td>
                    <td>{resellUser.resale_price}</td>

                    <td>
                      {resellUser?.resale_price && !resellUser.paid && (
                        <button className="bg-blue-200 py-2 px-5 cursor-pointer hover:bg-blue-300">
                          unsoald
                        </button>
                      )}
                      {resellUser?.resale_price && resellUser.paid && (
                        <p>soald</p>
                      )}
                    </td>
                    <td>
                      {resellUser?.resale_price && !resellUser.paid && (
                        <button
                          onClick={() => handleAdvertising(resellUser)}
                          className="bg-blue-200 py-2 px-5 cursor-pointer hover:bg-blue-300"
                        >
                          advertising
                        </button>
                      )}
                      {resellUser?.resale_price && resellUser.paid && <></>}
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
