import React from 'react'
import logo from "../assets/logo.png";
import { RiSearchLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import DropDown from './subcomponents/DropDown';

const Navbar = () => {
  return (
    <div className="w-full bg-[#F2F6FC]">
      <div className="max-w-[1480px] sm:m-auto sm:pt-6">
        <div className="flex gap-10 w-full">
          <div className="flex items-center gap-8 w-3/5">
            <img
              className="w-[5.5rem] h-[4.2rem]"
              src={logo}
              alt=""
              srcset=""
            />
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
          <div className="px-16 sm:pt-4">
            <div className="flex gap-12">
              <div className="flex ">
                <BsPersonFill className="w-8 h-8" />

                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="uppercase font-medium font-serif text-stone-900 text-base px-2  text-center inline-flex items-center"
                  type="button"
                >
                  account{" "}
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white bg-opacity-50 divide-y divide-gray-100 rounded-lg shadow-2xl w-[15rem] "
                >
                  <DropDown />
                </div>
              </div>
              <div className="">
                <button
                  className="uppercase font-serif font-medium text-base text-stone-900 "
                  type="button"
                >
                  contact us
                </button>
              </div>

              <div>
                <button
                  className="uppercase font-medium font-serif text-base text-stone-900 "
                  type="button"
                >
                  cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;