import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../constants/CurrencyFormatter';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {AiOutlineClose} from "react-icons/ai"
import flip from "../assets/recentview/view2.png"
import {RiSecurePaymentFill} from "react-icons/ri"
import { addShippingAddress } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckoutDetails = () => {
  const cartData = useSelector((state) => state.cart);
   

  const { shippingDetails, cartItems } = cartData;
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number.parseFloat(item.price),
    0
  );

  const navigate = useNavigate()
  
  const [isOpen, setOpen] = useState(false)
  const [address, setAddress] = useState(shippingDetails.address)
  const [city, setCity] = useState(shippingDetails.city);
  const [country, setCountry] = useState(shippingDetails.country);
  const [paymentMethod,setPaymentMethod] = useState("PayPal")
  const dispatch = useDispatch()
  const shippingAddressHandler = (e) => {
    e.preventDefault();
    dispatch(addShippingAddress({ address, city, country }))
    setAddress("")
    setCity("")
    setCountry("")
    
  }
  
  const proceed = () => {
    if (paymentMethod) {
      dispatch(savePaymentMethod({paymentMethod}))
      navigate("/payment-details")
    } else {
      toast.info("Please select payment method", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
    }
    
  }

  return (
    <div className="w-full">
      <div className="max-w-[1480px] mx-auto">
        <Navbar />
      </div>
      {/* Checkout details section */}
      <div className="mt-4 max-w-7xl mx-auto">
        <div className="flex justify-center items-center text-[#666666] gap-6">
          <RiSecurePaymentFill size={50} className="" />
          <div className="max-w-[100px] leading-5 capitalize text-[15px] tracking-wide">
            <p>secure payment</p>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:gap-20  sm:flex-row mt-4 sm:mt-12">
          <div className="">
            <h1 className="uppercase text-[20px] font-medium tracking-wider text-center sm:text-start">
              Checkout
            </h1>
            <div className="max-w-[838px] bg-[#F2F9FF] w-full rounded-md shadow-sm border border-stone-100 mt-4 sm:mt-6 p-4 sm:px-8 ">
              <div className="relative w-full flex flex-col items-end">
                {isOpen ? (
                  <AiOutlineClose
                    size={25}
                    className="text-red-600"
                    onClick={() => setOpen(!isOpen)}
                  />
                ) : (
                  <button
                    onClick={() => setOpen(!isOpen)}
                    className="absolute uppercase text-sm sm:text-[20px] text-[#FF3A43] font-medium mt-2"
                    type="submit"
                  >
                    change
                  </button>
                )}
                <div
                  className={`${
                    isOpen ? "" : "hidden"
                  } transition-all duration-300 ease-in-out absolute bg-white w-full max-w-[300px] translate-y-10 p-4 rounded-lg shadow-2xl`}
                >
                  <h1 className="text-center capitalize text-gray-600 font-semibold">
                    shipping address
                  </h1>
                  <form onSubmit={shippingAddressHandler}>
                    <div className="flex flex-col mt-2">
                      <label
                        htmlFor=""
                        className="text-gray-600 pb-1 font-medium"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name=""
                        value={address ? address : ""}
                        onChange={(e) => setAddress(e.target.value)}
                        className="rounded-md focus:border-none py-2"
                        id=""
                        placeholder="enter address"
                      />
                    </div>
                    <div className="flex flex-col mt-2">
                      <label
                        htmlFor=""
                        className="text-gray-600 pb-1 font-medium"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name=""
                        className="rounded-md focus:border-none py-2"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        id=""
                        placeholder="your city"
                      />
                    </div>
                    <div className="flex flex-col mt-2">
                      <label
                        htmlFor=""
                        className="text-gray-600 pb-1 font-medium"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name=""
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="rounded-md focus:border-none py-2"
                        id=""
                        placeholder="your country name"
                      />
                    </div>
                    <div className="my-2 pt-2 flex items-center justify-center">
                      <button
                        onClick={() => setOpen(!isOpen)}
                        type="submit"
                        className="bg-green-600 text-green-100 py-2 px-8 rounded-md capitalize hover:bg-black"
                      >
                        save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex justify-between sm:mt-2">
                <h1 className="text-sm sm:text-[20px] font-medium ">
                  1. ADDRESS DETAILS
                </h1>
              </div>
              <h1 className="text-sm sm:text-[20px] capitalize mt-2 sm:mt-6">
                daniel Dada
              </h1>
              <p className="text-sm sm:text-[20px] tracking-wider font-light leading-[28px] mt-2 md:pb-4">
                Zone 9 Lugbe Abuja, Abuja-Lugbe Police Sign Post, Federal
                Capital Territory +2349032620409
              </p>
            </div>
            <div className="max-w-[838px] bg-[#F2F9FF] w-full rounded-md shadow-sm border border-stone-100 mt-4 sm:mt-8 p-4 sm:px-8">
              <div className="flex justify-between sm:mt-2">
                <h1 className="text-sm sm:text-[20px] font-medium ">
                  2. PAYMENT METHOD
                </h1>
              </div>

              <p className="text-sm sm:text-[20px] tracking-wider font-medium capitalize leading-[28px] mt-2 md:pb-4 sm:mt-4">
                How do you want to pay for your order?
              </p>
              <div className="flex items-center mr-4 gap-2">
                <input
                  defaultChecked
                  id="orange-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="w-4 h-4 text-[#FF0100] bg-gray-100 border-gray-300 focus:ring-[#FF0100] dark:focus:ring-[#FF0100] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="orange-radio"
                  className="ml-2 text-sm sm:text-[20px]  font-extralight text-gray-900 dark:text-gray-300 capitalize"
                >
                  Pay with cards
                </label>
              </div>
              <div className="flex gap-4 items-center mt-4 sm:mt-8 sm:pb-4 ">
                <form className="w-[56px] border border-blue-600 h-[40px] rounded-md flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1677795043/Images/Mcard_trunic.png"
                    alt=""
                    className="max-w-[40px]"
                  />
                </form>
                <img
                  src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1677795044/Images/V_crm51e.png"
                  alt=""
                  className="max-w-[40px] max-h-[40px]"
                />
                <img
                  src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1677795044/Images/VERVE_qtsclq.png"
                  alt=""
                  className="max-w-[83px] max-h-[40px]"
                />
                <img
                  onClick={() => setPaymentMethod("PayPal")}
                  src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1677795043/Images/PAY_ucmxyx.png"
                  alt=""
                  className="max-w-[112.76px] max-h-[40px]"
                />
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="uppercase text-[20px] font-medium tracking-wider text-center sm:text-start">
              order summary
            </h1>

            <div className="max-w-[446px] bg-[#F2F9FF] w-full rounded-md shadow-sm border border-stone-100 p-6 sm:px-10 mt-6">
              <h1 className="sm:text-[21.505px] text-[18px] font-medium tracking-wider">
                YOUR ORDER ({cartItems.length}{" "}
                {cartItems.length === 1 ? "item" : "items"})
              </h1>
              <div className="flex flex-col gap-1 mt-2">
                {cartItems &&
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex pt-2 sm:pt-3 items-center gap-4 pb-2 border-t border-teal-500"
                    >
                      <img
                        src={`http://127.0.0.1:8000${item.image}`}
                        alt=""
                        className=" max-h-[100px]"
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-[14px] font-medium">{item.title}</p>
                        <p className="text-[14.5427px] font-bold">
                          <CurrencyFormat value={item.price} />
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex items-center justify-between sm:pt-2">
                <p className="text-[20px] font-bold capitalize">total</p>

                <p className="text-[14.5427px] font-bold">
                  <CurrencyFormat value={totalPrice} />
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 max-w-[446px] w-full flex justify-center pb-4 sm:pb-0">
              <button
                onClick={proceed}
                className="py-3 inline-flex justify-center px-8 text-[15px] sm:grow uppercase text-white font-bold rounded-md sm:text-[20px] bg-[#0043C6] hover:bg-black"
                type="submit"
              >
                confirm order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 ">
        <Footer />
      </div>
    </div>
  );
}

export default CheckoutDetails







