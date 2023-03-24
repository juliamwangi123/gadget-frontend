import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../actions/productAction";
import CurrencyFormat from "../constants/CurrencyFormatter";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Products } from "./data";
import { Info } from "./data";
import { useParams } from "react-router-dom";
import { RiHeartFill } from "react-icons/ri";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
} from "react-icons/md";
import Footer from "./Footer";
import Spinner from "./Spinner";

import Error from "./Error";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

import Slide from "react-reveal/Slide";

import ReactImageMagnify from "react-image-magnify";


const ProductDetails = () => {
  const [data, SetData] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [hovering, setHovering] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productDetailList);
  const cartData = useSelector((state) => state.cart);

  const { cartItems } = cartData;

  const { product, loading, error } = productData || {};

  const { title, price, description, condition, uploaded_images } =
    product || {};
  const userdata = useSelector((state) => state.userLogin);
  const { userLogin } = userdata || {};

  // const iterator = uploaded_images.map((item, index) => {
  // return index
  // })
  // console.log(iterator);
  console.log(currentImage);
  const changeImage = (index) => {
    setCurrentImage(index);
  };
  
  useEffect(() => {
    dispatch(productDetail(id));
  }, [dispatch, id]);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const navigateTo = useNavigate();

  const addToCartHandler = () => {
    if (userLogin) {
      navigateTo(`/cart-details/${id}`);
    } else {
      navigateTo("/account/login");
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-[1480px] mx-auto">
        <div className="">
          <Navbar cartCount={cartItems.length} />
        </div>
        {/* content section */}

        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="w-full mx-auto flex items-center justify-center mt-4 sm:mt-10">
            <Error error={error} />
          </div>
        ) : (
          <div className="flex w-full gap-10 sm:gap-14 md:gap-20 flex-col md:flex-row justify-center px-4">
            <div className="">
              {/* section 1 */}

              <div>
                <div className="w-full">
                  <div className="bg-[#F2F9FF] h-full max-w-[869px] sm:max-h-[379px] w-full rounded-[10.907px] shadow-sm border border-gray-100">
                    <div className="flex justify-end mr-8">
                      <RiHeartFill
                        className="mt-4 sm:mt-6 text-gray-300 cursor-pointer"
                        size={35}
                      />
                    </div>
                    <div className="w-full flex  justify-center pb-4 sm:pb-8 md:pb-10 flex-col sm:flex-row px-4 lg:gap-20">
                      <div className="w-full max-w-[300px] my-4 max-h-[300px] flex justify-center items-center transition-all ease-in-out duration-300">
                        <div className="transition-all ease-in-out duration-300 pb-4 w-full">
                          <Flip left>
                            <img
                              src={
                                uploaded_images &&
                                uploaded_images[currentImage].image
                              }
                              alt=""
                              className="lg:max-h-[300px] md:max-h-[200px] sm:max-h-[150px]  transition-all ease-in-out duration-300"
                            />
                          </Flip>
                        </div>
                      </div>
                      <div className="">
                        <h1 className="max-w-[352px] text-base sm:text-[12px]  lg:text-[16px] leading-[23px] font-sans tracking-wide">
                          {title}
                        </h1>
                        <p className="mt-2 sm:mt-5 font-light max-w-[347px]">
                          Brand:
                          <span className="text-[14px]">
                            Samsung | Similar products from Samsung
                          </span>
                        </p>
                        {/* <div className="flex gap-4 items-center mt-2">
                          <div className="flex mb-2">
                            <MdOutlineStarPurple500
                              size={20}
                              className="text-[#FF0000]"
                            />
                            <MdOutlineStarPurple500
                              size={20}
                              className="text-[#FF0000]"
                            />
                            <MdOutlineStarPurple500
                              size={20}
                              className="text-[#FF0000]"
                            />
                            <MdOutlineStarOutline
                              size={20}
                              className="text-[#FF0000]"
                            />
                            <MdOutlineStarOutline
                              size={20}
                              className="text-[#FF0000]"
                            />
                            <MdOutlineStarOutline
                              size={20}
                              className="text-[#FF0000]"
                            />
                          </div>
                          <span>(24)</span>
                        </div> */}
                        <div className="">
                          <p className="font-bold pb-3">
                            <CurrencyFormat value={price} />
                          </p>
                          <div className="flex justify-between">
                            <div className="flex items-center gap-4">
                              <MdLocationOn
                                size={25}
                                className="text-gray-400 "
                              />
                              <p className="text-gray-500 capitalize font-sans text-[15px] leading-[20px] font-extralight tracking-wider">
                                ,Nigeria
                              </p>
                            </div>
                            <p className="">Used</p>
                          </div>
                          <div className="w-full pt-4 sm:mt-6 pb-2">
                            <button
                              onClick={addToCartHandler}
                              className="text-xl inline-flex items-center capitalize hover:bg-black hover:border-black bg-[#0043C6] text-white py-3 px-16 rounded-lg tracking-wide font-medium"
                            >
                              add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* section 2 */}
              <section>
                <Fade left>
                  <div className="flex my-4 sm:my-8 gap-8 flex-wrap">
                    {uploaded_images &&
                      uploaded_images.map((image, index) => (
                        <div
                          onClick={() => changeImage(index)}
                          key={image?.id}
                          className={`${
                            index === currentImage &&
                            "border-2 border-orange-600"
                          } bg-[#F2F9FF] w-full cursor-pointer flex justify-center items-center py-3 px-3 max-w-[120px] h-full max-h-[120px] rounded-[10px] transition-all ease-in-out duration-300`}
                        >
                          <Flip left>
                            <img
                              src={image?.image}
                              alt=""
                              className="my-4 max-h-[100px]"
                            />
                          </Flip>
                        </div>
                      ))}
                  </div>
                </Fade>
              </section>
              {/* section 3 */}
              <section>
                <Slide bottom>
                  <div className="bg-[#F2F9FF] max-w-[869px] flex flex-col rounded-[10.907px] p-6 px-8 md:px-14 pb-4 sm:pb-8 md:pb-12 shadow-sm border border-gray-100">
                    <h1 className="text-[20px] font-medium tracking-wide my-2">
                      Product details
                    </h1>
                    <p className="max-w-[729px] leading-[21px] text-[15px] font-light">
                      {description}
                    </p>
                  </div>
                </Slide>
              </section>
              {/* section 4 */}
              <section>
                <Slide bottom>
                  <div className="bg-[#F2F9FF] max-w-[869px] flex flex-col sm:flex-row justify-between rounded-[10.907px] p-6 px-8 md:px-14 pb-4 sm:pb-8 md:pb-8 mt-4 sm:mt-6 shadow-sm border border-gray-100">
                    <div className="">
                      <h1 className="text-[20px] font-medium tracking-wide my-2">
                        Specifications
                      </h1>
                      <ul className="list-disc list-inside">
                        <li>4GB/64GB </li>
                        <li>5000mAh Battery</li>
                        <li>Android 12</li>
                        <li>Color - Green</li>
                      </ul>
                    </div>
                    <div className=" flex flex-col gap-2">
                      <h1 className="text-[20px] font-medium tracking-wide my-2">
                        Warranty
                      </h1>
                      <p className="text-[15px] font-light capitalize">
                        Product warranty : Yes (5 days)
                      </p>
                      <p className="text-[15px] font-light capitalize">
                        SKU: SA948MT23H1QHNAFAMZ{" "}
                      </p>
                    </div>
                    <div className=" flex flex-col gap-2 w-1/3">
                      <h1 className="text-[20px] font-medium tracking-wide">
                        Condition
                      </h1>
                      <p className="text-[15px] font-light capitalize ">
                        {condition}
                      </p>
                    </div>
                  </div>
                </Slide>
              </section>
            </div>
            {/* section 5 */}
            <section>
              <Fade right>
                <div className="max-w-[428px] w-full bg-[#F2F9FF]  max-h-[405px] rounded-[10.907px] p-2 px-8 pt-4 sm:px-12 shadow-sm border border-gray-100">
                  <h1 className="text-[20px] font-medium tracking-wide my-2 capitalize">
                    safety tips
                  </h1>
                  <div className=" relative w-full">
                    <span
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="text-red-400 cursor-pointer"
                    >
                      see details here
                    </span>
                    <div
                      className={`absolute ${
                        hovering ? "" : "hidden"
                      }  bg-[#F2F9FF] shadow-2xl max-w-[405px] -translate-x-[10%] w-[500px] pb-8 border-2 border-white rounded-sm p-6`}
                    >
                      <ul className="text-[15px] list-outside font-light px-4 tracking-wide flex flex-col gap-1">
                        <li className="list-disc ">
                          Don't pay to the seller outside the platform
                        </li>
                        <li className="list-disc">
                          Meet the seller at a safe public place
                        </li>
                        <li className="list-disc">
                          Inspect the item and ensure it's exactly what you want
                        </li>
                        <li className="list-disc">
                          On delivery, check that the item delivered is what was
                          ordered
                        </li>
                        <li className="list-disc">Payment validates order</li>
                        <li className="list-disc">
                          Kindly read captions of item descriptions, size, price
                          location before making payment
                        </li>
                        <li className="list-disc">
                          Items must be collected/pickup up after 1-3 days from
                          order delivery.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h1 className="text-[20px] font-medium tracking-wide my-2 capitalize">
                    Return Policy
                  </h1>
                  <p className="text-[15px] font-light capitalize">
                    The buyer has 5 day to make any complain Regards to the item
                  </p>
                  <h1 className="text-[20px] font-medium tracking-wide my-2 capitalize md:pt-4">
                    Delivery
                  </h1>
                  <p className="text-[15px] font-light capitalize md:mt-6">
                    Buyer bears the cost of delivery and pickup
                  </p>
                </div>
              </Fade>
            </section>
          </div>
        )}

        {/* {"end"} */}
      </div>

      <div className="">
        <Slide bottom>
          <Footer />
        </Slide>
      </div>
    </div>
  );
};

export default ProductDetails;
