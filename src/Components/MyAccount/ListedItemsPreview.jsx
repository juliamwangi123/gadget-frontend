import React from "react";
import { MdLocationOn } from "react-icons/md";

const ListedItemsPreview = ({ product }) => {
  const { title, brand, price, state, seller, location, image } = product;
  return (
    <div className=" bg-[#F2F9FF] rounded-[10px] md:ml-56 py-4 px-2 w-3/4 mx-auto flex justify-between   mt-10">
      <div className=" flex space-x-9 ">
        <img src={image} width={200} />
        <div className=" ">
          <p>{title}</p>
          <p>
            Brand:{" "}
            <span className=" text-[#00000080]">
              {brand} | Similar products from {brand}
            </span>
          </p>
          <p className=" font-bold">
            ₦{price} <span className=" ml-8 font-normal">Used</span>
          </p>

          <div className="flex items-center">
            <MdLocationOn size={25} className="text-gray-400 " />
            <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
              {state},Nigeria
            </p>
          </div>
          <p className=" font-medium">{seller}</p>
          <p>{location}</p>
        </div>
      </div>
      <button className=" bg-[#FD0E0E] h-fit  rounded-2xl text-sm font-semibold px-4 text-white my-auto mr-4 ">
        Delete
      </button>
    </div>
  );
};

export default ListedItemsPreview;
