import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import ChakoutRoute from "./ChakoutRoute";

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_pk);
console.log(stripePromise);

const Payment = () => {
  const data = useLoaderData();

  const {
    capacity,
    color,
    location,
    name,
    original_Price,
    picture,
    resale_price,
    years_of_use,
    _id,
  } = data;
  //   console.log(data);
  return (
    <div className="lg:w-9/12 mx-auto border border-black mt-10 h-[600px] rounded-lg ">
      <div className="flex ">
        <div className="w-full lg:w-[600px] ">
          <img
            className="h-full lg:h-[598px] rounded-l-lg object-cover"
            src={picture}
            alt="/"
          />
        </div>
        <div className="pt-16 pl-12">
          <h1 className="text-xl font-medium"> Name : {name}</h1>
          <p className="text-xl pt-2"> color : {color} </p>
          <p className="text-xl pt-2"> Location : {location} </p>
          <p className="text-xl pt-2"> Capacity : {capacity} </p>
          <p className="text-xl pt-2"> Original Price : {original_Price} </p>
          <p className="text-xl pt-2"> Resale Price : {resale_price} </p>
          <p className="text-xl pt-2"> Years of Use : {years_of_use} </p>
          <div className="w-96 my-12">
            <Elements stripe={stripePromise}>
              <ChakoutRoute booking={data} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
