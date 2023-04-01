import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userOrderItemsRequest } from "../../actions/orderActions";
import { transaction } from "../data";
import Error from "../Error";
import Spinner from "../Spinner";
import TransactionCard from "./TransactionCard";
import {GrTransaction} from "react-icons/gr"


const TransactionHistory = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userOrderItemsRequest())
  }, [dispatch])
  
  const orderItems = useSelector((state) => state.userOrderItems);

  const { loading, error, userOrderItems } = orderItems || {};
  
  

 



  return (
    <div className=" bg-[#F2F9FF] rounded-lg w-full max-w-[1050px] md:ml-56 ">
      <h2 className=" font-bold text-2xl text-[#0043C6] px-8 pt-3">
        Transaction History
      </h2>

      <div
        className={`${ userOrderItems && userOrderItems?.length !== 0 && "hidden"} px-4 sm:px-9 flex flex-col gap-4  items-center justify-center mx-auto text-center w-full max-w-[400px] pb-4 sm:pb-8`}
      >
        <GrTransaction size={40} className="text-blue-600 " />
        <h1 className="text-[#0043C6]">
          Looks like you haven't made any transactions yet. Start making
          purchases to see your transaction history here
        </h1>
        <Link
          to="/products-page"
          className="capitalize bg-blue-600 hover:bg-blue-500 py-2 rounded-md text-yellow-50 px-8 sm:px-10"
          type="submit"
        >
          start shopping
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <section class="relative overflow-x-auto sm:rounded-lg p-5">
          <table class="w-full text-left text-[#0043C6] ">
            <thead class=" font-lg border-b">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Track Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className=" ">
              {userOrderItems &&
                userOrderItems.map((item) => (
                  <TransactionCard key={item.id} item={item} />
                ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default TransactionHistory;
