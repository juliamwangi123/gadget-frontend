import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import logo from "../subcomponents/assets/logo.png";

const Signup = () => {
  const [visible, setVisible] = useState(false);
   const toggleVisibility = () => {
     setVisible(prev => !prev); 
   };
  return (
    <div className="w-full mx-auto max-w-7xl">
      <nav className=" flex py-2">
        <NavLink to="/" className="">
          <img className="w-[5.5rem] h-[4.2rem]" src={logo} alt="" />
        </NavLink>
        <h1 className=" m-auto text-center font-medium text-[24px] leading-[34px] tracking-wide">
          Create Your Account
        </h1>
      </nav>

      <section className="mt-4 sm:mt-6 md:mt-8 sm:ml-6 md:ml-8">
        <div className="flex justify-between items-center">
          <div className="w-full max-w-[639px]">
            <div className="bg-[#F2F9FF]  rounded-[10px] p-8 sm:p-10 md:p-12">
              <div className=" flex flex-wrap justify-center sm:justify-between">
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
              <h2 className=" text-center text-[20px] font-light my-4 sm:my-8">
                -OR-
              </h2>
              <form className="">
                <div className="flex flex-col gap-4 sm:gap-8  md:gap-10">
                  <div className="relative">
                    <input
                      className="peer focus:border-none rounded-[10px] bg-transparent border border-[#ADADAD] py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6"
                      type="text"
                      name="name"
                      placeholder=" "
                    />
                    <label
                      className="absolute text-[#A3A3A3] left-0 scale-100 duration-300 capitalize translate-x-4 px-3 tracking-wide -top-3 bg-[#F2F9FF] peer-placeholder-shown:top-3.5 peer-focus:-top-3 pointer-events-none peer-focus:text-blue-500"
                      htmlFor=""
                    >
                      full name <span className="absolute top-1">*</span>
                    </label>
                  </div>
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
                      email address
                    </label>
                  </div>
                  <div className=" relative flex items-center">
                    {visible ? (
                      <MdVisibility
                        onClick={toggleVisibility}
                        size={25}
                        className="absolute right-0 mr-5 text-[#A3A3A3]"
                      />
                    ) : (
                      <MdVisibilityOff
                        onClick={toggleVisibility}
                        size={25}
                        className="absolute right-0 mr-5 text-[#A3A3A3]"
                      />
                    )}

                    <input
                      className="peer rounded-[10px] bg-transparent border border-[#ADADAD] py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6 focus:border-none"
                      type={`${visible ? "text" : "password"}`}
                      name="name"
                      placeholder=" "
                    />
                    <label
                      className="absolute px-2 translate-x-4 capitalize text-[#A3A3A3] -top-3  tracking-wide bg-[#F2F9FF] scale-100 duration-300 peer-placeholder-shown:top-3 pointer-events-none peer-focus:-top-3 peer-focus:text-blue-500"
                      htmlFor=""
                    >
                      password
                    </label>
                  </div>
                  <div className=" relative flex items-center">
                    {visible ? (
                      <MdVisibility
                        onClick={toggleVisibility}
                        size={25}
                        className="absolute right-0 mr-5 text-[#A3A3A3]"
                      />
                    ) : (
                      <MdVisibilityOff
                        onClick={toggleVisibility}
                        size={25}
                        className="absolute right-0 mr-5 text-[#A3A3A3]"
                      />
                    )}
                    <input
                      className="peer rounded-[10px] bg-transparent border border-[#ADADAD] py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6 focus:border-none"
                      type={`${visible ? "text" : "password"}`}
                      name="name"
                      placeholder=" "
                    />
                    <label
                      className="absolute px-2 translate-x-4 capitalize tracking-wide text-[#A3A3A3] -top-3 bg-[#F2F9FF] scale-100 duration-300 peer-placeholder-shown:top-3 peer-focus:-top-3 pointer-events-none peer-focus:text-blue-500"
                      htmlFor=""
                    >
                      confirm password
                    </label>
                  </div>
                </div>
                <div className="flex gap-4 items-center mt-4 sm:mt-8 md:mt-10">
                  <input
                    type="checkbox"
                    name="T&Cs"
                    value="Accept"
                    required
                    className="w-6 h-6 bg-transparent"
                  />
                  <label
                    for="consent"
                    className=" text-[#00000094] font-medium"
                  >
                    {" "}
                    I Read and Consent to the{" "}
                    <span className=" text-[#FF0000CC]">
                      Terms and Conditions
                    </span>
                  </label>
                </div>

                <div className="w-full max-w-[551px] flex flex-col mt-4 sm:mt-6 md:mt-8">
                  <button
                    className="bg-[#0043C6] rounded-[10px] text-[20px] capitalize text-white py-3 font-bold tracking-wide  grow hover:bg-black"
                    type="submit"
                  >
                    create account
                  </button>
                </div>
                <p className=" text-[#00000094] mt-4 sm:mt-6 md:mt-8 text-[15px] tracking-wide pb-2 sm:pb-4">
                  {" "}
                  Already have an account?{" "}
                  <NavLink
                    to="/account/login"
                    className=" text-[#FF0000CC] font-semibold tracking-wide text-[15px]"
                  >
                    Login
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
          <div className=" hidden md:block m-auto h-fit">
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
