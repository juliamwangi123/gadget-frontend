import React from "react";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
} from "react-icons/md";


const TransactionHover = () => {
  return (
    <div className=" md:ml-56 p-6">
      <div className=" flex w-full max-w-[500px] rounded-lg border bg-white">
        <img
          className=""
          src="https://res.cloudinary.com/eiroro/image/upload/v1678463313/1_4_1_rbwtxj.svg"
          width={300}
        />
        <div className=" space-y-2 py-3">
          <p className=" font-bold ">
            Samsung Galaxy A53,6.5” Super AMOLED Screen, 6GB/128GB...
          </p>
          <p className=" text-[#0043C6] font-bold">₦ 50,000</p>
          <div className="flex justify-between my-2 pr-8">
            <div className="flex items-center">
              <MdOutlineStarPurple500 size={15} className="text-[#FF0000]" />
              <MdOutlineStarPurple500 size={15} className="text-[#FF0000]" />
              <MdOutlineStarPurple500 size={15} className="text-[#FF0000]" />
              <MdOutlineStarOutline size={15} className="text-[#FF0000]" />
              <MdOutlineStarOutline size={15} className="text-[#FF0000]" />
              <MdOutlineStarOutline size={15} className="text-[#FF0000]" />
              <span className="font-sans font-semibold  text-gray-900">
                (24)
              </span>
            </div>

            <p className="text-gray-500 capitalize font-sans  font-light tracking-wider ml-5">
              used
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <MdLocationOn size={25} className="text-gray-400 " />
            <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
              Kaduna,Nigeria
            </p>
          </div>
          <p className="  text-[#0043C6] font-bold text-lg">
            Track Number: <span className=" font-thin">58769467</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionHover;
