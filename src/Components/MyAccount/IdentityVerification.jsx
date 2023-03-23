import React from "react";

const IdentityVerification = () => {
  return (
    <div>
      <section className=" w-3/4 float-right justify-center items-center mt-4 sm:mt-6">
        <div className=" bg-[#F2F9FF] rounded-[10px] max-w-[639px]  p-6 sm:p-8 md:p-10">
          <form>
            <select className="bg-transparent text-sm p-5 border w-full border-[#0000001A] text-gray-500  rounded-[10px] mb-4  ">
              <option value="" disabled selected>
                Select ID
              </option>
              <option value="Passport">Passport</option>
              <option value="National ID card">National Identity Card</option>
              <option value="Driver's License">Driver's License</option>
            </select>
            <input className="bg-transparent text-sm p-5 border w-full border-[#0000001A] text-gray-500  rounded-[10px] " type="text" placeholder="Enter the ID number" />
          </form>
        </div>
        <button
          type="submit"
          className=" bg-[#0043C6] py-2 px-20 mt-6 rounded-md text-xl font-black text-white"
        >
          Save
        </button>
      </section>
    </div>
  );
};

export default IdentityVerification;
