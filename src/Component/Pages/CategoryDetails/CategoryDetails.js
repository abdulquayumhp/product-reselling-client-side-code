import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Bookings from "../Bookings/Bookings";
import CategoryDetailsCard from "./CategoryDetailsCard";

const CategoryDetails = () => {
  const resellAllData = useLoaderData();

  const [resellProduct, setResellProduct] = useState(null);
  // console.log(resellCategoryDetails);

  return (
    <div className=" rounded-lg my-20 ">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 py-20 w-10/12 mx-auto bg-blue-200">
        {resellAllData.map((item) => (
          <CategoryDetailsCard
            item={item}
            key={item._id}
            setResellProduct={setResellProduct}
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
