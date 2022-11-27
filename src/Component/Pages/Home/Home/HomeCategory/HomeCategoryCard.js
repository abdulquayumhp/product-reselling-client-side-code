import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeCategoryCard = ({ homeCategory }) => {
  const { category, picture, _id, category_name } = homeCategory;
  // console.log(picture);
  return (
    <div>
      <div className="">
        <Link to={`home/category/${_id}`}>
          <img className="w-full h-96 object-cover mx-auto" src={picture} />
        </Link>
        <div className="bg-white py-10 text-xl px-5 flex items-center justify-between ">
          <p>{category_name}</p>
          <Link
            to={`home/category/${category_name}`}
            className="hover:bg-blue-200 py-2 px-4 cursor-pointer"
          >
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategoryCard;
