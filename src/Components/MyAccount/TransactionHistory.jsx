import React from "react";
import { transaction } from "../data";
import TransactionCard from "./TransactionCard";


const TransactionHistory = () => {
  return (
    <div className=" bg-[#F2F9FF] rounded-lg md:w-4/5  w-full md:ml-56 ">
      <h2 className=" font-bold text-2xl text-[#0043C6] px-8 pt-3">
        Transaction History
      </h2>

      <div class="relative overflow-x-auto sm:rounded-lg p-5">
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
            {transaction.map((product) => (
              <TransactionCard key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
