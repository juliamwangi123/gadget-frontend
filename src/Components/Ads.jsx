import React from 'react'
import Group from "../assets/group.png";


const Ads = () => {
  return (
    <div className="w-full max-w-[1480px] mx-auto select-none bg-[#F3F4F6] relative rounded-2xl">
      <div className="flex justify-end">
        <div className="md:w-1/3 text-gray-900 font-medium capitalize text-2xl font-sans my-24 lg:mr-48 sm:mr-44">
          <h1 className="leading-9 tracking-wide">
            Find your certified pre-owned phones, Computers, Electonics, Games &
            pick it up today.
          </h1>
          <div className="md:pt-9 lg:pb-2">
            <button
              className="text-xl hover:bg-blue-100 border border-[#0043C6] capitalize text-[#0043C6] px-32  py-3 rounded-lg tracking-wide font-bold"
              type="submit"
            >
              buy now
            </button>
          </div>
        </div>
        <div className="absolute top-[-20%] lg:-translate-x-[140%] md:-translate-x-[200%] sm:-translate-x-[100%]  -translate-x-[300%]">
          <img src={Group} alt="" className="sm:h-[34rem] sm:mr-14" />
        </div>
      </div>
    </div>
  );
}

export default Ads