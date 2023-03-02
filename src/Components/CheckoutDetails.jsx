import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import flip from "../assets/recentview/view2.png"
import {RiSecurePaymentFill} from "react-icons/ri"


const CheckoutDetails = () => {
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
            <div className="max-w-[838px] bg-[#F2F9FF] w-full rounded-md shadow-sm border border-stone-100 mt-4 sm:mt-6 p-4 sm:px-8">
              <div className="flex justify-between sm:mt-2">
                <h1 className="text-sm sm:text-[20px] font-medium ">
                  1. ADDRESS DETAILS
                </h1>
                <div className="">
                  <button
                    className="uppercase text-sm sm:text-[20px] text-[#FF3A43] font-medium"
                    type="submit"
                  >
                    change
                  </button>
                </div>
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
              <div class="flex items-center mr-4 gap-2">
                <input
                  checked
                  id="orange-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-4 h-4 text-[#FF0100] bg-gray-100 border-gray-300 focus:ring-[#FF0100] dark:focus:ring-[#FF0100] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="orange-radio"
                  class="ml-2 text-sm sm:text-[20px]  font-extralight text-gray-900 dark:text-gray-300 capitalize"
                >
                  Pay with cards
                </label>
              </div>
              <div className="flex gap-4 items-center mt-4 sm:mt-8 sm:pb-4 ">
                <div className="w-[56px] border border-blue-600 h-[40px] rounded-md flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1677795043/Images/Mcard_trunic.png"
                    alt=""
                    className="max-w-[40px]"
                  />
                </div>
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
                YOUR ORDER (1 item)
              </h1>
              <div className="flex pt-2 sm:pt-6 items-center">
                <img src={flip} alt="" className=" max-h-[150px]" />
                <div className="flex flex-col gap-2">
                  <p className="text-[11px]">
                    Samsung Galaxy A04s, 4GB/64GB Memory - Green
                  </p>
                  <p className="text-[14.5427px] font-bold">₦ 75,000</p>
                  <p className="text-[15px]">Qty: 1</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:pt-2">
                <p className="text-[20px] font-bold capitalize">total</p>

                <p className="text-[14.5427px] font-bold">₦ 75,000</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex justify-center">
              <Link
                to="/payment-details"
                className="py-2.5 px-8 text-[15px] sm:w-full uppercase text-white font-bold rounded-md sm:text-[20px] bg-[#0043C6] hover:bg-black"
                type="submit"
              >
                confirm order
              </Link>
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







