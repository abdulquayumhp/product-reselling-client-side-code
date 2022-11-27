import React from "react";
import { FaCheck } from "react-icons/fa";
import useAdmin from "../../../CustomHook/UserEmail/UserEmail";

const CategoryDetailsCard = ({ item, setResellProduct, handleReport }) => {
  // const { user } = useContext(UserContext);

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
    seller_img,
    _id,
    product_id,
    date,
    seller_name,
    seller_email,
  } = item;

  const [email] = useAdmin(seller_email);
  console.log(email);
  return (
    <div>
      <div className="relative bg-white h-[650px]">
        <img className="w-full h-96 object-cover mx-auto" src={picture} />

        <div className=" py-10 text-xl px-5 flex items-center justify-between ">
          <div className="absolute top-4 py-2 px-5 bg-yellow-200">
            <h1>$ {resale_price}</h1>
          </div>
          <div className=" absolute ml-2 top-3 right-5">
            <img
              className="w-16 h-16 rounded-full ring ring-white ring-offset-base-200 ring-offset-2 object-cover mt-2"
              src={seller_img}
            />
          </div>
          <div className="block text-lg">
            <p className="font-bold">{name}</p>
            <p className="py-1 text-sm">OriginalPrice ${original_Price}</p>
            <p className="font-medium text-sm">Color {color}</p>
            <p className="text-xs">date {date}</p>
          </div>
          <div className="block text-lg text-right">
            <p className="text-sm">Use {years_of_use} year</p>
            <p className="py-1">{location}</p>
            <p className=" text-sm">Capacity {capacity}</p>

            <p className=" text-sm ">
              Seller name
              <span className="text-xl font-medium "> {seller_name}</span>
            </p>
            <p className="absolute top-24 right-4">
              {email?.verifyUser ? (
                <p className="bg-blue-100   py-2  pl-3 pr-3 ml-2 flex items-center text-sm ">
                  verifyUser <FaCheck className="text-green-400 ml-2" />
                </p>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8">
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
            <label
              onClick={() => handleReport(item)}
              className="bg-blue-100 hover:bg-blue-300 py-2 px-4 cursor-pointer text-sm"
            >
              report
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailsCard;
