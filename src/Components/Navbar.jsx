import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import DropDown from "./subcomponents/DropDown";
import { Menu } from "@headlessui/react";
const Navbar = ()=> {
  
 
  const [OpenMobile, SetMobile] = useState(true);

  const toggle = () => {
    SetMobile((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1480px] sm:m-auto sm:pt-6">
        <div className="md:flex gap-10 w-full hidden">
          <div className="flex items-center gap-8 w-3/5">
            <Link to="/" className="cursor-pointer">
              <img className="w-[5.5rem] h-[4.2rem]" src={logo} alt="" />
            </Link>
            <div className="w-full">
              <div className="relative flex items-center text-gray-500">
                <RiSearchLine className="w-5 h-5 absolute ml-3 pointer-events-none" />
                <input
                  type="search"
                  className="w-full bg-inherit pr-3 pl-10 py-2 font-serif focus:h-12  placeholder:text-gray-500 rounded-lg border-2 border-zinc-400 focus:border-none"
                  placeholder="Search Products,Brands and Categories "
                />
                <div className="px-5">
                  <button
                    className="text-sm py-2.5 px-8  hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 font-medium  border-2 border-[#0043C6] uppercase  rounded-lg"
                    type="submit"
                  >
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 sm:pt-4 ">
            <div className="flex gap-12">
              <div className="capitalize">
                <button
                  className="capitalize font-sans font-medium text-base text-gray-900 "
                  type="button"
                >
                  contact us
                </button>
              </div>
              <div className="">
                <Menu as="div" className="relative">
                  <Menu.Button className="flex gap-2 items-center">
                    <BsPersonFill size={25} />
                    <span className="capitalize text-base text-gray-900 font-medium">
                      account
                    </span>
                    <AiOutlineDown />
                  </Menu.Button>
                  <Menu.Items
                    as="div"
                    className="flex flex-col absolute z-10 -translate-x-[30%] translate-y-3 p-6 bg-[#F9FCFF] border-2 border-white  bg-opacity-50 rounded-md shadow-2xl w-[250px] items-center"
                  >
                    <Menu.Item>
                      <Link className="inline-flex items-center gap-6 text-[#0043C6]">
                        <BsPersonFill size={30} />
                        <span className="text-[18.0682px] capitalize font-bold text-[#0043C6] tracking-wide">
                          my account
                        </span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item as="div" className="mt-10">
                      <Link to="/account/register" className="py-3 bg-[#0043C6] px-8 text-[15px] capitalize hover:bg-black text-white font-medium tracking-wide rounded-lg cursor-pointer">
                        create account
                      </Link>
                    </Menu.Item>
                    <Menu.Item as="div" className="mt-12 mb-4">
                      <Link to="/account/login" className="py-3 hover:bg-emerald-50 border border-[#0043C6] bg-white px-16 text-[15px] capitalize text-[#0043C6] font-medium tracking-wider rounded-md">
                      sign in
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>

              <div>
                <Link
                  to="/cart-details"
                  className="capitalize font-sans font-medium text-base inline-flex gap-1 text-gray-900 tracking-wide "
                  type="button"
                >
                  <FaShoppingCart size={20} />
                  <span> </span>
                  cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-8">
          <div>
            <div>
              <div className="block  md:hidden" onClick={toggle}>
                {!OpenMobile ? (
                  <AiOutlineClose size={25} className="text-red-500 mr-4" />
                ) : (
                  <AiOutlineMenu size={25} className="text-blue-900 mr-4" />
                )}
              </div>
              <div
                className={
                  !OpenMobile
                    ? "fixed md:left-[-100%] top-0 left-0 pt-12 flex justify-center w-[60%] h-screen bg-opacity-100 bg-black shadow-md ease-in-out duration-500"
                    : "fixed left-[-100%]"
                }
              >
                <ul className="capitalize font-serif font-medium text-2xl text-center">
                  <li className="pt-8">
                    <a href="">
                      <button
                        className="text-sm py-2.5 px-8  hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 font-medium  border-2 border-[#0043C6] uppercase  rounded-lg"
                        type="submit"
                      >
                        sign in
                      </button>
                    </a>
                  </li>
                  <li className="pt-8 w-full border-b-2 border-black">
                    <a href="">my account</a>
                  </li>
                  <li className="pt-8">
                    <a href="">orders</a>
                  </li>
                  <li className="pt-8">
                    <a href="">saved items</a>
                  </li>
                  <li className="pt-8">
                    <a href="">Contact us</a>
                  </li>
                  <li className="pt-8">
                    <a href="">cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
