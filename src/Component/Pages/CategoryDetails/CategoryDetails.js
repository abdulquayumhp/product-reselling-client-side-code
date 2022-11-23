import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryDetailsCard from "./CategoryDetailsCard";

const CategoryDetails = () => {
  const resellCategoryDetails = useLoaderData();
  //   console.log(resellCategoryDetails);
  const { items, category, picture, _id } = resellCategoryDetails;
  return (
    <div className=" rounded-lg my-20 ">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 py-20 w-10/12 mx-auto bg-blue-200">
        {items.map((item) => (
          <CategoryDetailsCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
