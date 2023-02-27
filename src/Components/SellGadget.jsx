import React from 'react'
import Navbar from './Navbar'
import { BsImageFill } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import Footer from './Footer';
import { Link } from 'react-router-dom';


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

          <div className="flex md:flex-row smx:px-10 md:gap-24 sm:px-4 justify-center flex-col mt-6 sm:mt-14 w-full">
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
                <select
                  className="max-w-[553px] py-4 rounded-lg px-8 text-gray-400"
                  type="text"
                  name=""
                  id=""
                >
                  <option selected>Payment Method</option>
                  <option>Paypal</option>
                  <option>Stripe</option>
                  <option>Bank Transfer</option>
                  <option>Credit Card</option>
                  <option>Post Pay</option>
                </select>
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

                  <select
                    className="max-w-[553px] py-4 rounded-lg px-8 text-gray-400"
                    type="text"
                    name=""
                    id=""
                  >
                    <option selected>Money Currency</option>
                    <option>Naira</option>
                    <option>USD</option>
                    <option>Ghana Cedi</option>
                    <option>Kenyan Shillings</option>
                  </select>
                </div>
                <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                  <label
                    className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                    htmlFor=""
                  >
                    item visibility
                  </label>

                  <select
                    className="max-w-[553px] py-4 rounded-lg px-8 text-gray-400"
                    type="text"
                    name=""
                    id=""
                  >
                    <option selected>Everyone</option>
                    <option>Only Me</option>
                    <option>Select a group</option>
                  </select>
                </div>

                <div className="w-full md:mt-10 mt-4 flex-wrap flex items-center gap-8">
                  <Link to="/"
                    className="text-[20px] font-sans mr-2 text-gray-500 capitalize cursor-pointer rounded-md hover:text-red-500"
                    type="submit"
                  >
                    cancel
                  </Link>
                  <Link to="/"
                    className="text-[20px] capitalize hover:bg-black hover:border-black bg-[#0043C6] py-2.5 px-8 text-blue-100  rounded-lg tracking-wide font-medium"
                    type="submit"
                  >
                    save as draft
                  </Link>
                  <Link
                    to="/product-details"
                    className="text-[20px] md:ml-6 capitalize hover:bg-emerald-400 hover:text-emerald-50 bg-[#00A725] py-2.5 px-14 text-green-50  rounded-lg tracking-wide font-medium"
                    type="submit"
                  >
                    procced
                  </Link>
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