import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../subcomponents/assets/logo.png";

const Signup = () => {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <nav className=" flex py-2">
        <NavLink to="/" className="">
          <img className="w-[5.5rem] h-[4.2rem]" src={logo} alt="" />
        </NavLink>
        <h1 className=" m-auto text-center font-medium text-2xl ">
          Create Your Account
        </h1>
      </nav>

      <section>
        <div className=" flex justify-between  ">
          <div className=" md:w-1/2 p-6">
            <div className=" bg-[#F2F9FF]  rounded-[10px]">
              <div className=" flex flex-wrap p-7 justify-between">
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
              <h2 className=" text-center text-xl font-normal">-OR-</h2>
              <form className=" p-6">
                <input
                  className=" rounded-[10px] bg-transparent border border-[#0000001A] text-sm p-5 w-full mb-4 "
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                />
                <input
                  className=" rounded-[10px] bg-transparent border border-[#0000001A] text-sm p-5 w-full mb-4 "
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
                <input
                  className=" rounded-[10px] bg-transparent border border-[#0000001A] text-sm p-5 w-full mb-4 "
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <input
                  className=" rounded-[10px] bg-transparent border border-[#0000001A] text-sm p-5 w-full mb-4 "
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                />
                <input
                  type="checkbox"
                  name="T&Cs"
                  value="Accept"
                  required
                />
                <label for="consent" className=" text-[#00000094]">
                  {" "}
                  I read and consent to the{" "}
                  <span className=" text-[#FF0000CC]">
                    Terms and Conditions
                  </span>
                </label>

                <input
                  className=" bg-[#0043C6] rounded-[10px] w-full p-[10px] my-5 text-white font-bold"
                  type="submit"
                  value="Create Account"
                />
                <p className=" text-[#00000094]">
                  {" "}
                  Already have an account?{" "}
                  <NavLink to="/account/login" className=" text-[#FF0000CC]">Login</NavLink>
                </p>
              </form>
            </div>
          </div>
          <div className=" hidden md:block m-auto h-fit  ">
            <img
              src="https://res.cloudinary.com/eiroro/image/upload/v1677002783/Group_373_qmepoo.svg"
              alt="vector"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
