import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPaymentFeedback } from '../actions/orderActions';
import { ORDER_FEEDBACK } from '../constants/orderConstants';
import {HiCheckCircle} from "react-icons/hi"
import { RiSecurePaymentFill, RiArrowRightSLine } from "react-icons/ri";
import { Link,useParams } from 'react-router-dom';

import Navbar from './Navbar';

const Transaction = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  

 

  const feedback = localStorage.getItem("paymentFeedback")
    ? JSON.parse(localStorage.getItem("paymentFeedback"))
    : {};
  
  const paidOrder = localStorage.getItem("paidOrder")
    ? JSON.parse(localStorage.getItem("paidOrder"))
    : [];
  const { orders } = paidOrder || {};
  const { time, transId } = feedback || {};

 
  
  return (
    <section className="w-full">
      {/* nav section */}
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <section className="max-w-7xl mx-auto flex justify-center w-full">
        <main className=" w-full mx-auto flex justify-center flex-col">
          <div className="flex justify-center items-center text-[#666666] gap-6">
            <RiSecurePaymentFill size={50} className="" />
            <div className="max-w-[100px] leading-5 capitalize text-[15px] tracking-wide">
              <p>secure payment</p>
            </div>
          </div>
          <div className="max-w-[745.76px] w-full mx-auto bg-[#F2F9FF] rounded-[5px] p-12 mt-8 md:mt-20">
            <div className="sm:my-5">
              <div className="flex flex-col items-center">
                <HiCheckCircle className="text-[#4BD37B] text-8xl pb-2" />
                <h1 className="text-[#4BD37B] sm:text-[20px] font-medium my-2">
                  Payment Successful
                </h1>
                <h1 className="sm:text-[20px] font-light tracking-wider text-center">
                  Transaction Number <span>{transId}</span>
                </h1>
              </div>
              <div className="flex md:gap-28  sm:gap-16 flex-wrap gap-1 mt-4 sm:mt-12 sm:ml-4">
                <h1 className="sm:text-[20px] font-medium tracking-wide">
                  Package :
                </h1>
                <div className="w-2/3 flex flex-col sm:gap-4 gap-2">
                  {orders &&
                    orders.map((order) => (
                      <p className="max-w-[505px] w-full text-[14px] font-light tracking-wide leading-[20px] line-clamp-2">
                        {order.name}
                      </p>
                    ))}
                </div>
              </div>
              <div className=" flex sm:gap-16 md:gap-24 flex-wrap gap-1 items-center mt-4 sm:mt-10 sm:ml-4">
                <h1 className="sm:text-[20px] font-medium tracking-wide">
                  Date Paid :
                </h1>
                <p className="text-[14px] font-light tracking-wider leading-[20px]">
                  {time?.substring(0, 10)}
                </p>
              </div>
              <div className="flex sm:gap-10 gap-4 flex-wrap justify-center sm:justify-start mt-4 sm:mt-14 mb-4 sm:mb-16 sm:ml-4">
                <button
                  className="bg-[#0043C6] sm:py-2.5 py-3 px-16 text-[17px] sm:text-[20px] text-white capitalize font-bold tracking-wider rounded-lg sm:px-20 hover:bg-black hover:transition-all	hover:duration-700 hover:ease-in-out"
                  type="submit"
                >
                  track order
                </button>
                <Link
                  to="/customers-feedback"
                  className="bg-transparent border hover:bg-teal-500 hover:text-teal-50 hover:border-teal-500 hover:transition-all	hover:duration-700 hover:ease-in-out border-[#0043C6] py-2.5 sm:text-[20px] text-[#0043C6] capitalize font-bold tracking-wide rounded-lg px-10 sm:px-14"
                  type="submit"
                >
                  continue shopping
                </Link>
              </div>
            </div>
          </div>
        </main>
      </section>
    </section>
  );
}

export default Transaction