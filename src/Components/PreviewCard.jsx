import React from 'react'
import { Link } from 'react-router-dom';
import { RiHeartFill } from "react-icons/ri"
import CurrencyFormat from '../constants/CurrencyFormatter';
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
} from "react-icons/md";


const PreviewCard = ({ product }) => {
  
    const { title, price, location,isSaved, uploaded_images } = product;
   

   
  return (
    <Link
      to={`/product-details/${product.id}`}
      className="bg-[#FFFFFF] max-w-[300px] w-full h-[400px] rounded-xl shadow-md transition Hover:duration-300 ease-in-out cursor-pointer hover:shadow-2xl"
    >
      <div className="flex flex-col pt-4 ml-6 pb-6">
        <div className="">
          <div className="flex justify-end mr-4">
            <RiHeartFill
              className={`${
                isSaved
                  ? "text-[#EB3223] cursor-pointer"
                  : "text-gray-300 cursor-pointer"
              }`}
              size={35}
            />
          </div>
          <div className="h-[11rem] w-full flex justify-center items-center">
            <Roll left>
              <img
                src={uploaded_images && uploaded_images[0]?.image}
                className="md:mr-8 h-full max-h-[10rem] max-w-[300px]"
                alt=""
              />
            </Roll>
          </div>
        </div>
        <div className=" pt-4">
          <h1 className="font-sans font-bold text-gray-900 line-clamp-2 pr-2">
            {title}
          </h1>
          <h1 className="font-sans font-bold text-[#0043C6]">
            <CurrencyFormat value={price} />
          </h1>
        </div>
        {/* <div className="flex justify-between my-2 pr-8">
          <div className="flex items-center">
            <MdOutlineStarPurple500 size={20} className="text-[#FF0000]" />
            <MdOutlineStarPurple500 size={20} className="text-[#FF0000]" />
            <MdOutlineStarPurple500 size={20} className="text-[#FF0000]" />
            <MdOutlineStarOutline size={20} className="text-[#FF0000]" />
            <MdOutlineStarOutline size={20} className="text-[#FF0000]" />
            <MdOutlineStarOutline size={20} className="text-[#FF0000]" />
          </div>
          <span className="font-sans font-semibold text-gray-900">(24)</span>

          <p className="text-gray-500 capitalize font-sans  font-light tracking-wider">
            used
          </p>
        </div> */}
        <div className="flex gap-4 items-center mt-4">
          <MdLocationOn size={25} className="text-gray-400 " />
          <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
            {location},Nigeria
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PreviewCard