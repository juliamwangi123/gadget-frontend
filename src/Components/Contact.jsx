import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className=" px-6">
        <p className=" font-medium text-xl">
        <Link to="/" className="cursor-pointer">
            Home
          </Link>
          &gt;{" "}
          <Link to="/about-us" className="cursor-pointer">
            About Us
          </Link>&gt;{" "}
          <span className=" text-[#00000080]">Contact Us</span>{" "}
        </p>
        <h1 className=" font-bold text-2xl my-9">Contact Us</h1>
        <div className=" flex justify-between">
          <form className=" md:w-2/3 w-full space-y-6 md:px-6 ">
            <div className=" flex md:flex-row  flex-col justify-between sm:space-y-1 text-[#00000080] font-medium">
              <label for="email" className=" my-auto">
                Email Address
              </label>
              <input
                type="text"
                placeholder="danielgbawo@gmail.com"
                name="email"
                required
                className=" rounded-md md:w-3/4"
              />
            </div>
            <div className=" flex md:flex-row  flex-col justify-between sm:space-y-1 text-[#00000080] font-medium">
              <label for="subject" className=" my-auto">
                How can we help you?
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className=" rounded-md md:w-3/4"
              />
            </div>
            <div className=" flex md:flex-row  flex-col justify-between sm:space-y-1 text-[#00000080] font-medium">
              <label for="message" className=" pt-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className=" rounded-md p-2 h-60 md:w-3/4"
              ></textarea>
            </div>
            <div className=" flex justify-between float-right">
              <button
                type="submit"
                value="Submit"
                className="bg-[#0043C6] text-center py-3 px-28 rounded-lg text-white font-black text-xl"
              >
                Submit
              </button>
            </div>
          </form>
          <div className=" w-1/3 hidden md:block  my-auto">
            <img src="https://res.cloudinary.com/eiroro/image/upload/v1679092567/amico_vsgeiz.svg" />
          </div>
        </div>
        <div className=" mt-20 font-medium ">
          <p>Phone Support </p>
          <p>0708 769 5570, +4474758964494, +1(302)5768-6198</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
