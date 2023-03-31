import React, { useState,useEffect } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_HIDE,TOGGLE_SHOW } from "../constants/userConstants";
import { logoutUser } from "../actions/userActions";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { Navigate } from "react-router-dom";

import { toast } from "react-toastify";
import Slide from "react-reveal/Slide";


const Navbar = ({ cartCount }) => {

  const [OpenMobile, SetMobile] = useState(true);

  const [searchTerm , setSearchTerm] = useState("");

  const dispatch = useDispatch()
  let navigate = useNavigate()
 

  const userData = useSelector(state => state.userLogin)

  const { userLogin } = userData;


  const logout = () => {
    dispatch(logoutUser())
    toast.success("Logged out successfully", {
      position: toast.POSITION.TOP_CENTER
    });
  }
  

  const toggle = () => {
    SetMobile((prev) => !prev);
  };



  const searcHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      
// &page=1
      navigate(`/?search=${searchTerm}`)
    } else {
      navigate(location.pathname)
    }
   }

  return (
    <div className="w-full">
      <div className="max-w-[1480px] mx-auto sm:pt-6">
        <div className="md:flex gap-10 w-full hidden">
          <div className="flex items-center gap-8 w-3/5">
            <Link to="/" className="cursor-pointer">
              <img className="w-[5.5rem] h-[4.2rem]" src={logo} alt="" />
            </Link>
            <div className="w-full">
              <form
                onSubmit={searcHandler}
                className="relative flex items-center text-gray-500"
              >
                <RiSearchLine className="w-5 h-5 absolute ml-3 pointer-events-none" />
                <input
                  type="search"
                  className="w-full bg-inherit pr-3 pl-10 py-2 font-serif focus:h-12  placeholder:text-gray-500 rounded-lg border-2 border-zinc-400 focus:border-none"
                  onFocus={() => dispatch({ type: TOGGLE_SHOW })}
                  onBlur={() => dispatch({ type: TOGGLE_HIDE })}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Products,Brands and Categories "
                />
                <div className="px-5">
                  <button
                    className="text-sm py-2.5 px-8  hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 font-medium  border-2 border-[#0043C6] uppercase  rounded-lg"
                    type="submit"
                  >
                    search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="px-10 sm:pt-4 ">
            <div className="flex gap-12">
              <div className="capitalize">
                <Link to="/contact-us" className="cursor-pointer">
                  <button
                    className="capitalize font-sans font-medium text-base text-gray-900 "
                    type="button"
                  >
                    contact us
                  </button>
                </Link>
              </div>
              <div className="">
                <Menu as="div" className="relative">
                  <Menu.Button className="flex gap-2 items-center">
                    <BsPersonFill size={25} />
                    <span className="capitalize text-base text-gray-900 font-medium">
                      account
                    </span>
                    <AiOutlineDown />
                  </Menu.Button>
                  <Menu.Items
                    as="div"
                    className="flex flex-col absolute z-10 -translate-x-[30%] translate-y-3 p-6 bg-[#F9FCFF] border-2 border-white  bg-opacity-50 rounded-md shadow-2xl w-[250px] items-center"
                  >
                    {userLogin ? (
                      <section className={`${userLogin ? "" : "hidden"}`}>
                        <Menu.Item>
                          <Link
                            className="inline-flex items-center gap-6 text-[#0043C6]"
                            to={`/my-account`}
                          >
                            <BsPersonFill size={30} />
                            <span className="text-[18.0682px] capitalize font-bold text-[#0043C6] tracking-wide">
                              my account
                            </span>
                          </Link>
                        </Menu.Item>
                        <Menu.Item as="div" className="mt-12 mb-4">
                          <Link
                            onClick={logout}
                            className="py-3 hover:bg-emerald-50 border border-[#0043C6] bg-white px-16 text-[15px] capitalize text-[#0043C6] font-medium tracking-wider rounded-md"
                          >
                            Logout
                          </Link>
                        </Menu.Item>
                      </section>
                    ) : (
                      <div>
                        <Menu.Item as="div" className="mt-10">
                          <Link
                            to="/account/register"
                            className="py-3 bg-[#0043C6] px-8 text-[15px] capitalize hover:bg-black text-white font-medium tracking-wide rounded-lg cursor-pointer"
                          >
                            create account
                          </Link>
                        </Menu.Item>
                        <Menu.Item as="div" className="mt-12 mb-4">
                          <Link
                            to="/account/login"
                            className="py-3 hover:bg-emerald-50 border border-[#0043C6] bg-white px-16 text-[15px] capitalize text-[#0043C6] font-medium tracking-wider rounded-md"
                          >
                            sign in
                          </Link>
                        </Menu.Item>
                      </div>
                    )}
                  </Menu.Items>
                </Menu>
              </div>

              <div>
                <Link
                  to="/cart-details"
                  className="capitalize font-sans font-medium text-base inline-flex gap-1 text-gray-900 tracking-wide relative"
                  type="button"
                >
                  <FaShoppingCart size={20} />
                  {cartCount > 0 ? (
                    <span className="absolute translate-x-2 -translate-y-1 w-4 h-4 rounded-full text-white inline-flex items-center justify-center text-[11px] bg-orange-600">
                      {cartCount}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                  cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-8">
          <div>
            <div>
              <div className="block  md:hidden" onClick={toggle}>
                {!OpenMobile ? (
                  <AiOutlineClose size={25} className="text-red-500 mr-4" />
                ) : (
                  <AiOutlineMenu size={25} className="text-blue-900 mr-4" />
                )}
              </div>
              <div
                className={
                  !OpenMobile
                    ? "fixed md:left-[-100%] top-0 left-0 pt-12 flex justify-center w-[60%] h-screen bg-opacity-100 bg-black shadow-md ease-in-out duration-500"
                    : "fixed left-[-100%]"
                }
              >
                <ul className="capitalize font-serif font-medium text-2xl text-center">
                  <li className="pt-8">
                    <a href="">
                      <button
                        className="text-sm py-2.5 px-8  hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 font-medium  border-2 border-[#0043C6] uppercase  rounded-lg"
                        type="submit"
                      >
                        sign in
                      </button>
                    </a>
                  </li>
                  <li className="pt-8 w-full border-b-2 border-black">
                    <a href="">my account</a>
                  </li>
                  <li className="pt-8">
                    <a href="">orders</a>
                  </li>
                  <li className="pt-8">
                    <a href="">saved items</a>
                  </li>
                  <li className="pt-8">
                    <a href="">Contact us</a>
                  </li>
                  <li className="pt-8">
                    <a href="">cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
