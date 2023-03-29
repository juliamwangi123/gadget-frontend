import { useState } from "react";
import { Link } from "react-router-dom";
import { orderRequest } from "../../actions/orderActions";
import CurrencyFormat from "../../constants/CurrencyFormatter";
import TransactionHover from "./TransactionHover";
import { useDispatch } from "react-redux";


const TransactionCard = ({ item }) => {
  const { order,orderItemNumber,createdAt,name,price,image,isPaid} = item;
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();


  const getOrderUser = (id) => {
    dispatch(orderRequest(id))
    
  }
  return (
    <tr
      className=" relative divide-y-2"
      // onMouseEnter={() => setHover(!hover)}
      // onMouseLeave={() => setHover(!hover)}
    >
      <th
        scope="row"
        class="px-6 py-4 font-medium flex space-x-2 whitespace-nowrap"
      >
        <img className="max-w-[30px] w-full" src={image} />
        <p className=" my-auto line-clamp-2 max-w-[200px] sm:max-w-[300px] md:max-w-[350px] w-full">
          {name}
        </p>
      </th>
      <td class="px-6 py-4">{orderItemNumber}</td>
      <td class="px-6 py-4">{createdAt.substring(0, 10)}</td>
      <td class="px-6 py-4">
        <CurrencyFormat value={price} />
      </td>
      <td class="px-6 py-4">
        <Link to={`/order-summary/${order}`}>
          <button
            onClick={()=> getOrderUser(order)}
            className={`${
              isPaid ? "bg-[#0FA958]" : "bg-yellow-600"
            } font-semibold text-xs rounded-2xl w-20 py-1 text-white `}
          >
            {isPaid ? "Successful" : "Not Paid"}
          </button>
        </Link>
      </td>
      <div
        className={`absolute right-0 -translate-x-[50%] ${
          hover ? "" : "hidden"
        }`}
      >
        <div className="bg-white">
          <TransactionHover item={item} />
        </div>
      </div>
    </tr>
  );
};

export default TransactionCard;
