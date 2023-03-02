import React from "react";
import { NavLink } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="flex flex-col justify-center w-full capitalize m-8 gap-6">
      <div className="">
        <NavLink
          to="/account/register"
          className="capitalize  bg-[#0043C6] text-blue-100 py-2 px-8 text-base rounded-lg  hover:bg-black hover:border-black font-sans font-medium"
          type="submit"
        >
          create account
        </NavLink>
      </div>

      <div className="pb-16">
        <NavLink
          
          to="/account/login"
          className="py-2 px-16 text-base hover:bg-blue-100 text-[#0043C6] rounded-lg bg-white border border-[#0043C6] capitalize font-sans font-bold"
          type="submit"
        >
          sign in
        </NavLink>
      </div>
    </div>
  );
};

export default DropDown;
