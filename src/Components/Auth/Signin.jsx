import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

import logo from "../subcomponents/assets/logo.png"

const Signin = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div className="w-full mx-auto max-w-7xl">
      <nav className=" flex py-2">
        <NavLink to="/" className="">
          <img className="w-[5.5rem] h-[4.2rem]" src={logo} alt="" />
        </NavLink>
        <h1 className=" m-auto text-center font-medium text-[24px] tracking-wide">
          Login
        </h1>
      </nav>
      <section className="flex justify-center items-center mt-4 sm:mt-6">
        <div className=" bg-[#F2F9FF] rounded-[10px] max-w-[639px] w-full p-6 sm:p-8 md:p-10">
          <div className=" flex flex-wrap justify-between">
            <img
              src="https://res.cloudinary.com/eiroro/image/upload/v1677002782/Group_374_lbpcjg.svg"
              alt="Sign up with Google"
              className=" mb-4 md:mb-0"
            />
            <img
              src="https://res.cloudinary.com/eiroro/image/upload/v1677002782/Group_375_xlfcsi.svg"
              alt="Sign up with Facebook"
              className=" mb-4 md:mb-0"
            />
          </div>
          <div className="flex justify-center my-4 sm:my-8">
            <p className="text-[20px] uppercase font-light">-or-</p>
          </div>
          <form className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="relative">
              <input
                className="peer rounded-[10px] bg-transparent border border-[#ADADAD] py-3  placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6 placeholder:text-[#F2F9FF] focus:border-none "
                type="text"
                name="name"
                placeholder="Email Address"
              />
              <label
                className="absolute pointer-events-none left-0 peer-placeholder-shown:scale-100 duration-300 -top-[10.5px] translate-x-4 text-[#A3A3A3] font-medium text-sm peer-placeholder-shown:text-[14px] peer-placeholder-shown:top-4 bg-[#F2F9FF] px-2 peer-focus:-top-[10.5px] peer-focus:text-sm peer-focus:text-blue-500"
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
                className="peer rounded-[10px] bg-transparent border border-[#ADADAD] py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6 focus:border-none  placeholder-transparent"
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

            <div className="w-full max-w-[551px] flex flex-col">
              <button
                className="bg-[#0043C6] rounded-[10px] text-[20px] capitalize text-white py-2.5 font-bold tracking-wide  grow hover:bg-black"
                type="submit"
              >
                login
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="T&Cs"
                  value="Remember"
                />
                <label
                  for="Remember me"
                  className=" text-[#00000094] text-[16px] font-medium"
                >
                  {" "}
                  Remember Me
                </label>
              </div>
              <p className="text-[15px] font-medium text-[#FF0000CC] mr-2">
                {" "}
                Forgot Your Password ?
              </p>
            </div>
            <p className=" text-[#00000094] text-center mb-8 text-[15px] font-medium tracking-wide md:pb-6">
              {" "}
              Don't have an account?{" "}
              <NavLink to="/account/register" className=" text-[#FF0000CC]">
                Sign Up
              </NavLink>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signin