import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../AuthContext/AuthContext";
import Loding from "../../../../SharebleInfo/Lodin/Loding";

const DashBoardMyBooking = () => {
  const { user, setLoading, loading } = useContext(UserContext);
  //   console.log(user?.email);
  const url = `${process.env.REACT_APP_LOCALHOST}MyBookings?email=${user?.email}`;
  // console.log(url);

  const {
    data: resellMyBooking,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ResellMyBooking", user?.email],
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

  console.log(resellMyBooking);
  const handleDelete = (id) => {
    // console.log(id);
    const url = `${process.env.REACT_APP_LOCALHOST}myBookingDelete/${id}`;

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

  console.log(resellMyBooking);

  return (
    <div>
      <div className="overflow-x-auto md:w-10/12 mx-auto my-10">
        {resellMyBooking?.length ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Img</th>
                <th>Name</th>
                <th>location</th>
                <th>original Price</th>
                <th>resale price</th>
                <th>years of use</th>
                <th>Capacity</th>
                <th>color</th>
                <th>Delete</th>
                <th>pay</th>
              </tr>
            </thead>
            <tbody>
              {resellMyBooking &&
                resellMyBooking.map((resellUser, i) => (
                  <>
                    <tr>
                      <th>{i + 1}</th>
                      <th>
                        <img
                          className="w-12 h-12 rounded-full object-cover"
                          src={resellUser.picture}
                        />
                      </th>
                      <td>{resellUser?.name}</td>
                      <td>{resellUser?.location}</td>
                      <td>{resellUser?.original_Price}</td>
                      <td>{resellUser?.resale_price}</td>
                      <td>{resellUser?.years_of_use}</td>
                      <td>{resellUser?.capacity}</td>
                      <td>{resellUser?.color}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(resellUser?._id)}
                          className="bg-blue-200 py-2 px-5 cursor-pointer hover:bg-blue-300"
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        {resellUser?.resale_price && !resellUser.paid && (
                          <Link to={`/dashboard/payment/${resellUser._id}`}>
                            <button className="bg-blue-200 py-2 px-5 cursor-pointer hover:bg-blue-300">
                              pay
                            </button>
                          </Link>
                        )}
                        {resellUser?.resale_price && resellUser.paid && (
                          <p>Paid</p>
                        )}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        ) : (
          <div className="mx-auto flex justify-center items-center h-96 ">
            <h1 className="text-5xl font-bold">Did't data Add Yet </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardMyBooking;
