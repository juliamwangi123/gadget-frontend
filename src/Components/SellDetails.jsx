import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Listproduct } from '../actions/productAction';
import CurrencyFormat from "../constants/CurrencyFormatter";
import {
  submitNewProduct,
  removeNewProductFromState,
} from "../actions/productAction";
import { Link,useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import A53 from "../assets/data/samsung53.png"
import Footer from './Footer';
const SellDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { productCreate,loading,success } = useSelector((state) => state.newProduct);

  const { assets } = useSelector((state) => state.productImages);
  
  
  const {
    productImage,
    productTitle,
    productDescription,
    productCondition,
    productPrice,
    productPaymentMethod,
    productCurrency,
    productItemVisibilty,
    productBank,
    productAccName,
    productAccNumber,
  } = productCreate || {};

  const  images =
      productImage &&
      productImage.map((image) => {
        image;
      });
    console.log(images);
 
  const postNewProduct = () => {
    dispatch(
      submitNewProduct({
        title: productTitle,
        uploaded_images: assets,
        description: productDescription,
        paymentMethod: productPaymentMethod,
        bank: productBank,
        accName: productAccName,
        accNumber: productAccNumber,
        condition: productCondition,
        currency: productCurrency,
        itemVisibility: productItemVisibilty,
        price: productPrice,
      })
    );
    if (success && !loading) {
      dispatch(removeNewProductFromState())
      dispatch(Listproduct())
      navigate("/products-page");
    }
   }

  return (
    <div className="w-full">
     
      <div className="max-w-7xl mx-auto">
        <div className="flex px-4 flex-col md:justify-between sm:flex-row">
          <div className="">
            <header className="text-[24px] capitalize font-sans font-medium leading-[34px] my-4 sm:my-8">
              gadget cover{" "}
              <span className="normal-case text-gray-500 font font-sans font-extralight text-[24px] tracking-wide">
                (required)
              </span>
            </header>
            <div className="bg-[#F2F9FF] max-w-[504px] rounded-[10px] sm:my-8 w-full ">
              <div className="px-20 pt-10 pb-2 w-full ">
                <img
                  src={productImage && productImage[0]}
                  alt=""
                  className="bg-transparent max-w-[350px] max-h-[350px] w-full h-full"
                />
              </div>
              <h1 className="text-[#0043C6] text-[21px] leading-[28px] font-medium tracking-wider px-4 pb-5">
                {productTitle && productTitle}
              </h1>
            </div>
            <Link
              to="/sell-gadget"
              className="text-[#FF554F] text-[16px] tracking-wider font-medium"
              type="submit"
            >
              Edit Item
            </Link>
          </div>
          <div className="flex flex-col mt-4 md:my-10">
            <div className="md:ml-40">
              <div className="">
                <h1 className="capitalize font-medium text-[22px]">price</h1>
                <p className="text-[15px] font-medium text-[#7B7B7B] sm:mt-2">
                  <CurrencyFormat value={productPrice && productPrice} />
                </p>
              </div>
              <div className="sm:mt-5 ">
                <h1 className="capitalize font-medium text-[22px]">
                  specifications
                </h1>
                <p className="text-[15px] font-medium text-[#7B7B7B] capitalize sm:mt-2">
                  {productDescription && productDescription}
                </p>
              </div>
              <div className="sm:mt-5 ">
                <h1 className="capitalize font-medium text-[22px]">
                  condition
                </h1>
                <p className="text-[15px] font-medium text-[#7B7B7B] capitalize sm:mt-2">
                  {productCondition && productCondition}
                </p>
              </div>
              <div className="sm:mt-5 ">
                <h1 className="capitalize font-medium text-[22px]">location</h1>
                <p className="text-[15px] font-medium text-[#7B7B7B] capitalize sm:mt-2">
                  lagos nigeria
                </p>
              </div>
              <div className="sm:mt-5 ">
                <h1 className="capitalize font-medium text-[22px]">
                  Terms and Conditions
                </h1>
                <p className="text-[14px] font-medium text-[#7B7B7B] capitalize sm:mt-2 max-w-[433px] leading-[20px]">
                  there will be 5% charges on every sale made on this platform
                  and the seller will be paid 3-5 days after the buyer has
                  confirmed the receipt of the item without complain.
                </p>
              </div>
              <div className="mt-4 sm:mt-10">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="h-[24px] w-[24px] border-gray-400"
                />
                <label
                  htmlFor=""
                  className="px-4 text-[15px] font-medium text-[#7B7B7B] sm:mt-2 max-w-[433px] leading-[21px]"
                >
                  I read and consented to the{" "}
                  <span className="text-[#FF3333]">terms and conditions</span>
                </label>
              </div>
            </div>

            <div className="mt-5 md:mt-10 mb-6 md:mb-0 flex flex-wrap items-center gap-8">
              <Link
                to="/"
                className="text-[20px] font-sans py-2.5 px-8 capitalize text-gray-500 font-medium rounded-md hover:bg-white hover:border hover:border-red-500 hover:text-red-500"
                type="submit"
              >
                cancel
              </Link>
              <Link
                to="/"
                className="text-[20px] capitalize hover:bg-black hover:border-black bg-[#0043C6] py-2.5 px-8 text-blue-100  rounded-lg tracking-wide font-medium"
                type="submit"
              >
                save as draft
              </Link>
              <button
                onClick={postNewProduct}
                className="text-[20px] capitalize hover:bg-emerald-400 hover:text-emerald-50 bg-[#00A725] py-2.5 md:px-16 px-8 tracking-wider text-green-50  rounded-lg  font-medium"
                type="submit"
              >
                publish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default SellDetails