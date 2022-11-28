import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ChakoutRoute = ({ booking }) => {
  const {
    capacity,
    color,
    location,
    name,
    original_Price,
    picture,
    resale_price,
    years_of_use,
    user,
    _id,
  } = booking;

  const stripe = useStripe();
  const element = useElements();

  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // paymnet step 3
    fetch(`${process.env.REACT_APP_LOCALHOST}create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ resale_price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resale_price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: user,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);

      const payment = {
        resale_price,
        transactionId: paymentIntent.id,
        user,
        bookingId: _id,
        capacity,
        color,
        location,
        name,
        original_Price,
        picture,
        resale_price,
        years_of_use,
      };
      // payment info in data base
      fetch(`${process.env.REACT_APP_LOCALHOST}payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data);
            const url = `${process.env.REACT_APP_LOCALHOST}AllAdvertisingDelete/${resale_price}`;
            // console.log(url);

            axios.delete(url).then((res) => {
              console.log(res);
              if (res.data.acknowledged) {
                setSuccess("Congrats! your Payment completed");
                setTransactionId(paymentIntent.id);
                toast.success("transaction successfully");
              }
            });
          }
        });
    }
    setProcessing(false);
    console.log("payment", paymentIntent);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500"> {cardError} </p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your TransactionId:
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default ChakoutRoute;
