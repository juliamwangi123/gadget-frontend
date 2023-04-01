import React, { useState, useEffect } from "react";
import Banimg from "../assets/tv.png";
import { useSelector } from "react-redux";
import Headset from "../assets/headset.png";
import Laptop from "../assets/laptop.png";
import Iphone from "../assets/unsplash.png";
import { useNavigate } from "react-router-dom";
import { FaRegSquare } from "react-icons/fa";
import Navbar from "./Navbar";
import SlideShow from "./SlideShow";
import Fade from "react-reveal/Fade";



const Tailblock = () => {
  
  
  const userdata = useSelector((state) => state.userLogin);
  const { userLogin } = userdata || {};
  
  const navigate = useNavigate()

  const sellRedirectHandeler = () => {
    if (userLogin) {
      navigate("/sell-gadget");
    } else {
      navigate("/account/login")
      
    }
  }
  const buyRedirectHandeler = () => {
    if (userLogin) {
      navigate("/products-page");
    } else {
      navigate("/account/login");
    }
  };
  
  return (
    <section className="bg-[#F2F6FC]">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center relative">
        <Fade left>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="uppercase font-bold sm:text-5xl tracking-wider pt-8">
              <h1>Best Price</h1>
              <h1 className="pt-3"> Easy-to-Use Platform</h1>
            </div>
            <p className="capitalize text-sm sm:w-2/3 sm:pr-12 my-4 font-light sm:leading-5 tracking-wide">
              Shop hundreds of revolutionizing used gadgets from different
              manufacturers as leading brand <br /> for up to 70 % saving
              guaranteed
            </p>
            <div className="flex flex-col sm:flex-row md:gap-4 md:my-4">
              <button
                onClick={sellRedirectHandeler}
                className="text-xl inline-flex items-center capitalize hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-20 rounded-lg tracking-wide font-medium"
              >
                sell
              </button>
              <button
                onClick={buyRedirectHandeler}
                className=" ml-4 inline-flex text-xl hover:bg-blue-100 border-2 border-[#0043C6]  text-[#0043C6] py-2 px-20 rounded-lg tracking-wide font-medium capitalize"
              >
                buy
              </button>
            </div>
          </div>
        </Fade>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <Fade right>
            <SlideShow />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Tailblock;
