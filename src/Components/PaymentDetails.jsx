import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from "./Footer";
import flip from "../assets/Pinfo/flip.png";

import { RiSecurePaymentFill, RiArrowRightSLine } from "react-icons/ri";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
  MdDeleteOutline,
} from "react-icons/md";

const PaymentDetails = () => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

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
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="sm:text-[20px] uppercase text-[#FF0000] inline-flex items-center"
              >
                SEE DETAILS <RiArrowRightSLine />{" "}
              </button>

              <div className={`max-w-[838px] w-[838px] ${hovering ? "": "hidden"} bg-[#F2F9FF] rounded-xl shadow-md border-2 border-gray-100 absolute -translate-x-[50%]`}>
                <div className="flex px-4 gap-10 flex-col sm:flex-row md:gap-24 sm:px-12 my-10">
                  <img
                    src={flip}
                    alt=""
                    className="max-w-[200px] w-full object-contain"
                  />
                  <div className="">
                    <h1 className="max-w-[352px] text-[16px] leading-[23px] font-light tracking-wide">
                      Samsung Galaxy A04s, 4GB/64GB Memory - Green
                    </h1>
                    <p className="sm:mt-2 font-light max-w-[347px]">
                      Brand:
                      <span className="text-[14px]">
                        Samsung | Similar products from Samsung
                      </span>
                    </p>
                    <div className="flex gap-4 items-center mt-2">
                      <div className="flex mb-2">
                        <MdOutlineStarPurple500
                          size={20}
                          className="text-[#FF0000]"
                        />
                        <MdOutlineStarPurple500
                          size={20}
                          className="text-[#FF0000]"
                        />
                        <MdOutlineStarPurple500
                          size={20}
                          className="text-[#FF0000]"
                        />
                        <MdOutlineStarOutline
                          size={20}
                          className="text-[#FF0000]"
                        />
                        <MdOutlineStarOutline
                          size={20}
                          className="text-[#FF0000]"
                        />
                        <MdOutlineStarOutline
                          size={20}
                          className="text-[#FF0000]"
                        />
                      </div>
                      <span>(24)</span>
                    </div>
                    <div className="">
                      <p className="font-bold pb-3">₦ 75,000</p>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                          <MdLocationOn size={25} className="text-gray-400 " />
                          <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
                            kaduna ,Nigeria
                          </p>
                        </div>
                        <p className="font-light">Used</p>
                      </div>
                      <p className="text-[20px] capitalize font-bold tracking-wider py-2">
                        daniel Dada
                      </p>
                      <p className="text-[20px] font-light tracking-wide">
                        Zone 9-Police Station Kaduna
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[852px] bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100 mx-auto flex justify-between px-4 py-3 mt-4 sm:mt-7">
            <h1 className="sm:text-[20px] font-medium">TOTAL TO PAY</h1>
            <h1 className="sm:text-[20px] font-bold sm:mr-10">₦ 75,000</h1>
          </div>
          <div className="px-4 mx-auto max-w-[852px] my-4 sm:my-5">
            <h1 className="sm:text-[20px] text-[15px] font-medium">
              YOU WILL PAY WITH
            </h1>
          </div>
          <div className="max-w-[852px] bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100 mx-auto flex justify-between p-6 mt-4 sm:mt-7">
            <div className="w-full">
              <div className="flex justify-between pb-4 sm:pb-8">
                <h1 className="text-[20px] font-light tracking-wide">
                  Mastercard XXXX-6602 <br /> Exp: 03/23
                </h1>
                <div>
                  <img
                    src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1677781262/Images/mastercard_tmylfz-removebg-preview_puanu9.png"
                    alt=""
                    className="max-w-[60px]"
                  />
                </div>
              </div>
              <div className="border-t my-2 border-gray-400"></div>
              <div className="flex justify-center pt-2 text-[15px] sm:text-[20px]">
                <button className="text-[#FF0000CC] font-medium ">
                  USE A DIFFERENT PAYMENT METHOD
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 sm:mt-8">
            <Link
              to="/submit-payment"
              className="bg-[#0043C6] sm:text-[20px] text-white py-2.5 rounded-md  font-bold px-10 sm:px-28 tracking-wide hover:bg-black"
              type="submit"
            >
              PAY NOW:₦ 75,000
            </Link>
          </div>
          <div className="text-center max-w-[743px] flex justify-center w-full mx-auto mt-4 px-2 md:px-0 sm:mt-14">
            <p className="text-[16px] font-light capitalize tracking-wide">
              By tapping "PAY NOW" I accept GADGETHUB Payment Terms &
              Conditions, General Terms and Conditions, and Privacy and Cookie
              Notice
            </p>
          </div>
          <div className="max-w-[1005px] text-center flex justify-center mx-auto mt-4 sm:mt-10">
            <p className="text-[16px] capitalize tracking-wide font-light">
              <span>Please note:</span> GADGETHUB will never ask you for your
              password, PIN, CVV or full card details over the phone or via
              email. Need help? Contact us on
              https://www.getdphone.com.ng/contact/
            </p>
          </div>
        </main>
      </section>
      <div className="">
        <Footer />
      </div>
    </section>
  );
}

export default PaymentDetails