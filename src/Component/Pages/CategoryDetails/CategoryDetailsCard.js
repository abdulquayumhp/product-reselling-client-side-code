import React from "react";
import { Link } from "react-router-dom";

const CategoryDetailsCard = ({ item }) => {
  console.log(item);
  const {
    capacity,
    color,
    location,
    name,
    originalPrice,
    picture,
    resaleprice,
    yearsofuse,
    category,
    _id,
  } = item;
  console.log(originalPrice);
  return (
    <div className="relative bg-white">
      <img className="w-full h-96 object-cover mx-auto" src={picture} />

      <div className=" py-10 text-xl px-5 flex items-center justify-between ">
        <div className="absolute top-4 py-2 px-5 bg-yellow-200">
          <h1>$ {resaleprice}</h1>
        </div>
        <div className="block text-lg">
          <p className="font-bold">{name}</p>
          <p className="py-1 text-sm">OriginalPrice ${originalPrice}</p>
          <p className="font-medium text-sm">Color {color}</p>
        </div>
        <div className="block text-lg text-right">
          <p className="text-sm">Use {yearsofuse} year</p>
          <p className="py-1">{location}</p>
          <p className=" text-sm">Capacity {capacity}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="pl-10 pb-5">
          <Link
            to={``}
            className="hover:bg-blue-200 py-2 px-4 cursor-pointer text-sm"
          >
            Booking
          </Link>
        </div>
        <div className="pr-10 pb-5">
          <Link
            to={``}
            className="hover:bg-blue-200 py-2 px-4 cursor-pointer text-sm"
          >
            report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailsCard;
