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
    user,
  } = data;
  console.log(data);

  const handlePayment = (e) => {
    e.preventDefault();
    const form = e.target;
    const paymentPerson = form.name.value;
    const number = form.number.value;
    const address = form.address.value;
    const postCode = form.postCode.value;
    const currency = form.currency.value;
    // console.log(paymentPerson, number, address, postCode, currency);
    const payment = {
      service: _id,
      number,
      address,
      postCode,
      currency,
      email: user,
      paymentPerson,
    };
    console.log(payment);
    fetch(`${process.env.REACT_APP_LOCALHOST}payment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        console.log(data);
      });
  };

  return (
    <div className="lg:w-9/12 mx-auto border border-black mt-10 h-[600px] rounded-lg ">
      <div className="flex lg:flex-row  flex-col-reverse">
        <div className="w-full lg:w-[600px] mx-auto">
          <img
            className="h-full w-full lg:h-[598px] rounded-l-lg object-cover"
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
          <p className="text-xl pt-2 mb-5"> Years of Use : {years_of_use} </p>
          <p className="text-2xl font-bold mb-2">Card Payment</p>
          <div className="w-96 mb-5">
            <Elements stripe={stripePromise}>
              <ChakoutRoute booking={data} />
            </Elements>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold mb-5">BD online payment</p>
        <form onSubmit={handlePayment}>
          <div className="flex">
            <div className="m-2">
              <p>First Name</p>
              <input type="text" name="name" required />
            </div>
            <div className="m-2 ">
              <p>Number</p>
              <input type="number" name="number" required />
            </div>
          </div>
          <div className="flex">
            <div className="m-2">
              <p>Address</p>
              <input type="text" name="address" required />
            </div>
            <div className="m-2 ">
              <p>Post Code</p>
              <input type="text" name="postCode" required />
            </div>
          </div>
          <div>
            <select className="select w-full max-w-xs" name="currency">
              <option value="BDT" selected>
                BDT
              </option>
              <option>USD</option>
            </select>
          </div>
          <input
            className="bg-blue-200 ml-2 py-2 px-4 cursor-pointer"
            type="submit"
            value="Payment"
          />
        </form>
      </div>
    </div>
  );
};

export default Payment;
