import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { SavedProducts } from "../data";
import SavedItemsPreview from "../MyAccount/SavedItemsPreview";

import logo from "../subcomponents/assets/logo.png";

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
};

export default Signin;

// <section>
//   <aside className="sidebar fixed hidden md:block md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-[#F2F9FF] rounded-[30px] m-3 shadow-[-4px -4px 4px rgba(0, 0, 0, 0.25)]  ">
//     <div class="flex h-screen flex-col  bg-primary-60 text-[#0043C6] static">
//       <NavLink to="/" className="">
//         <img
//           className="w-[5.5rem] h-[4.2rem] mx-auto"
//           src={logo}
//           alt="GadgetHub Logo"
//         />
//       </NavLink>
//       <nav
//         aria-label="Main Nav"
//         className="main-nav mt-5 flex flex-col w-full "
//       >
//         <a
//           href="/user/home"
//           className="flex items-center mb-7 px-4 py-2.5 bg-[#FD0E0E1A] "
//         >
//           <img
//             src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/Vector_nyutvk.svg"
//             alt="Dashboard vector"
//           />
//           <span className="ml-3 text-sm font-medium text-[#FD0E0E]">
//             {" "}
//             Dashboard{" "}
//           </span>
//         </a>

//         <a
//           href="/user/self-affirmation"
//           class="flex items-center px-4 py-2"
//         >
//           <img src=" https://res.cloudinary.com/eiroro/image/upload/v1678309244/Group_dvmlij.svg" />
//           <span class="ml-3 text-sm font-medium"> Profile Details</span>
//         </a>
//         <a
//           href="/user/self-affirmation"
//           class="flex items-center px-4 py-2"
//         >
//           <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/mdi_account-security-outline_rv47lr.svg" />
//           <span class="ml-2 text-sm font-medium"> Security Setting</span>
//         </a>

//         <p className=" px-4 mt-7 mb-5">MORE</p>

//         <a
//           href="/user/self-affirmation"
//           class="flex items-center px-5 py-2"
//         >
//           <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309244/Group_1_sykplj.svg" />
//           <span class="ml-3 text-sm font-medium"> Listing</span>
//         </a>
//         <a
//           href="/user/self-affirmation"
//           class="flex items-center px-4 py-2"
//         >
//           <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/foundation_page-multiple_hpbpb9.svg" />
//           <span class="ml-2 text-sm font-medium"> Product Page </span>
//         </a>
//         <a
//           href="/user/self-affirmation"
//           class="flex items-center px-4 py-2"
//         >
//           <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/foundation_page-multiple_hpbpb9.svg" />
//           <span class="ml-2 text-sm font-medium"> Sold Items</span>
//         </a>
//         <a
//           href="/user/self-affirmation"
//           class="flex items-center px-4 py-2"
//         >
//           <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/foundation_page-multiple_hpbpb9.svg" />
//           <span class="ml-2 text-sm font-medium"> Transaction History</span>
//         </a>
//         <a
//           href="/user/self-affirmation"
//           class="flex items-center px-4 py-2"
//         >
//           <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/Vector_1_w5eazq.svg" />
//           <span class="ml-2 text-sm font-medium"> Logout</span>
//         </a>
//       </nav>
//     </div>
//   </aside>

//   <div className=" flex justify-between md:ml-52 py-2 ">
//     <div className="flex items-center bg-[#F2F9FF] rounded-md  w-1/2 ">
//       <svg
//         className="w-6 h-6 text-gray-400 mr-3"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M21 21l-4.873-4.873"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M15.5 10.5a5 5 0 11-7.07 0 5 5 0 017.07 0z"
//         />
//       </svg>
//       <input
//         type="text"
//         placeholder="Search.."
//         className="border-0 focus:outline-none bg-transparent w-full"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//     </div>
//     <div className=" flex justify-around space-x-8">
//       <Link
//         to="/cart-details"
//         className="capitalize font-sans font-medium text-base inline-flex gap-1  py-3 text-gray-900 tracking-wide "
//         type="button"
//       >
//         <FaShoppingCart size={20} />
//       </Link>
//       <div className=" flex justify-between  p-2 space-x-2">
//         <img src="https://res.cloudinary.com/eiroro/image/upload/v1678538820/Ellipse_1_a9e4x9.svg" />
//         <p className=" font-medium my-auto text-[#0043C6]">Daniel D</p>
//       </div>
//       <div className=" my-auto pr-6">
//         <img src="https://res.cloudinary.com/eiroro/image/upload/v1678538603/Group_1_ydpiac.svg" />
//       </div>

//     </div>
//   </div>
//   <div className=" bg-[#F2F9FF] text-[#0043C6] md:ml-44 text-lg font-bold flex justify-between">
//     <h2 className=" py-3 pl-11 ">Dashboard</h2>
//     <select className="bg-transparent border-none text-sm p-5  ">
//       <option>Naira(NGN)</option>
//       <option>Dollar(USD)</option>
//       <option>Shilling (KES)</option>
//       <option>Cedi (GHS)</option>
//     </select>
//   </div>
//   <h2 className=" ml-64 font-bold text-2xl py-4 text-[#0043C6]">
//     Saved Products
//   </h2>
//   <div className="mt-5 gap-10 flex flex-col p-9 sm:px-0 w-3/4 mx-auto sm:flex-row flex-wrap overflow-x-auto overflow-y-scroll md:ml-64 bg-[#F2F9FF]">
//     {SavedProducts.map((product) => (
//       <SavedItemsPreview key={product.id} product={product} />
//     ))}
//   </div>
// </section>
