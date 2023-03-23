import { useState } from "react";
import TransactionHover from "./TransactionHover";

const TransactionCard = ({ product }) => {
  const { title, trackno, date, amount, image, status } = product;
  const [hover, setHover] = useState(false);
  return (
    <tr className=" relative " onMouseEnter={() => setHover(!hover) } onMouseLeave={() => setHover(!hover) }>
      <th
        scope="row"
        class="px-6 py-4 font-medium flex space-x-2 whitespace-nowrap "
      >
        <img width={50} src={image} />
        <p className=" my-auto">{title}</p>
      </th>
      <td class="px-6 py-4">{trackno}</td>
      <td class="px-6 py-4">{date}</td>
      <td class="px-6 py-4">₦{amount}</td>
      <td class="px-6 py-4">
        <button
          className={`${
            status ? "bg-[#0FA958]" : "bg-[#FD0E0E]"
          } font-semibold text-xs rounded-2xl w-20 py-1 text-white `}
        >
          {status ? "Successful" : "Failed"}
        </button>
      </td>
      <div className= {`absolute right-0 -translate-x-[50%] ${hover ? "" : "hidden"}`} >
        <TransactionHover />
      </div>
    </tr>
  );
};

export default TransactionCard;
