import React from 'react'
import Navbar from './Navbar'
import { BsImageFill } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import Footer from './Footer';


const SellGadget = () => {
    return (
      <div className="w-full">
        <div className="">
          <Navbar />
        </div>
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex justify-center mt-4">
            <h1 className="text-3xl capitalize">sell your gadget</h1>
          </div>

          <div className="flex md:flex-row smx:px-10 md:gap-6 justify-center flex-col mt-6 sm:mt-14 w-full">
            <div className="flex flex-col w-full">
              <div class="mt-6 md:mt-10 mb-4">
                <div class="flex md:justify-center px-4 sm:px-24 ">
                  <div class="flex flex-col cursor-pointer">
                    <div class="w-[152px] cursor-pointer">
                      <div class="relative  h-[135px] rounded-lg bg-[#CCD9F4] flex justify-center items-center">
                        <div class="absolute cursor-pointer">
                          <div class="flex flex-col items-center cursor-pointer">
                            <span className="flex items-center bg-slate-200 h-8">
                              <BsImageFill
                                size={40}
                                className="text-[#0043C6]"
                              />
                            </span>
                          </div>
                        </div>

                        <input
                          type="file"
                          class="h-full w-full opacity-0"
                          name=""
                        />
                      </div>
                    </div>
                    <h1 className="text-center capitalize font-sans font-medium tracking-wider pt-2">
                      add image
                    </h1>
                  </div>
                  <div class="px-8 sm:px-14">
                    <div class="w-[152px]">
                      <div class="relative  h-[135px] rounded-lg bg-[#CCD9F4] flex justify-center items-center">
                        <div class="absolute">
                          <div class="flex flex-col items-center">
                            <span className="flex items-center bg-slate-200 h-8">
                              <FaYoutubeSquare
                                size={40}
                                className="text-[#0043C6]"
                              />
                            </span>
                          </div>
                        </div>

                        <input
                          type="file"
                          class="h-full w-full opacity-0"
                          name=""
                        />
                      </div>
                    </div>
                    <h1 className="text-center capitalize font-sans font-medium tracking-wider pt-2">
                      add video
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 flex-col px-8 md:px-0 sm:mt-16">
                <label
                  className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                  htmlFor=""
                >
                  payment method
                </label>
                <input
                  className="max-w-[553px] py-4 rounded-lg placeholder:capitalize px-8"
                  placeholder="payment method"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 md:mt-8">
                <label
                  className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                  htmlFor=""
                >
                  account details
                </label>
                <input
                  className="max-w-[553px] py-4 rounded-lg placeholder:capitalize px-8"
                  placeholder="bank"
                  type="text"
                  name=""
                  id=""
                />
                <div className="md:mt-2 w-full">
                  <input
                    className=" w-full max-w-[553px] py-4 rounded-lg placeholder:capitalize px-8"
                    placeholder="account name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="md:mt-2 w-full">
                  <input
                    className=" w-full max-w-[553px] py-4 rounded-lg placeholder:capitalize px-8"
                    placeholder="account number"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
            {/* SECTION TWO */}
            <div className="w-full">
              <div className="flex flex-col w-full">
                <div className="flex gap-4 flex-col px-8 md:px-0">
                  <label
                    className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                    htmlFor=""
                  >
                    gadget name
                  </label>
                  <input
                    className="max-w-[553px] py-4 rounded-lg px-8"
                    placeholder="Name of item"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                  <label
                    className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                    htmlFor=""
                  >
                    specification
                  </label>

                  <input
                    className="max-w-[553px] py-4 rounded-lg px-8"
                    placeholder="Description of item"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                  <label
                    className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                    htmlFor=""
                  >
                    conditions
                  </label>

                  <input
                    className="max-w-[553px] py-4 rounded-lg px-8"
                    placeholder="Condition of the item"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                  <label
                    className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                    htmlFor=""
                  >
                    price
                  </label>

                  <input
                    className="max-w-[553px] py-4 rounded-lg px-8"
                    placeholder="Product price"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                  <label
                    className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                    htmlFor=""
                  >
                    currency
                  </label>

                  <input
                    className="max-w-[553px] py-4 rounded-lg px-8"
                    placeholder="Payment currency"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                  <label
                    className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                    htmlFor=""
                  >
                    item visibility
                  </label>

                  <input
                    className="max-w-[553px] py-4 rounded-lg px-8"
                    placeholder="Everyone"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <div className="mt-5 md:mt-10 mb-6 md:mb-0 flex flex-wrap items-center gap-4 mx-6 md:mx-10">
                  <button
                    className="text-[20px] bg-red-500 font-sans py-2.5 px-8 capitalize text-red-100 rounded-md hover:bg-white hover:border hover:border-red-500 hover:text-red-500"
                    type="submit"
                  >
                    cancel
                  </button>
                  <button
                    className="text-[20px] capitalize hover:bg-black hover:border-black bg-[#0043C6] py-2.5 px-6 text-blue-100  rounded-lg tracking-wide font-medium"
                    type="submit"
                  >
                    save as draft
                  </button>
                  <button
                    className="text-[20px] capitalize hover:bg-emerald-400 hover:text-emerald-50 bg-[#00A725] py-2.5 px-6 text-green-50  rounded-lg tracking-wide font-medium"
                    type="submit"
                  >
                    procced
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    );
}

export default SellGadget