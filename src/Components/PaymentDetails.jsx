import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "../constants/CurrencyFormatter";
import { placeOrder } from '../actions/orderActions';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from "./Footer";
import flip from "../assets/Pinfo/flip.png";
import { toast } from "react-toastify";
import { ORDER_RESET } from '../constants/orderConstants';
import { RiSecurePaymentFill, RiArrowRightSLine } from "react-icons/ri";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
  MdDeleteOutline,
} from "react-icons/md";

const PaymentDetails = () => {
  const dispatch = useDispatch()

  const cartData = useSelector((state) => state.cart);
  const orderData = useSelector((state) => state.orderItems);

  const { success, error, order } = orderData
  

  const { shippingDetails, cartItems, paymentMethod } = cartData;
  
const totalPrice = cartItems.reduce(
  (acc, item) => acc + Number.parseFloat(item.price),
  0
);
  
function generateOrderNumber() {
  const timestamp = new Date().getTime().toString();
  const random = Math.floor(Math.random() * 100000000)
    .toString()
    .substring(0, 4);
  return timestamp.substring(timestamp.length - 4) + random;
}

  const navigate = useNavigate()
  useEffect(() => {
    if (success) {
      navigate(`/order-summary/${order.id}`);
      dispatch({type: ORDER_RESET})
    }
    
  },[success,order,navigate])

  
  const makeOrder = () => {
    dispatch(
      placeOrder({
        orderItems: cartItems,
        orderNumber: generateOrderNumber(),
        shippingDetails: shippingDetails,
        paymentMethod: paymentMethod.paymentMethod,
        totalPrice: totalPrice
      })

      
     
    );
    if (error) {
      toast.info(`Log in and logout again to solve this error (${error})`, {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
    }
    localStorage.removeItem("paidOrder");
    localStorage.removeItem("paymentFeedback");
  }

  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <section className="w-full">
      {/* nav section */}
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <section className="max-w-7xl mx-auto flex justify-center w-full">
        <main className=" w-full mx-auto">
          <div className="flex justify-center items-center text-[#666666] gap-6">
            <RiSecurePaymentFill size={50} className="" />
            <div className="max-w-[100px] leading-5 capitalize text-[15px] tracking-wide">
              <p>secure payment</p>
            </div>
          </div>
          <div className="mx-auto max-w-[852px] flex justify-between mt-4 sm:mt-10 px-4">
            <h1 className="sm:text-[20px] font-medium uppercase tracking-wide">
              order summary
            </h1>
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="sm:text-[20px] uppercase text-[#FF0000] inline-flex items-center"
              >
                SEE DETAILS <RiArrowRightSLine />{" "}
              </button>

              <div
                className={`max-w-[838px] w-[350px] md:w-[838px] divide-y divide-gray-400  ${
                  hovering ? "" : "hidden"
                } bg-[#F2F9FF] rounded-xl shadow-xl border-2 border-gray-100 absolute -translate-x-[65%]  sm:-translate-x-[50%]`}
              >
                {cartItems &&
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex px-4 gap-10 flex-col sm:flex-row md:gap-24 sm:px-12 p-3 items-center"
                    >
                      <img
                        src={item.image[0].image}
                        alt=""
                        className="max-w-[200px] w-full object-contain max-h-[200px]"
                      />
                      <div className="">
                        <h1 className="max-w-[352px] text-[16px] leading-[23px] font-light tracking-wide line-clamp-2">
                          {item.title}
                        </h1>
                        <p className="sm:mt-2 font-light max-w-[347px]">
                          Brand:
                          <span className="text-[14px]">
                            Samsung | Similar products from Samsung
                          </span>
                        </p>

                        <div className="">
                          <p className="font-bold pb-1">
                            <CurrencyFormat value={item.price} />
                          </p>
                          <div className="flex justify-between">
                            <div className="flex items-center gap-4">
                              <MdLocationOn
                                size={25}
                                className="text-gray-400 "
                              />
                              <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
                                kaduna ,Nigeria
                              </p>
                            </div>
                            <p className="font-light">Used</p>
                          </div>
                          <p className="text-[20px] capitalize font-bold tracking-wider py-2">
                            daniel Dada
                          </p>
                          <p className="text-[20px] font-light tracking-wide">
                            Zone 9-Police Station Kaduna
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="max-w-[852px] bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100 mx-auto flex justify-between px-4 py-3 mt-4 sm:mt-7">
            <h1 className="sm:text-[20px] font-medium">TOTAL TO PAY</h1>
            <h1 className="sm:text-[20px] font-bold sm:mr-10">
              <CurrencyFormat value={totalPrice} />
            </h1>
          </div>
          <div className="px-4 mx-auto max-w-[852px] my-4 sm:my-5">
            <h1 className="sm:text-[20px] text-[15px] font-medium">
              YOU WILL PAY WITH
            </h1>
          </div>
          <div className="max-w-[852px] bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100 mx-auto flex justify-between p-6 mt-4 sm:mt-7">
            <div className="w-full">
              <div className="flex justify-between pb-4 sm:pb-8">
                <img
                  src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1677795043/Images/PAY_ucmxyx.png"
                  alt=""
                  className="max-w-[200px] max-h-8"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1678805045/PCYJMyaB_400x400_gucrrm.png"
                    alt=""
                    className="max-w-[300px] w-full max-h-8 rounded-md"
                  />
                </div>
              </div>
              <div className="border-t my-2 border-gray-400"></div>
              <div className="flex justify-center pt-2 text-[15px] sm:text-[20px]">
                <button className="text-[#FF0000CC] font-medium ">
                  USE A DIFFERENT PAYMENT METHOD
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 sm:mt-8">
            <button
              onClick={makeOrder}
              className="bg-[#0043C6] sm:text-[20px] text-white py-2.5 rounded-md  font-bold px-10 sm:px-28 tracking-wide hover:bg-black"
              type="submit"
            >
              PAY NOW: <CurrencyFormat value={totalPrice} />
            </button>
          </div>
          <div className="text-center max-w-[743px] flex justify-center w-full mx-auto mt-4 px-2 md:px-0 sm:mt-14">
            <p className="text-[16px] font-light capitalize tracking-wide">
              By tapping "PAY NOW" I accept GADGETHUB Payment Terms &
              Conditions, General Terms and Conditions, and Privacy and Cookie
              Notice
            </p>
          </div>
          <div className="max-w-[1005px] text-center flex justify-center mx-auto mt-4 sm:mt-10">
            <p className="text-[16px] capitalize tracking-wide font-light">
              <span>Please note:</span> GADGETHUB will never ask you for your
              password, PIN, CVV or full card details over the phone or via
              email. Need help? Contact us on
              https://www.getdphone.com.ng/contact/
            </p>
          </div>
        </main>
      </section>
      <div className="">
        <Footer />
      </div>
    </section>
  );
}

export default PaymentDetails