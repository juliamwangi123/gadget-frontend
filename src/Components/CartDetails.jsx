import React from "react";
import SavedItems from "./MyAccount/SavedItems";
import SideNav from "./MyAccount/SideNav";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import flip from "../assets/Pinfo/flip.png";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
  MdDeleteOutline,
} from "react-icons/md";
import { RecentViews } from "./data";
const CartDetails = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      {/* Cart details section */}
      <div className="mt-4 max-w-7xl mx-auto">
        <div className="flex gap-4 justify-between flex-col sm:flex-row">
          <div className="max-w-[838px] w-full bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100">
            <h1 className="px-8 sm:px-12 md:px-16 text-[21.505px] font-medium my-2 sm:my-4 md:mt-8">
              Cart (1)
            </h1>
            <div className="flex px-4 gap-10 flex-col sm:flex-row md:gap-24 sm:px-12">
              <img
                src={flip}
                alt=""
                className="max-w-[200px] w-full object-contain"
              />
              <div className="">
                <h1 className="max-w-[352px] text-[16px] leading-[23px] font-sans tracking-wide">
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
                    <div className="flex items-center gap-4 md:pb-8">
                      <MdLocationOn size={25} className="text-gray-400 " />
                      <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
                        kaduna ,Nigeria
                      </p>
                    </div>
                    <p className="">Used</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-8 sm:px-12 md:px-16 mt-4 pb-4">
              <div className="flex gap-1 items-center text-[#FF3A43] cursor-pointer">
                <MdDeleteOutline size={30} />
                <button className="uppercase text-[20px]" type="submit">
                  remove item
                </button>
              </div>
              <div className="flex items-center text-[#FC3233] gap-2.5">
                <button type="submit">
                  <AiFillMinusSquare size={35} />
                </button>
                <p className="text-[20px] text-black">1</p>
                <button type="submit">
                  <AiFillPlusSquare size={35} />
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[362px] bg-[#F2F9FF] w-full rounded-md shadow-sm border border-stone-100 p-8">
            <h1 className="text-[21.505px]">CART SUMMARY</h1>
            <div className="flex justify-between items-center sm:mt-4">
              <p className="text-[20px] font-medium tracking-wide">Subtotal</p>
              <p className="text-[16px] font-bold tracking-wide">₦ 75,000</p>
            </div>
            <div className="mt-4 sm:mt-10">
              <Link
                to="/checkout-details"
                className="bg-[#0043C6] py-2 uppercase text-white text-[20px] px-24 font-bold rounded-md"
                type="submit"
              >
                checkout
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1334px] bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100 mt-4 sm:mt-8 p-8 sm:px-14">
          <h1 className="text-[20px] ">Recently Viewed</h1>
          <div className="flex flex-wrap p-8 justify-between gap-4 md:gap-0">
            {RecentViews.map((view) => (
              <div key={view.id} className="max-w-[180px] w-full">
                <div className="w-full flex justify-center">
                  <img src={view.image} alt="" className="max-w-[130px]" />
                </div>
                <h1 className="line-clamp-2 max-w-[178px] text-[10px] font-bold">
                  {view.title}
                </h1>
                <p className="text-[14px] font-extrabold">{view.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default CartDetails;
