import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../subcomponents/assets/logo.png"

const Signin = () => {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <nav className=" flex py-2">
        <NavLink to="/" className="">
          <img className="w-[5.5rem] h-[4.2rem]" src={logo} alt="" />
        </NavLink>
        <h1 className=" m-auto text-center font-medium text-2xl ">
          Login
        </h1>
      </nav>
      <section>
      <div className=" bg-[#F2F9FF]  rounded-[10px] w-2/3 md:w-1/2 mx-auto my-10">
        <div className=" flex flex-wrap p-7 justify-between mx-auto">
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
        <form className=" p-6">
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
            className=" bg-[#0043C6] rounded-[10px] w-full p-[10px] my-5 text-white font-bold"
            type="submit"
            value="Login"
          />
          <div className=" my-5">
            <input type="checkbox" id="remember" name="T&Cs" value="Remember" />
            <label for="Remember me" className=" text-[#00000094]">
              {" "}
              Remember Me
            </label>
            <p className=" inline float-right text-[#FF0000CC]">
              {" "}
              Forgot Your Password
            </p>
          </div>
          <p className=" text-[#00000094] text-center mb-8">
            {" "}
            Don't have an account?{" "}
            <span className=" text-[#FF0000CC]">Sign Up</span>
          </p>
        </form>
      </div>
    </section>
    </div>
  );
}

export default Signin