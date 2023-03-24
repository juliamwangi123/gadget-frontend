import React from "react";
import { Link } from "react-router-dom";
import { RiHeartFill } from "react-icons/ri";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
} from "react-icons/md";

const SavedItemsPreview = ({ product }) => {
  const { title, price, location, image, isSaved } = product;

  return (
    <Link
      to={`/product-details/${product.id}`}
      className="bg-[#FFFFFF] md:w-[200px] mx-2 h-[266px] rounded-xl shadow-md transition Hover:duration-300 ease-in-out cursor-pointer hover:shadow-2xl"
    >
      <div className="flex flex-col p-4 ">
        <div className="">
          <div className="flex justify-end">
            <RiHeartFill
              className={`${
                isSaved
                  ? "text-[#EB3223] cursor-pointer"
                  : "text-gray-300 cursor-pointer"
              }`}
              size={25}
            />
          </div>
          <div className="h-[3rem] w-full flex justify-center items-center">
            <img src={image} width={120} className="md:mr-8" alt="" />
          </div>
        </div>
        <div className=" mt-10 text-sm ">
          <div>
            <h1 className="font-sans font-bold text-gray-900 line-clamp-2">
              {title}
            </h1>
            <h1 className="font-sans font-bold text-[#0043C6]">₦ {price}</h1>
          </div>
          <div className="flex justify-between my-2 pr-8">
            <div className="flex items-center">
              <MdOutlineStarPurple500 size={15} className="text-[#FF0000]" />
              <MdOutlineStarPurple500 size={15}  className="text-[#FF0000]" />
              <MdOutlineStarPurple500 size={15} className="text-[#FF0000]" />
              <MdOutlineStarOutline size={15} className="text-[#FF0000]" />
              <MdOutlineStarOutline size={15} className="text-[#FF0000]" />
              <MdOutlineStarOutline size={15} className="text-[#FF0000]" />
            <span className="font-sans font-semibold  text-gray-900">(24)</span>
            </div>

            <p className="text-gray-500 capitalize font-sans  font-light tracking-wider ml-5">
              used
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <MdLocationOn size={25} className="text-gray-400 " />
            <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
              {location},Nigeria
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SavedItemsPreview;
