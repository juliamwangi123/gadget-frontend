import React from 'react'
import Preview from './subcomponents/Preview';


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
              <h2 className="text-2xl text-neutral-900  font-medium">
                Safe Pickup.
              </h2>
              <p className="font-light sm:pt-3">
                No more meetings with random stranger in parking lots - pick up
                the gadget at a trusted delivery agent.
              </p>
            </div>
            <div className="sm:w-1/5 ">
              <div>
                <h2 className="text-2xl text-neutral-900  font-medium">
                  Secure Payment.
                </h2>
              </div>
              <p className="font-light sm:pt-3">
                Leave your stack of cash at home, you can buy any gadget on our
                site with a credit card at affordable price
              </p>
            </div>
            <div className="sm:w-1/5">
              <h2 className="text-2xl text-neutral-900  font-medium">
                Affordable Price.
              </h2>
              <p className="font-light sm:pt-3">
                Certified Cell combines the quality of a certified pre-owned
                gadget & the value of buying from a local sell
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex sm:pt-16 sm:pb-16">
            <button
              className="text-xl  hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-20 border-2 border-[#0043C6]  py-3 rounded-lg tracking-wide font-bold"
              type="submit"
            >
              Make a Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F4F6]">
        <div className="max-w-7xl m-auto">
          <h1 className="text-2xl text-neutral-900  font-medium capitalize tracking-wider sm:pt-10 ">
            The stats don’t Lie
          </h1>
          <p className="font-light sm:pt-5 sm:pb-12">
            Phone theft is real and Gadgethub helps keep you safe
          </p>
        </div>
      </div>
      <div className="max-w-7xl m-auto">
        <Preview />
      </div>
    </div>
  );
}

export default Hero