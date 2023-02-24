import React from 'react'
import Safe from "../assets/safe.png"
import Secure from "../assets/secure.png";
import Price from "../assets/price.png"
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl m-auto">
        <div className="">
          <div className="sm:w-2/3 flex justify-center sm:justify-start capitalize text-2xl sm:pt-16">
            <h2 className="text-2xl text-neutral-900  font-medium capitalize tracking-wider">
              Why Should I Buy From Gadgethub ?
            </h2>
          </div>
          <div className="flex flex-col sm:px-12  sm:flex-row sm:justify-between sm:pt-16">
            <div className="sm:w-1/5">
              <div className="px-10 pb-4">
                <img className="w-16" src={Safe} alt="" />
              </div>
              <h2 className="text-2xl text-neutral-900  font-medium tracking-wider">
                Safe Pickup.
              </h2>
              <p className="font-light sm:pt-3">
                No more meetings with random stranger in parking lots - pick up
                the gadget at a trusted delivery agent.
              </p>
            </div>
            <div className="sm:w-1/5 ">
              <div className="">
                <div className="px-16 pb-4">
                  <img className="w-16" src={Secure} alt="" />
                </div>
                <h2 className="text-2xl text-neutral-900  font-medium tracking-wider">
                  Secure Payment.
                </h2>
              </div>
              <p className="font-light sm:pt-3">
                Leave your stack of cash at home, you can buy any gadget on our
                site with a credit card at affordable price
              </p>
            </div>
            <div className="sm:w-1/5">
              <div className="px-14 pb-4">
                <img className="w-16" src={Price} alt="" />
              </div>

              <h2 className="text-2xl text-neutral-900  font-medium tracking-wider">
                Affordable Price.
              </h2>
              <p className="font-light sm:pt-3">
                Certified Cell combines the quality of a certified pre-owned
                gadget & the value of buying from a local sell
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex sm:pt-10 sm:pb-16">
            <Link
              to="/products-page"
              className="text-xl capitalize hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-14 py-3 rounded-lg tracking-wide font-medium"
              type="submit"
            >
              buy now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero