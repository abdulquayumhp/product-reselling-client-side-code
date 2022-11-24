import React from "react";
import { Link } from "react-router-dom";

const CategoryDetailsCard = ({ item, setResellProduct }) => {
  // console.log(item);
  const {
    capacity,
    color,
    location,
    name,
    original_Price,
    picture,
    resale_price,
    years_of_use,
    category,
    _id,
    product_id,
  } = item;
  // console.log(original_Price);
  return (
    <div>
      <div className="relative bg-white">
        <img className="w-full h-96 object-cover mx-auto" src={picture} />

        <div className=" py-10 text-xl px-5 flex items-center justify-between ">
          <div className="absolute top-4 py-2 px-5 bg-yellow-200">
            <h1>$ {resale_price}</h1>
          </div>
          <div className="block text-lg">
            <p className="font-bold">{name}</p>
            <p className="py-1 text-sm">OriginalPrice ${original_Price}</p>
            <p className="font-medium text-sm">Color {color}</p>
          </div>
          <div className="block text-lg text-right">
            <p className="text-sm">Use {years_of_use} year</p>
            <p className="py-1">{location}</p>
            <p className=" text-sm">Capacity {capacity}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="pl-10 pb-5">
            <label
              onClick={() => setResellProduct(item)}
              htmlFor="my-modal-3"
              className=" bg-blue-100 hover:bg-blue-300 py-2 px-4 cursor-pointer text-sm"
            >
              Booking
            </label>
            {/* <label className="btn">open modal</label> */}
          </div>
          <div className="pr-10 pb-5">
            <Link className="bg-blue-100 hover:bg-blue-300 py-2 px-4 cursor-pointer text-sm">
              report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailsCard;
