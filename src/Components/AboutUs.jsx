import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import CompanyOverview from "./CompanyOverview";
import OurMission from "./OurMission";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("Company Overview");

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  const activeText =
    activeTab === "Company Overview" ? "Company Overview" : "Our Mission";
  return (
    <div>
      <div className=" px-6 pb-60">
        <p className=" font-medium text-xl">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          &gt;{" "}
          <Link to="/about-us" className="cursor-pointer">
            About Us
          </Link>{" "}
          &gt; <span className=" text-[#00000080]">{activeText}</span>{" "}
        </p>
        <h1 className=" font-bold text-2xl my-9">{activeText}</h1>
        <div className=" flex md:flex-row flex-col justify-between ">
          <div className=" md:w-1/4 bg-[#F2F9FF] rounded-xl text-xl mb-8 md:mb-0 font-medium md:min-h-[679px]">
            <p
              className={`cursor-pointer p-6 ${
                activeTab === "Company Overview" ? "bg-[#0043C680]" : ""
              }`}
              onClick={() => handleClick("Company Overview")}
            >
              Company Overview
            </p>
            <p
              className={`cursor-pointer p-6 ${
                activeTab === "Our Mission" ? "bg-[#0043C680]" : ""
              }`}
              onClick={() => handleClick("Our Mission")}
            >
              Our Mission
            </p>
            <p className="cursor-pointer p-6">
              <Link to="/contact-us" className="cursor-pointer">
                Contact Us
              </Link>
            </p>
          </div>
          <div className=" md:w-2/3 bg-[#F2F9FF] rounded-xl p-8">
            {activeTab === "Company Overview" && <CompanyOverview />}
            {activeTab === "Our Mission" && <OurMission />}
            {activeTab === "Executive Team" && <CompanyOverview />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
