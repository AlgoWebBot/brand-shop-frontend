/* eslint-disable react/prop-types */
// import Fade from "@mui/material/Fade";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FaHouseUser } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md"
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(`pk_test_51OF1GOHUw9AEQwQEYulw5HbopwWcijlpUqETbPM1v7AD08xv2kWdWSp6Cl9O06iiaVJTCDoqef8OqvkeBC8aC0lQ00D4BtI4ft`);

// console.log("thisss key", import.meta.env.VITE_PAYMENY_GATEWAY_PK);
const Payment = ({ item }) => {

    console.log(item);

    return (
        <>
            <div className="">
                <div className="items-center justify-center p-4 text-center">

                    <div className="transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                        <div className=" mt-10">

                            <div className="">
                                <Elements stripe={stripePromise}>
                                    <CheckOutForm item={item} />
                                </Elements>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </>


    );
};

export default Payment;