/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Auth/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CheckOutForm = ({ item }) => {

  // const { user } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [postalCode, setPostalCode] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(MyContext)
  const [errorMassage, setErrorMassage] = useState(null);
  const [transactionId, setTransactionId] = useState('')
  const navigate = useNavigate();

  //  console.log(user?.reloadUserInfo?.email);
  let price = parseInt(item?.price);
  console.log(price);

  useEffect(() => {
    axios.post("http://localhost:5000/payment-intent", { price: price })
      .then((res) => {
        console.log("hello", res.data);
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardNumberElement);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setErrorMassage(error);
    } else {

      setErrorMassage(null);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
            address: {
              postal_code: postalCode,
            },
          },
        },
      });


    if (confirmError) {
      setErrorMassage(confirmError);
    } else {
      setErrorMassage(null);
    }
    if (paymentIntent.status === "succeeded") {
      setErrorMassage('Successfully pay!.')
      setLoading(false);
      const paymentInfo = {
        id: paymentIntent.id,

      }
      // console.log("infoobject",paymentInfo);

      setTransactionId(paymentInfo)


      // console.log("form payment", information, id);
      e.target.reset()
    }
    //now save the payment in the database 
    const requestData = {
      requesterName: user?.displayName,
      requestEmail: user?.email,
      date: new Date().toLocaleDateString(),
      price: price,
      transactionId: paymentIntent.id,
      oldId: item._id,
      rating: item.rating,
      brand_name: item.brand_name,
      name: item.name
    }
    axios.post("http://localhost:5000/payments", requestData).then((res) => {
      if (res.data.insertedId) {
        navigate(`/payment-details/${res.data?.insertedId}`);
      }
    });
  }

  return (
    <div>
      <form
        onSubmit={handlePayment}
        className="px-5 py-2  shadow-xl rounded-md"
      >
        <div className="mb-4">
          <h1 className="text-center font-semibold text-xl">
            Pay with card
          </h1>
        </div>
        <div className="mb-3">
          <label className="block text-start font-bold text-sm mb-2 ml-1">
            Email
          </label>
          <input
            className="w-full px-3  py-1 mb-1 border-2 bg-transparent border-gray-200 rounded-md focus:outline-none"
            // placeholder="Your Name"
            value={user?.reloadUserInfo?.email}
            disabled
            type="text"
            defaultValue={user?.displayName}
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-start font-bold text-sm mb-2 ml-1">
            Card Information
          </label>
          <CardNumberElement
            id="card-number"
            className="w-full px-3 py-2 mb-1 border-2 border-gray-300 rounded-md"
            options={{
              showIcon: true,
              placeholder: "Card Number",
            }}
          />
        </div>
        <div className="mb-3 -mx-2 md:flex justify-between items-center">
          <div className="px-2">
            <label
              htmlFor="expire-date"
              className="block font-bold text-sm mb-2 ml-1 "
            >
              Expiration date
            </label>
            <CardExpiryElement
              id="expire-date"
              className="px-3 py-2 mb-1 border-2 border-gray-200 rounded-md"
            />
          </div>
          <div className="px-2">
            <label htmlFor="cvc" className="block font-bold text-sm mb-2 ml-1">
              Security code
            </label>
            <CardCvcElement
              id="cvc"
              className="w-24 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md"
            />
          </div>
          <div className="px-2">
            <label
              htmlFor="postal-code"
              className="block font-bold text-sm mb-2 ml-1"
            >
              Postal code
            </label>
            <input
              onChange={(e) => setPostalCode(e.target.value)}
              id="postal-code"
              required
              maxLength={5}
              placeholder="POST"
              className="w-24 px-3 py-1 mb-1 border-2 bg-transparent border-gray-200 rounded-md focus:outline-none"
            />
          </div>
        </div>

        <button
          className="btn w-full bg-blue-700 text-white rounded-md text-xl"
          type="submit">
          Pay

        </button>
        <p className="mt-5 text-xl font-medium text-pink-700">{errorMassage}</p>
        {
          transactionId && <p className="text-green-600">Your transaction id:{transactionId?.id}</p>
        }

      </form>
    </div>
  );
};

CheckOutForm.propTypes = {};

export default CheckOutForm;
