import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { getUserProfile } from "../../actions/userActions";
import DashboardTitle from "./DashboardTitle";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  


  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  console.log(location.pathname)
  const title = (location.pathname == "/my-account" && "Dashboard" ? location.pathname == "/my-account/profile-details" && "Dashboard" : "Profile Details") 
  const userData = useSelector(state => state.profileInfo)

  const { sucess, loading, profileInfo } = userData || {};
  const cartData = useSelector((state) => state.cart);
  const loggeduser = useSelector((state) => state.userLogin);
  const { loggedUser } = loggeduser || {};
  const userProfile = useSelector((state) => state.userDetails);
  const { userDetails } = userProfile || {};
  const {  firstname,email} = userDetails || {};

  const { image, user } = profileInfo || {};
  
  const { cartItems } = cartData;
  
 const cartCount = cartItems.length
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    if (!firstname) {
    dispatch(getUserProfile());
      
    }
  }, [dispatch,firstname]);
  return (
    <div className=" mb-6">
      {" "}
      <div className=" flex justify-between md:ml-52 py-2 ">
        <div className="flex items-center bg-[#F2F9FF] rounded-md  w-1/2 ">
          <svg
            className="w-6 h-6 text-gray-400 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.873-4.873"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.5 10.5a5 5 0 11-7.07 0 5 5 0 017.07 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search.."
            className="border-0 focus:outline-none bg-transparent w-full"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className=" flex justify-around space-x-8">
          <Link
            to="/cart-details"
            className="capitalize font-sans font-medium text-base inline-flex gap-1  py-3 text-gray-900 tracking-wide "
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
          </Link>
          <div className=" flex justify-between  p-2 space-x-2">
            <img
              src={
                image
                  ? image
                  : "https://res.cloudinary.com/seeders/image/upload/v1679656836/Blaone/user_318-725053_syffyp.png"
              }
              className="max-w-[30px] max-h-[30px] rounded-full"
            />
            <p className=" font-medium my-auto text-[#0043C6]">{firstname}</p>
          </div>
          <Link to="security-settings" className=" my-auto pr-6">
            <img src="https://res.cloudinary.com/eiroro/image/upload/v1678538603/Group_1_ydpiac.svg" />
          </Link>
        </div>
      </div>
      <DashboardTitle title={title} />
    </div>
  );
};

export default DashboardHeader;
