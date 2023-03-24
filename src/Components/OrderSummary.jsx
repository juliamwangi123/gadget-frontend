import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { orderRequest } from "../actions/orderActions";
import Spinner from "./Spinner";
import Error from "./Error";
import CurrencyFormat from "../constants/CurrencyFormatter";
import { orderPay,getPaymentFeedback } from "../actions/orderActions";
import { ORDER_PAY_RESET } from "../constants/orderConstants";

import { PayPalButton } from "react-paypal-button-v2";


const OrderSummary = () => {
  const [sdk, setSdkReady] = useState(false)

  const { id } = useParams();
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.orderDetails);
  const orderpay = useSelector((state) => state.orderPay);

  const { loading: loadingPay, success: successPay} = orderpay || {};

  const { loading, error, orderItems } = orderData;
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };

  const { city, address, country } = orderItems?.shippingAddress || {};

  const { totalPrice,isPaid,paidAt } = orderItems || {};

 

  const navigate = useNavigate()

  //AWfYf3BOzxWq90sCNaedRCUuMmkM3WBAjRDUdGFsKmcFC1ZS99XSM0PFYHShfcQH3aVk5MXJB-C-9fMo
  const paymentScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AWfYf3BOzxWq90sCNaedRCUuMmkM3WBAjRDUdGFsKmcFC1ZS99XSM0PFYHShfcQH3aVk5MXJB-C-9fMo";
    script.async = true;
    script.onload = () => {
      setSdkReady(true)
    }
    document.body.appendChild(script);
  }
 

  useEffect(() => {
    if (!orderItems || successPay) {
      dispatch({type: ORDER_PAY_RESET})
      dispatch(orderRequest(id));
    } else if (!isPaid) {
      if (!window.paypal) {
        paymentScript();
      } else {
        setSdkReady(true)

      }
    }
  }, [dispatch, id, orderItems,successPay,isPaid]);
 

  


  const successPaymentHandler = (status) => {
    
    localStorage.removeItem("paidOrder");
  
    if (status) {
      const time = status.create_time;
      const transId = status.id; 
      dispatch(getPaymentFeedback({
        time, transId
      }));
      
    }
    dispatch(orderPay(id))
    dispatch(orderRequest(id));
     dispatch({ type: ORDER_PAY_RESET });

    navigate(`/payment-success/${id}`);

  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          {loading ? (
            <Spinner />
          ) : error ? (
            <Error error={error} />
          ) : (
            <div className="w-full">
              <div className="my-4 flex items-center justify-center gap-4 sm:gap-8 md:gap-10">
                <h1 className="text-4xl inline-block text-[#34a27d]">
                  Order:{" "}
                  <span className="text-xl text-[#426775]">
                    {orderItems?.orderNumber}
                  </span>
                </h1>
                <h1 className="text-4xl inline-flex items-center gap-2 text-emerald-500">
                  Payment Status:{" "}
                  <span className="text-xl">
                    {orderItems?.isPaid ? (
                      <button className="bg-teal-500 capitalize py-1 px-6 rounded-md text-base font-serif text-teal-100">
                        paid {""}: {paidAt.substring(0,10)}
                      </button>
                    ) : (
                      <button className="bg-[#e3d9a5] text-[#5b3e28] capitalize py-1 px-6 rounded-md text-base font-serif">
                        not paid
                      </button>
                    )}
                  </span>
                </h1>
              </div>
              <div className="sm:mt-10 flex flex-wrap sm:gap-8 gap-4">
                <div className="flex flex-col sm:gap-10">
                  {orderItems?.orders &&
                    orderItems.orders.map((order) => (
                      <div
                        key={order.id}
                        className="shadow-md border rounded-md border-slate-200 flex gap-8 flex-wrap"
                      >
                        <div className="max-w-[150px] mx-auto md:mx-0 h-full max-h-[200px]">
                          <img
                            src={order.image}
                            alt=""
                            className="h-full"
                          />
                        </div>
                        <div className=" flex flex-col gap-8 my-4 pb-8 mx-4">
                          <h1 className="max-w-xl line-clamp-1 text-xl font-semibold">
                            {order.name}
                          </h1>
                          <div className=" flex justify-between">
                            <button
                              className="bg-slate-100 py-2 px-8 rounded-md font-light text-lg"
                              type="submit"
                            >
                              {" "}
                              Quantity:{" "}
                              <span className="font-medium">
                                {order.quantity < 1 && "01"}
                              </span>
                            </button>
                            <div className="">
                              <h1 className="font-bold text-2xl">
                                <CurrencyFormat value={order.price} />
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="max-w-[350px] w-full">
                  <h1 className="text-4xl capitalize font-semibold pb-4 sm:pb-6">
                    order details
                  </h1>
                  <div className="flex flex-col gap-4 sm:gap-8">
                    <div className="">
                      <h1 className="capitalize text-xl font-medium tracking-wide">
                        shipping address
                      </h1>
                      <p className="flex flex-wrap gap-2">
                        <span>{address}</span>
                        <span>{city}</span>,<span>{country}</span>
                      </p>
                    </div>
                    <div className="">
                      <h1 className="capitalize text-xl font-medium tracking-wide">
                        payment method
                      </h1>
                      <img
                        src="https://res.cloudinary.com/dq4fj9ops/image/upload/v1677795043/Images/PAY_ucmxyx.png"
                        alt=""
                        className="max-w-[112.76px] max-h-[40px] pt-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="flex justify-between text-lg capitalize text-gray-800 font-medium">
                        <span>subtotal</span>
                        <span>
                          <CurrencyFormat value={totalPrice} />
                        </span>
                      </p>
                      <p className="flex justify-between text-lg capitalize text-gray-800 font-medium">
                        <span>discount</span>
                        <span>
                          <CurrencyFormat value={`0`} />
                        </span>
                      </p>
                      <p className="flex justify-between text-lg capitalize text-gray-800 font-medium">
                        <span>shipping</span>
                        <span>
                          <CurrencyFormat value={`0`} />
                        </span>
                      </p>
                      <div className="border-t-2 border-gray-200 w-full"></div>
                      <p className="flex justify-between text-lg capitalize font-semibold">
                        <span>total</span>
                        <span>
                          <CurrencyFormat value={totalPrice} />
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    {!isPaid && (
                      <div className="">
                        {loadingPay && <Spinner />}
                        {!sdk ? (
                          <Spinner />
                        ) : (
                          <PayPalButton
                            style={{
                              layout: "vertical",
                              color: "blue",
                              shape: "rect",
                              label: "paypal",
                            }}
                            amount={totalPrice}
               
                            onSuccess={successPaymentHandler}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
