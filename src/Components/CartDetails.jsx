import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "../constants/CurrencyFormatter";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";

import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
  MdDeleteOutline,
} from "react-icons/md";
import { RecentViews } from "./data";
import { Spinner } from "reactstrap";
const CartDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const { cartItems,loading } = cartData;
  
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number.parseFloat(item.price),
    0
  );

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id));
    }
  }, [dispatch, id]);

  const removeItemHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <Navbar cartCount={cartItems.length} />
      </div>
      {/* Cart details section */}
      <div className="mt-4 max-w-7xl mx-auto">
        <h1 className="px-8 sm:px-12 md:px-16 text-[21.505px] font-medium my-2 sm:my-4 md:mt-8">
          Cart( {cartItems.length} {cartItems.length === 1 ? "item" : "items"})
        </h1>
        <div className="flex gap-4 justify-between flex-col sm:flex-row">
          <div className="max-w-[838px] w-full">
            {
              loading ? (<Spinner />)
                :
                
                  cartItems.length === 0 ? (
                    <div className="bg-red-100 w-3/5 py-4 sm:ml-12 md:ml-16 text-center shadow-md rounded-md my-2 mb-4 sm:mb-8 md:mb-10">
                      <h1 className="text-red-500 font-mono tracking-wider text-base sm:text-lg md:text-xl">
                        You have no items in Cart
                      </h1>
                    </div>
                  ) : (
                    <main className="flex flex-col gap-4 sm:gap-6">
                  

                      {cartItems &&
                        cartItems.map((product) => (
                          <section key={product.id} className="max-w-[838px] w-full bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100">
                            <div className="flex  gap-10 flex-col sm:flex-row md:gap-24 sm:px-12 my-2 max-h-[90px]">
                              <img
                                src={product.image[0].image}
                                alt=""
                                className="max-w-[200px] w-full object-contain"
                              />
                              <div className="">
                                <h1 className="max-w-[352px] text-[13px] leading-[23px] font-sans tracking-wide font-semibold line-clamp-2">
                                  {product.title}
                                </h1>
                                <p className="sm:mt-2 text-[12px] font-light max-w-[347px]">
                                  Brand:
                                  <span className="text-[12px]">
                                    Samsung | Similar products from Samsung
                                  </span>
                                </p>

                                {/* <div className="">
                            <div className="flex justify-between">
                              <div className="flex items-center gap-4 md:pb-8">
                                <MdLocationOn
                                  size={20}
                                  className="text-gray-400 "
                                />
                                <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
                                  kaduna ,Nigeria
                                </p>
                              </div>
                              <p className="">Used</p>
                            </div>
                          </div> */}
                              </div>
                              <div>
                                <p className="font-bold pb-3">
                                  <CurrencyFormat value={product.price} />
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-between px-8 sm:px-12 md:px-16 mt-4 pb-4">
                              <div className="flex gap-1 items-center text-[#FF3A43] cursor-pointer">
                                <MdDeleteOutline size={20} />
                                <button
                                  onClick={() => removeItemHandler(product.id)}
                                  className="uppercase text-[15px]"
                                  type="submit"
                                >
                                  remove item
                                </button>
                              </div>
                              <div className="flex items-center text-[#FC3233] gap-2.5">
                                <button type="submit">
                                  <AiFillMinusSquare size={20} />
                                </button>
                                <p className="text-[18px] text-black">1</p>
                                <button type="submit">
                                  <AiFillPlusSquare size={20} />
                                </button>
                              </div>
                            </div>
                          </section>
                        ))}
                    </main>
                  )
                }
            
          </div>
          {cartItems.length > 0 && (
            <div className="max-w-[362px] bg-[#F2F9FF] w-full rounded-md shadow-sm border border-stone-100 p-8 max-h-[340px]">
              <h1 className="text-[21.505px]">CART SUMMARY</h1>
              <div className="flex justify-between items-center sm:mt-4">
                <p className="text-[20px] font-medium tracking-wide">
                  Subtotal
                </p>
                <p className="text-[16px] font-bold tracking-wide">
                  <CurrencyFormat value={totalPrice} />
                </p>
              </div>
              <div className="mt-4 sm:mt-10">
                <Link
                  to={'/checkout-details'}
                  disabled={cartItems.length === 0}
                  className="bg-[#0043C6] py-2 uppercase text-white text-[20px] px-24 font-bold rounded-md disabled:bg-slate-300 disabled:cursor-not-allowed"
                  type="submit"
                >
                  checkout
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="w-full max-w-[1334px] bg-[#F2F9FF] rounded-md shadow-sm border border-stone-100 mt-4 sm:mt-8 p-8 sm:px-14">
          <h1 className="text-[20px] ">Recently Viewed</h1>
          <div className="flex flex-wrap p-8 justify-between gap-4 md:gap-0">
            {RecentViews.map((view) => (
              <div key={view.id} className="max-w-[180px] w-full">
                <div className="w-full flex justify-center">
                  <img src={view.image} alt="" className="max-w-[130px]" />
                </div>
                <h1 className="line-clamp-2 max-w-[178px] text-[10px] font-bold">
                  {view.title}
                </h1>
                <p className="text-[14px] font-extrabold">{view.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default CartDetails;
