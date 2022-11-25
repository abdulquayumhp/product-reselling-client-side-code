import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserContext } from "../../../../AuthContext/AuthContext";

const DashBoardMyBooking = () => {
  const { user, setLoading, loading } = useContext(UserContext);
  //   console.log(user?.email);
  const url = `${process.env.REACT_APP_LOCALHOST}MyBookings?email=${user?.email}`;
  // console.log(url);

  const { data: resellMyBooking, isLoading } = useQuery({
    queryKey: ["ResellMyBooking", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    // return <Loding />;
  }

  // console.log(resellMyBooking);

  return (
    <div>
      <div className="overflow-x-auto md:w-10/12 mx-auto my-10">
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
            {resellMyBooking ? (
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
                      <button>Delete</button>
                    </td>
                    <td>
                      <button>pay</button>
                    </td>
                  </tr>
                </>
              ))
            ) : (
              <div className="bg-blue-500">
                <h1>didn't add any data yet</h1>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoardMyBooking;
