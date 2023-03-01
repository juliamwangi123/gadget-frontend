import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { Products } from "./data";
import { Info } from './data';
import { useParams } from 'react-router-dom';
import { RiHeartFill } from "react-icons/ri";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
} from "react-icons/md";
import Footer from "./Footer";



const ProductDetails = () => {
    const [data, SetData] = useState([])
    console.log("this is the product details",data.title);
    const { id } = useParams()
    const Newid = parseInt(id)
    useEffect(() => {
        getProduct()
    }, [Newid])

    function getProduct() {
    const data = Products.filter((product) => product.id === Newid);
        SetData(data)
    }
  return (
    <div className="w-full">
      <div className="max-w-[1480px] mx-auto">
        <div className="">
          <Navbar />
        </div>
        {/* content section */}
        <div className="flex w-full gap-10 sm:gap-14 md:gap-20 flex-col md:flex-row justify-center px-4">
          <div className="">
            {/* section 1 */}

            <div>
              <div className="w-full">
                {data.map((product) => (
                  <div className="bg-[#F2F9FF] max-w-[869px] w-full rounded-[10.907px] shadow-sm border border-gray-100">
                    <div className="flex justify-end mr-8">
                      <RiHeartFill
                        className={`mt-4 sm:mt-6 ${
                          product.isSaved
                            ? "text-[#EB3223] cursor-pointer"
                            : "text-gray-300 cursor-pointer"
                        }`}
                        size={35}
                      />
                    </div>
                    <div className="w-full flex justify-center pb-4 sm:pb-8 md:pb-10 flex-col sm:flex-row px-4 md:gap-20">
                      <div className="w-full max-w-[300px]">
                        <img src={product.image} alt="" className="w-full" />
                      </div>
                      <div className="">
                        <h1 className="max-w-[352px] text-[16px] leading-[23px] font-sans tracking-wide">
                          {product.title}
                        </h1>
                        <p className="mt-2 sm:mt-5 font-light max-w-[347px]">
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
                          <p className="font-bold pb-3">₦ {product.price}</p>
                          <div className="flex justify-between">
                            <div className="flex items-center gap-4">
                              <MdLocationOn
                                size={25}
                                className="text-gray-400 "
                              />
                              <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
                                {product.location},Nigeria
                              </p>
                            </div>
                            <p className="">Used</p>
                          </div>
                          <div className="w-full pt-4 sm:mt-6 pb-2">
                            <Link
                              to=""
                              className="text-xl inline-flex items-center capitalize hover:bg-black hover:border-black bg-[#0043C6] text-white py-3 px-16 rounded-lg tracking-wide font-medium"
                            >
                              add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* section 2 */}

            <div className="flex my-4 sm:my-8 gap-8 flex-wrap">
              {Info.map((info) => (
                <div
                  key={info.id}
                  className="bg-[#F2F9FF] w-full flex items-center py-3 px-3 max-w-[120px] rounded-[10px]"
                >
                  <img src={info.image} alt="" className="" />
                </div>
              ))}
            </div>
            {/* section 3 */}
            <div className="bg-[#F2F9FF] max-w-[869px] flex flex-col rounded-[10.907px] p-6 px-8 md:px-14 pb-4 sm:pb-8 md:pb-12 shadow-sm border border-gray-100">
              <h1 className="text-[20px] font-medium tracking-wide my-2">
                Product details
              </h1>
              <p className="max-w-[729px] leading-[21px] text-[15px] font-light">
                Design <br />
                The Samsung Galaxy A04s continues to adhere to the typical
                design of the Galaxy A Series mobile phone, offering simplicity
                and uniqueness. The device measures 164.7 x 76.7 x 9.1 mm and
                weighs 195 grams. The back cover is designed to prevent
                scratches and stains like fingerprints and are suitable for
                people who like to use mobile phones without a case. Samsung’s
                rear camera design is a non-convex camera island. But it is a 3
                camera module, arranged vertically down to the top left corner
                of the machine and has a LED flash on the right side. The
                Samsung Galaxy A04s has a power button that is a built-in
                fingerprint scanner and volume buttons on the right side, while
                on the left there is a SIM card. The top has a noise-canceling
                mic. And the base of the machine has a USB Type-C port, main
                speaker, microphone and 3.5mm headphone jack.
              </p>
            </div>
            {/* section 4 */}
            <div className="bg-[#F2F9FF] max-w-[869px] flex flex-col sm:flex-row justify-between rounded-[10.907px] p-6 px-8 md:px-14 pb-4 sm:pb-8 md:pb-8 mt-4 sm:mt-6 shadow-sm border border-gray-100">
              <div className="">
                <h1 className="text-[20px] font-medium tracking-wide my-2">
                  Specifications
                </h1>
                <ul className="list-disc list-inside">
                  <li>4GB/64GB </li>
                  <li>5000mAh Battery</li>
                  <li>Android 12</li>
                  <li>Color - Green</li>
                </ul>
              </div>
              <div className=" flex flex-col gap-2">
                <h1 className="text-[20px] font-medium tracking-wide my-2">
                  Warranty
                </h1>
                <p className="text-[15px] font-light capitalize">
                  Product warranty : Yes (5 days)
                </p>
                <p className="text-[15px] font-light capitalize">
                  SKU: SA948MT23H1QHNAFAMZ{" "}
                </p>
              </div>
              <div className=" flex flex-col gap-2">
                <h1 className="text-[20px] font-medium tracking-wide my-2">
                  Condition
                </h1>
                <p className="text-[15px] font-light capitalize">
                  Everything is working perfectly
                </p>
              </div>
            </div>
          </div>
          {/* section 5 */}
          <div className="max-w-[428px] w-full bg-[#F2F9FF]  max-h-[405px] rounded-[10.907px] p-2 px-8 pt-4 sm:px-12 shadow-sm border border-gray-100">
            <h1 className="text-[20px] font-medium tracking-wide my-2 capitalize">
              safety tips
            </h1>
            <Link className="text-red-400">see details here</Link>
            <h1 className="text-[20px] font-medium tracking-wide my-2 capitalize">
              Return Policy
            </h1>
            <p className="text-[15px] font-light capitalize">
              The buyer has 5 day to make any complain Regards to the item
            </p>
            <h1 className="text-[20px] font-medium tracking-wide my-2 capitalize md:pt-4">
              Delivery
            </h1>
            <p className="text-[15px] font-light capitalize md:mt-6">
              Buyer bears the cost of delivery and pickup
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetails