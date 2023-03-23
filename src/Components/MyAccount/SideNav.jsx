import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className="sidebar fixed hidden md:block md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-[#F2F9FF] rounded-[30px] m-3 shadow-[-4px -4px 4px rgba(0, 0, 0, 0.25)]  ">
      <div className="flex h-screen flex-col  bg-primary-60 text-[#0043C6] static">
        <Link to="/" className="">
          <img
            className="w-[5.5rem] h-[4.2rem] mx-auto"
            src="https://res.cloudinary.com/eiroro/image/upload/v1677254929/Group_205_oqwpou.svg"
            alt="GadgetHub Logo"
          />
        </Link>
        <nav
          aria-label="Main Nav"
          className="main-nav mt-5 flex flex-col w-full "
        >
          <Link
            to=""
            className="flex items-center mb-7 px-4 py-2.5 bg-[#FD0E0E1A] "
          >
            <img
              src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/Vector_nyutvk.svg"
              alt="Dashboard vector"
            />
            <span className="ml-3 text-sm font-medium text-[#FD0E0E]">
              Dashboard
            </span>
          </Link>

          <Link to="profile-details" className="flex items-center px-4 py-2">
            <img src=" https://res.cloudinary.com/eiroro/image/upload/v1678309244/Group_dvmlij.svg" />
            <span className="ml-3 text-sm font-medium"> Profile Details</span>
          </Link>
          <Link to="security-settings" className="flex items-center px-4 py-2">
            <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/mdi_account-security-outline_rv47lr.svg" />
            <span className="ml-2 text-sm font-medium"> Security Setting</span>
          </Link>

          <p className=" px-4 mt-7 mb-5"></p>
{/* Product page and sold items display the same thing */}
          <Link to="/sell-gadget" className="flex items-center px-5 py-2">
            <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309244/Group_1_sykplj.svg" />
            <span className="ml-3 text-sm font-medium"> Listing</span>
          </Link>
          <Link to="product-page" className="flex items-center px-4 py-2">
            <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/foundation_page-multiple_hpbpb9.svg" />
            <span className="ml-2 text-sm font-medium"> Product Page </span>
          </Link>
          <Link
            to="product-page"
            className="flex items-center px-4 py-2"
          >
            <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/foundation_page-multiple_hpbpb9.svg" />
            <span className="ml-2 text-sm font-medium"> Sold Items</span>
          </Link>
          <Link
            to="transaction-history"
            className="flex items-center px-4 py-2"
          >
            <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/foundation_page-multiple_hpbpb9.svg" />
            <span className="ml-2 text-sm font-medium">
              {" "}
              Transaction History
            </span>
          </Link>
          <Link
            className="flex items-center px-4 py-2"
          >
            <img src="https://res.cloudinary.com/eiroro/image/upload/v1678309243/Vector_1_w5eazq.svg" />
            <span className="ml-2 text-sm font-medium"> Logout</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
