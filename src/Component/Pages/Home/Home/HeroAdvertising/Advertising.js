import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Loding from "../../../../../SharebleInfo/Lodin/Loding";
import Bookings from "../../../Bookings/Bookings";
import CategoryDetailsCard from "../../../CategoryDetails/CategoryDetailsCard";

const Advertising = () => {
  const resellAllData = useLoaderData();

  const [resellProduct, setResellProduct] = useState(null);
  const [resellReport, setResellReport] = useState(null);
  // console.log(resellReport);

  const [error, setError] = useState("");

  const handleReport = (data) => {
    const report = {
      data: data.capacity,
      color: data.color,
      location: data.location,
      name: data.name,
      original_Price: data.original_Price,
      picture: data.picture,
      resale_price: data.resale_price,
      years_of_use: data.years_of_use,
      category: data.category,
      product_id: data.product_id,
      role: data.role,
    };
    // console.log(report);

    const url = `${process.env.REACT_APP_LOCALHOST}ReportData`;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then((update) => {
        console.log(update);
        toast.success("report successful");
      })
      .catch((err) => {
        console.log(err.message);
        toast.success("err.message");
      });
  };

  const url = `${process.env.REACT_APP_LOCALHOST}AllAdvertising`;
  // console.log(url);

  const { data: advertising, isLoading } = useQuery({
    queryKey: ["AllAdvertising"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(advertising);

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className=" rounded-lg my-20 ">
      {advertising.length ? (
        <div className="bg-blue-200 rounded-lg mb-20">
          <h1 className="text-5xl w-11/12 mx-auto pt-5 font-bold">
            Advertising Section
          </h1>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10  w-11/12 mx-auto">
            {advertising.map((add) => (
              <CategoryDetailsCard
                key={add._id}
                item={add}
                setResellProduct={setResellProduct}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {resellProduct && (
        <Bookings
          resellProduct={resellProduct}
          setResellProduct={setResellProduct}
        />
      )}
    </div>
  );
};

export default Advertising;
