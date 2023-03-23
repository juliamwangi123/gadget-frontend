import React, { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

const DeleteAccount = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div>
      <section className=" w-3/4 float-right justify-center items-center mt-4 sm:mt-6">
        <div className=" bg-[#F2F9FF] rounded-[10px] max-w-[639px]  p-6 sm:p-8 md:p-10">
          <form className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="relative">
              <input
                className="peer focus:border-none rounded-[10px] bg-transparent border border-[#ADADAD] py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6"
                type="text"
                name="name"
                placeholder=" "
              />
              <label
                className="absolute text-[#A3A3A3] left-0 scale-100 duration-300 capitalize translate-x-4 px-3 tracking-wide -top-3 bg-[#F2F9FF] peer-placeholder-shown:top-3.5 peer-focus:-top-3 pointer-events-none peer-focus:text-blue-500 "
                htmlFor=""
              >
                Email address
              </label>
            </div>

            <div className=" relative flex items-center">
              {visible ? (
                <MdVisibility
                  onClick={toggleVisibility}
                  size={25}
                  className="absolute right-0 mr-5 text-[#A3A3A3] cursor-pointer"
                />
              ) : (
                <MdVisibilityOff
                  onClick={toggleVisibility}
                  size={25}
                  className="absolute right-0 mr-5 text-[#A3A3A3] cursor-pointer"
                />
              )}

              <input
                className="peer rounded-[10px] bg-transparent border border-[#ADADAD] py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full placeholder:font-medium px-4 sm:px-6 focus:border-none  placeholder-transparent"
                type={`${visible ? "text" : "password"}`}
                name="name"
                placeholder=" "
              />
              <label
                className="absolute translate-x-4 -top-3   peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-x-4 peer-placeholder-shown:scale-100 duration-300 pointer-events-none peer-focus:-top-3.5 peer-focus:text-blue-500 bg-[#F2F9FF] px-1 text-[#A3A3A3]"
                htmlFor=""
              >
                Password
              </label>
            </div>
          </form>
        </div>
        <button
          type="submit"
          className=" bg-[#0043C6] py-2 px-20 mt-6 rounded-md text-xl font-black text-white"
        >
          Continue
        </button>
      </section>
    </div>
  );
};

export default DeleteAccount;
