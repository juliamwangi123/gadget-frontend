import React from "react";
import logo from "../assets/logo.png";
import Chat from "../assets/chat.png";

import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full border-t-2 flex justify-center md:mt-32 border-gray-400 md:my-8">
      <div>
        <div className="max-w-[1480px] mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-10  md:my-10 md:pt-12">
          <div className="font-serif text-base font-medium text-gray-700 lowercase ">
            <img className="w-[4rem] h-[3rem]" src={logo} alt="" />
            <ul className="leading-7">
              <ul>info@gadgethub.com</ul>
              <ul>10, zone 9 STE. R. DOVER, Delaware, USA.</ul>
              <ul>+1(302)5768-6198</ul>
              <ul> 63-66, Hatton Gardens, Suite 23, London, EC1N, UK.</ul>
              <ul>+4474758964494</ul>
            </ul>
          </div>
          <div className="md:px-28">
            <h1 className="uppercase text-xl tracking-wider font-medium text-gray-900">
              about us
            </h1>
            <ul className="capitalize text-lg font-serif pt-6 text-gray-700">
              <li className="pt-2">
                <a href="">the team</a>
              </li>
              <li className="pt-2">
                <a href="">news/blog</a>
              </li>
              <li className="pt-2">
                <a href="">our story</a>
              </li>
              <li className="pt-2">
                <a href="">our mission</a>
              </li>
              <li className="pt-2">
                <a href="">our vision</a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <h1 className="uppercase text-xl tracking-wider font-medium text-gray-900">
              useful links
            </h1>
            <ul className="capitalize text-lg font-serif pt-6 text-gray-700">
              <li className="pt-2">
                <a href="">privacy policy</a>
              </li>
              <li className="pt-2">
                <a href="">terms and conditions</a>
              </li>
              <li className="pt-2">
                <a href="">support</a>
              </li>
              <li className="pt-2 uppercase">
                <a href="">faq</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="uppercase text-xl tracking-wider font-medium text-gray-900">
              subscribe to our newsletter
            </h1>
            <div className="md:pt-8">
              <input
                type="search"
                className="w-full bg-inherit sm:h-14 pr-3 pl-10 py-2 font-serif  placeholder:text-gray-500 rounded-xl border-2 border-black"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="pt-4">
              <button
                className="text-lg py-3 px-16 hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 font-medium  border-2 border-[#0043C6] capitalize  rounded-xl"
                type="submit"
              >
                subscribe
              </button>
            </div>
            <div className=" md:pt-8">
              <h1 className="uppercase text-xl text-gray-600 tracking-wide">
                join us now
              </h1>
            </div>
            <div className=" flex gap-6 md:pt-4">
              <FaFacebook size={33} className="text-blue-500" />
              <FaTwitter size={33} className="text-cyan-500" />
              <FaInstagramSquare size={33} className="text-pink-500" />
              <FaLinkedin size={33} className="text-blue-700" />
            </div>
            <div className="flex justify-end">
              <img src={Chat} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:pb-20 font-serif text-lg text-gray-600 tracking-wide">
          <p>Copyright Gadgethub Technologies Inc. 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
