import React from 'react'
import CurrencyFormat from '../../constants/CurrencyFormatter';
import { MdLocationOn } from "react-icons/md";

const SoldItemsCard = ({item}) => {
    const { uploaded_images,title,price,user } = item;
  return (
    <div className=" bg-[#F2F9FF] rounded-[10px] md:ml-56 py-4 px-2 max-w-[682px] w-full mx-auto flex justify-between mt-10">
      <div className="flex items-center gap-4 sm:gap-10 md:gap-20">
        <div className="my-4 ml-4 sm:ml-8 max-w-[127px]">
          <img
            src={uploaded_images[0]?.image}
            className=""
          />
        </div>
        <div className=" w-full max-w-[250px]">
          <p className="line-clamp-2 text-[10px]">{title}</p>
          <p className="text-sm">
            Brand:{" "}
            <span className=" text-[#00000080] text-sm">
              Samsung | Similar products from samsung
            </span>
          </p>
          <p className=" font-bold text-[12px]">
            <CurrencyFormat value={price} />{" "}
            <span className=" ml-8 font-normal">Used</span>
          </p>

          <div className="flex items-center text-[12px]">
            <MdLocationOn size={25} className="text-gray-400 " />
            <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
              Kaduna,Nigeria
            </p>
          </div>
          <p className=" font-medium text-[12px]">{user?.firstname}</p>
          <p className="text-[12px]">Abuja</p>
        </div>
      </div>
      <div className="flex items-center mr-5">
        <button className=" bg-[#FD0E0E] hover:bg-red-700 py-2 px-8 rounded-2xl text-sm font-semibold  text-red-100 ">
          Delete
        </button>
      </div>
    </div>
  );
}

export default SoldItemsCard
