import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Bookings from "../Bookings/Bookings";
import CategoryDetailsCard from "./CategoryDetailsCard";

const CategoryDetails = () => {
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

  return (
    <div className=" rounded-lg my-20 ">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 py-20 w-10/12 mx-auto bg-blue-200">
        {resellAllData.map((item) => (
          <CategoryDetailsCard
            item={item}
            key={item._id}
            setResellProduct={setResellProduct}
            handleReport={handleReport}
          />
        ))}
      </div>
      {resellProduct && (
        <Bookings
          resellProduct={resellProduct}
          setResellProduct={setResellProduct}
        />
      )}
    </div>
  );
};

export default CategoryDetails;
