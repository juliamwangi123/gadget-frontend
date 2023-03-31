import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { userPostedItemsRequest } from "../../actions/productAction";
import { deleteUserProduct } from "../../actions/deleteActions";
import { MdLocationOn } from "react-icons/md";
import CurrencyFormat from "../../constants/CurrencyFormatter";
import { toast } from "react-toastify";
const ListedItemsPreview = ({ item }) => {
  const dispatch = useDispatch()
  const { title, price, uploaded_images, user } = item;
  const deleteData = useSelector(state => state.deleteStatus)

  const { loading, success, deleteStatus } = deleteData || {};

  useEffect(() => {
    if (success) {
      dispatch(userPostedItemsRequest());
      
     }
    
  },[dispatch,success])
  
  const deleteItem = (productId) => {
    dispatch(deleteUserProduct(productId))
   
   
    

   }
  return (
    <div className=" bg-[#F2F9FF] rounded-[10px] md:ml-56 py-4 px-2 max-w-[682px] w-full flex justify-between items-center mt-10">
      <div className="grid grid-cols-2 gap-0">
        <div className="my-4 max-w-[127px] max-h-[100px] ml-4 sm:ml-6">
          <img src={uploaded_images[0]?.image} className="max-h-[100px]" />
        </div>
        <div className=" w-full max-w-[200px]">
          <p className="line-clamp-2 text-[10px]">{title}</p>
          <p className="text-sm">
            Brand:{" "}
            <span className=" text-[#00000080] text-sm">
              Samsung | Similar products from samsung
            </span>
          </p>
          <p className=" font-bold text-[12px]">
            <CurrencyFormat value={price} />{" "}
            <span className=" ml-8 font-normal">Used</span>
          </p>

          <div className="flex items-center text-[12px]">
            <MdLocationOn size={25} className="text-gray-400 " />
            <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
              Kaduna,Nigeria
            </p>
          </div>
          <p className=" font-medium text-[12px]">{user?.firstname}</p>
          <p className="text-[12px]">Abuja</p>
        </div>
      </div>
      <div className="flex items-center mx-4">
        <button
          onClick={()=> deleteItem(item.id)}
          className=" bg-[#FD0E0E] hover:bg-red-700 py-2 px-8 rounded-2xl text-sm font-semibold  text-red-100 ">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListedItemsPreview;
