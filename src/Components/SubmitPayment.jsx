import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BiCreditCard } from "react-icons/bi"
import {FiCreditCard} from "react-icons/fi"
import {AiFillLock} from "react-icons/ai"
import {HiOutlineCreditCard} from "react-icons/hi"
import { RiSecurePaymentFill, RiArrowRightSLine } from "react-icons/ri";

const SubmitPayment = () => {
  return (
    <section className="w-full">
      {/* nav section */}
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <section className="max-w-7xl mx-auto flex justify-center w-full">
        <main className=" w-full mx-auto">
          <div className="flex justify-center items-center text-[#666666] gap-6">
            <RiSecurePaymentFill size={50} className="" />
            <div className="max-w-[100px] leading-5 capitalize text-[15px] tracking-wide">
              <p>secure payment</p>
            </div>
          </div>
          <div className="mx-auto max-w-[852px] flex justify-between mt-4 sm:mt-10 px-4">
            <h1 className="sm:text-[20px] font-medium uppercase tracking-wide">
              order summary
            </h1>
            <button className="sm:text-[20px] uppercase text-[#FF0000] inline-flex items-center">
              SEE DETAILS <RiArrowRightSLine />{" "}
            </button>
          </div>
          <div className="max-w-[852px] bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100 mx-auto flex justify-between px-4 py-3 mt-4 sm:mt-7">
            <h1 className="sm:text-[20px] font-medium">TOTAL TO PAY</h1>
            <h1 className="sm:text-[20px] font-bold sm:mr-10">₦ 75,000</h1>
          </div>
          <div className="px-4 mx-auto max-w-[852px] mt-4 sm:mt-6 pb-2 flex justify-center">
            <h1 className="sm:text-[20px] text-[15px] font-medium uppercase">
              enter card details
            </h1>
          </div>
          <div className="max-w-[852px]  bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100 mx-auto p-6 sm:px-14">
            <div className="w-full">
              <label
                className="text-[20px] font-medium capitalize tracking-wide"
                htmlFor=""
              >
                card number
              </label>
              <div className=" flex items-center max-w-[701px] mt-2 ">
                <HiOutlineCreditCard
                  size={35}
                  className="absolute ml-5 pointer-events-none text-[#ADADAD]"
                />
                <input
                  type="search"
                  className="w-full  bg-inherit pr-3 pl-20 placeholder:font-sans py-3 font-serif focus:h-12  placeholder:text-[#ADADAD] placeholder:text-[20px] rounded-[10px] border border-[#ADADAD] focus:border-none "
                  placeholder="000 000 000 000"
                />
              </div>
            </div>

            <div className=" w-full flex flex-col gap-4 sm:flex-row sm:gap-12 mt-4 sm:mt-5 max-w-[701px]">
              <div className="w-full">
                <label
                  className="text-[20px] font-medium capitalize tracking-wide"
                  htmlFor=""
                >
                  EXP date
                </label>
                <div className=" flex items-center max-w-[701px] mt-2 text-[#7F7F7F]">
                  <FiCreditCard
                    size={35}
                    className="absolute ml-5 pointer-events-none text-[#ADADAD]"
                  />
                  <input
                    type="search"
                    className="w-full max-w-[352px] bg-inherit pr-3 pl-20 placeholder:font-sans py-3 font-serif focus:h-12  placeholder:text-[#ADADAD] placeholder:text-[20px] rounded-[10px] border border-[#ADADAD] focus:border-none "
                    placeholder="MM/YY"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  className="text-[20px] font-medium capitalize tracking-wide"
                  htmlFor=""
                >
                  CVV
                </label>
                <div className=" flex items-center max-w-[701px] mt-2 ">
                  <BiCreditCard
                    size={35}
                    className="absolute ml-5 pointer-events-none text-[#ADADAD]"
                  />
                  <input
                    type="search"
                    className="w-full max-w-[352px]  bg-inherit pr-3 pl-20 placeholder:font-sans py-3 font-serif focus:h-12  placeholder:text-[#ADADAD] placeholder:text-[20px] rounded-[10px] border border-[#ADADAD] focus:border-none "
                    placeholder="**"
                  />
                </div>
              </div>
            </div>

            <div className=" w-full  flex flex-col sm:flex-row items-center sm:gap-12 mt-4 sm:mt-5 max-w-[701px]">
              <div className="w-full">
                <label
                  className="text-[20px] font-medium capitalize tracking-wide"
                  htmlFor=""
                >
                  your pin
                </label>
                <div className=" flex items-center max-w-[701px] mt-2 ">
                  <input
                    type="search"
                    className="w-full max-w-[352px] bg-inherit pr-3 pl-20 placeholder:font-sans py-3 font-serif focus:h-12  placeholder:text-[#ADADAD] placeholder:text-[20px] rounded-[10px] border border-[#ADADAD] focus:border-none "
                    placeholder=""
                  />
                </div>
              </div>
              <div className="w-full flex mt-4 sm:mt-8 items-center gap-2 text-[#7F7F7F]">
                <AiFillLock size={25} />
                <p>100% Safe and Secure</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 sm:mt-8">
            <Link
              to="/payment-success"
              className="bg-[#0043C6] sm:text-[20px] text-white py-2.5 rounded-md  font-bold px-10 sm:px-40 tracking-wider hover:bg-black"
              type="submit"
            >
              PAY NOW
            </Link>
          </div>
        </main>
      </section>
      <div className="">
        <Footer />
      </div>
    </section>
  );
}

export default SubmitPayment