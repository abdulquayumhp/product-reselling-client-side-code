import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../AuthContext/AuthContext";
import Loding from "../../../../SharebleInfo/Lodin/Loding";

const DashBoardAddProduct = () => {
  // usetitle

  const [signUpError, setSignUpError] = useState("");
  const [firebaseError, setFirebaseError] = useState("");
  // handle loading
  // state

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //loding

  // context
  const { createUser, updateUser, loading, setLoading } =
    useContext(UserContext);
  // console.log(createUser);

  const navigate = useNavigate();

  const categoryUrl = `${process.env.REACT_APP_LOCALHOST}ResellingFurniture`;
  // console.log(url);

  const { data: homeCategories, isLoading } = useQuery({
    queryKey: ["ResellingFurniture"],
    queryFn: async () => {
      const res = await fetch(categoryUrl);
      const data = await res.json();
      return data;
    },
  });
  // console.log(homeCategories);

  // useForm code

  // image hosting api
  const imageHostKey = process.env.REACT_APP_imageBb_key;
  // console.log(imageHostKey);

  // handleSubmition
  const handleAddProduct = (data) => {
    data.preventDefault();
    const image = data.target.image.files[0];
    // console.log(image);
    const input = data.target.Categories.category_name.value;
    console.log(input);

    // setSignUpError("");
    // setLoading(true);

    // // image hosting

    // const formData = new FormData();
    // formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imgData) => {
    //     const image = imgData.data.url;
    //     // console.log(image);
    //     // console.log(data.name);

    //     const addProduct = {
    //       productName: data.target.productName.value,
    //       capacity: data.target.capacity.value,
    //       input: data.target.category_name.value,
    //       color: data.target.color.value,
    //       original_price: data.target.original_price.value,
    //       years_of_use: data.target.years.value,
    //       original_price: data.target.original_price.value,
    //       location: data.target.location.value,
    //       seller_name: data.target.sellerName.value,
    //       date: data.target.date.value,
    //       image,
    //     };
    //     console.log(addProduct);
    //   });
  };
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div className="md:w-6/12 mx-auto pt-5">
      <form
        onSubmit={handleAddProduct}
        className="py-5 px-10 lg:px-0 lg:mx-5 container  "
      >
        <h1 className="text-3xl font-bold text-blue-900">Add Product</h1>

        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="color" className="block text-blue-900 text-lg">
            Select Category
          </label>
          <select
            name="Categories?.category_name"
            className="space-y-1 text-sm mb-3 lg:w-4/5  py-2 px-2 outline-none "
          >
            {homeCategories.map((Categories, i) => (
              <option value={Categories?.category_name} key={i}>
                {Categories?.category_name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="color" className="block text-blue-900 text-lg">
            Product name
          </label>
          <input
            type="text"
            name="productName"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-2  bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>
        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="color" className="block text-blue-900 text-lg">
            capacity
          </label>
          <input
            type="text"
            name="capacity"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-2  bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>

        <div className="flex space-x-4 items-center">
          <label
            htmlFor="image"
            className="p-3 text-center  cursor-pointer  font-bold border   bg-blue-100 text-black rounded-3xl placeholder-black border-blue-400"
          >
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              hidden
            />
            <h1 className="md:w-56 w-26">Upload Image</h1>
          </label>
        </div>
        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="color" className="block text-blue-900 text-lg">
            color
          </label>
          <input
            type="text"
            name="color"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-2  bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>
        <div className="space-y-1 text-sm mb-3">
          <label
            htmlFor="original_price"
            className="block text-blue-900 text-lg"
          >
            original_price
          </label>
          <input
            type="number"
            name="original_price"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-2  bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>
        <div className="space-y-1 text-sm mb-3">
          <label
            htmlFor="
            resale_price"
            className="block text-blue-900 text-lg"
          >
            resale_price
          </label>
          <input
            type="number"
            name="
            resale_price"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-2  bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>
        <div className="space-y-1 text-sm mb-3">
          <label
            htmlFor="
            
years_of_use"
            className="block text-blue-900 text-lg"
          >
            years_of_use
          </label>
          <input
            type="number"
            name="years"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-2  bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>
        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="location" className="block text-blue-900 text-lg">
            location
          </label>
          <input
            type="text"
            name="location"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-2  bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>

        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="role" className="block text-blue-900 text-lg">
            seller_name
          </label>
          <input
            type="text"
            name="sellerName"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-2  bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>
        <div className="space-y-1 text-sm mb-3">
          <label htmlFor="Date" className="block text-blue-900 text-lg">
            Date
          </label>
          <input
            type="text"
            defaultValue={date}
            disabled
            name="date"
            className="lg:w-4/5 border-blue-400 border  w-full px-4 py-2  bg-blue-100 text-black outline-none placeholder-black"
          />
        </div>
        <div className="space-y-1 text-sm mt-10 ">
          {loading ? (
            <Loding />
          ) : (
            <input
              type="submit"
              value="Add Product"
              className="lg:w-4/5 border-white border  w-full px-4 py-2  hover:bg-blue-200 bg-blue-300  outline-none placeholder-white text-black"
            />
          )}
        </div>

        <div>{signUpError && <p>{signUpError}</p>}</div>
        <p className="text-red-500">
          {firebaseError && firebaseError + "please try again"}
        </p>
      </form>
    </div>
  );
};

export default DashBoardAddProduct;
