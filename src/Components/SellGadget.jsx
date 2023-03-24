import React, { useState } from 'react'
import { addProduct,NewProductImage } from '../actions/productAction';
import { useDispatch,useSelector } from 'react-redux';
import Navbar from './Navbar'
import { BsImageFill } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import Dropzone from "react-dropzone";
import { Container } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const SellGadget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productCreate } = useSelector((state) => state.newProduct);
  const {
    productImage: image,
    productTitle: title,
    productDescription: description,
    productCondition: condition,
    productPrice: price,
    productPaymentMethod: payment,
    productCurrency: currency,
    productItemVisibilty: visibility,
    productBank: bank,
    productAccName: bankName,
    productAccNumber: bankNumber,
  } = productCreate || {};
  const [Image, setImage] = useState({array:[]});
  const [imageLoad, setImageLoad] = useState(false);
  
  const [productImage, setProductImage] = useState("");
  const [productTitle, setProductTitle] = useState(title);
  const [productDescription, setProductDescription] = useState(description);
  const [productCondition, setProductCondition] = useState(condition);
  const [productPrice, setProductPrice] = useState(price);
  const [productCurrency, setProductCurrency] = useState(currency);
  const [productItemVisibilty, setProductItemVisibilty] = useState(visibility);
  const [productPaymentMethod, setProductPaymentMethod] = useState(payment);
  const [productBank, setProductBank] = useState(bank);
  const [productAccName, setProductAccName] = useState(bankName);
  const [productAccNumber, setProductAccNumber] = useState(bankNumber);

 


  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    printFile(file);
  };

  function printFile(file) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
    } else {
      setProductImage("");
    }
  }

  const handleNewProductSubmit = (e) => {
    e.preventDefault();

    if (Image.array.length === 0) {
      toast.error("Please Add product images", {
        position: toast.POSITION.TOP_CENTER,
        className: "error-message",
      });
    } else {
      navigate("/product-details");
      
     }

    dispatch(
      addProduct({
        productImage: Image.array,
        productTitle: productTitle,
        productDescription: productDescription,
        productCondition: productCondition,
        productPrice: productPrice,
        productCurrency: productCurrency,
        productItemVisibilty: productItemVisibilty,
        productBank: productBank,
        productAccName: productAccName,
        productAccNumber: productAccNumber,
        productPaymentMethod: productPaymentMethod,
      })
    );

   
    
  };
  //ply0_qVdmm63mXuHn6QQg00C1P4
  //631983513361737
  const handleDrop = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "Blaone");
      formData.append("api_key", "631983513361737");
      formData.append("timestamp", (Date.now() /1000) /0);
      setImageLoad(true)

      return axios.post(
        "https://api.cloudinary.com/v1_1/seeders/image/upload/", formData, {
          headers:{"X-Requested-With":"XMLHttpRequest"}
        })
      .then((response) => {
        const data = response.data
        const image = data.secure_url

        let newIMG = Image.array;
        newIMG.push(image);
        const newObj = { ...Image, newIMG }
        setImage(newObj)
        dispatch(NewProductImage({ image }))
      })

    })
    axios.all(uploaders).then(() => {
      setImageLoad(false)
    })
  };

  return (
    <div className="w-full">
      <div className="">
        <Navbar />
      </div>
      <form
        encType="multipart/form-data"
        onSubmit={handleNewProductSubmit}
        className="max-w-7xl w-full mx-auto"
      >
        <div className="flex justify-center mt-4">
          <h1 className="text-3xl capitalize">sell your gadget</h1>
        </div>

        <div className="flex md:flex-row smx:px-10 md:gap-24 sm:px-4 justify-center flex-col mt-6 sm:mt-14 w-full">
          <div className="flex flex-col w-full">
            <div className="mt-6 md:mt-10 mb-4">
              <div className="flex md:justify-center px-4 sm:px-24 ">
                <div className="">
                  <div className="w-[152px] rounded-[10px] h-[135px] bg-[#CCD9F4]">
                    <Dropzone
                      className="dropzone"
                      onDrop={handleDrop}
                      onChange={(e) => setProductImage(e.target.value)}
                      value={Image}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section className="w-full flex justify-center items-center">
                          <div {...getRootProps()}>
                            <input
                              className="w-full  h-full"
                              {...getInputProps()}
                            />
                            <p className="w-[152px] h-[135px] flex justify-center items-center cursor-pointer">
                              <BsImageFill
                                size={40}
                                className="text-[#0043C6]"
                              />
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </div>
                  <h1 className="text-center capitalize font-sans font-medium tracking-wider pt-2">
                    {Image.array.length === 0
                      ? "Add image"
                      : `${Image.array.length} ${Image.array.length === 1 ? "image": "images"}`}
                  </h1>
                </div>

                <div className="px-8 sm:px-14">
                  <div className="w-[152px]">
                    <div className="relative  h-[135px] rounded-lg bg-[#CCD9F4] flex justify-center items-center">
                      <div className="absolute">
                        <div className="flex flex-col items-center">
                          <span className="flex items-center bg-slate-200 h-8">
                            <FaYoutubeSquare
                              size={40}
                              className="text-[#0043C6]"
                            />
                          </span>
                        </div>
                      </div>

                      <input
                        type="file"
                        accept="image/"
                        className="h-full w-full opacity-0"
                        name=""
                      />
                    </div>
                  </div>
                  <h1 className="text-center capitalize font-sans font-medium tracking-wider pt-2">
                    add video
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-col px-8 md:px-0 sm:mt-16">
              <label
                className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                htmlFor=""
              >
                payment method
              </label>
              <select
                onChange={(e) => setProductPaymentMethod(e.target.value)}
                required
                value={productPaymentMethod ? productPaymentMethod : ""}
                className="max-w-[553px] py-4 rounded-lg px-8 text-gray-400"
                type="text"
                name=""
                id=""
              >
                <option selected>Payment Method</option>
                <option value="Paypal">Paypal</option>
                <option value="Stripe">Stripe</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Post Pay">Post Pay</option>
              </select>
            </div>
            <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 md:mt-8">
              <label
                className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                htmlFor=""
              >
                account details
              </label>
              <input
                onChange={(e) => setProductBank(e.target.value)}
                required
                value={productBank ? productBank : ""}
                className="max-w-[553px] py-4 rounded-lg placeholder:capitalize px-8"
                placeholder="bank"
                type="text"
                name=""
                id=""
              />
              <div className="md:mt-2 w-full">
                <input
                  onChange={(e) => setProductAccName(e.target.value)}
                  required
                  value={productAccName ? productAccName : ""}
                  className=" w-full max-w-[553px] py-4 rounded-lg placeholder:capitalize px-8"
                  placeholder="account name"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="md:mt-2 w-full">
                <input
                  onChange={(e) => setProductAccNumber(e.target.value)}
                  required
                  value={productAccNumber ? productAccNumber : ""}
                  className=" w-full max-w-[553px] py-4 rounded-lg placeholder:capitalize px-8"
                  placeholder="account number"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          {/* SECTION TWO */}
          <div className="w-full">
            <div className="flex flex-col w-full">
              <div className="flex gap-4 flex-col px-8 md:px-0">
                <label
                  className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                  htmlFor=""
                >
                  gadget name
                </label>
                <input
                  onChange={(e) => setProductTitle(e.target.value)}
                  required
                  className="max-w-[553px] py-4 rounded-lg px-8"
                  value={productTitle ? productTitle : ""}
                  placeholder="Name of item"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                <label
                  className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                  htmlFor=""
                >
                  specification
                </label>

                <textarea
                  onChange={(e) => setProductDescription(e.target.value)}
                  required
                  value={productDescription ? productDescription : ""}
                  className="max-w-[553px] py-4 rounded-lg px-8"
                  placeholder="Description of item"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                <label
                  className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                  htmlFor=""
                >
                  conditions
                </label>

                <textarea
                  onChange={(e) => setProductCondition(e.target.value)}
                  required
                  value={productCondition ? productCondition : ""}
                  className="max-w-[553px] py-4 rounded-lg px-8"
                  placeholder="Condition of the item"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                <label
                  className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                  htmlFor=""
                >
                  price
                </label>

                <input
                  onChange={(e) => setProductPrice(e.target.value)}
                  required
                  value={productPrice ? productPrice : ""}
                  className="max-w-[553px] py-4 rounded-lg px-8"
                  placeholder="Product price"
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                <label
                  className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                  htmlFor=""
                >
                  currency
                </label>

                <select
                  onChange={(e) => setProductCurrency(e.target.value)}
                  required
                  value={productCurrency ? productCurrency : ""}
                  className="max-w-[553px] py-4 rounded-lg px-8 text-gray-400"
                  type="text"
                  name=""
                  id=""
                >
                  <option selected>Money Currency</option>
                  <option value="Naira">Naira</option>
                  <option value="USD">USD</option>
                  <option value="Ghana Cedi">Ghana Cedi</option>
                  <option value="Kenyan Shillings">Kenyan Shillings</option>
                </select>
              </div>
              <div className="flex gap-4 flex-col px-8 md:px-0 mt-4 ">
                <label
                  className="text-[20px] leading-[28px] capitalize font-medium font-sans"
                  htmlFor=""
                >
                  item visibility
                </label>

                <select
                  onChange={(e) => setProductItemVisibilty(e.target.value)}
                  required
                  value={productItemVisibilty ? productItemVisibilty : ""}
                  className="max-w-[553px] py-4 rounded-lg px-8 text-gray-400"
                  type="text"
                  name=""
                  id=""
                >
                  <option value="Everyone">Everyone</option>
                  <option value="Only Me">Only Me</option>
                </select>
              </div>

              <div className="w-full md:mt-10 mt-4 flex-wrap flex items-center gap-8">
                <Link
                  to="/"
                  className="text-[20px] font-sans mr-2 text-gray-500 capitalize cursor-pointer rounded-md hover:text-red-500"
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
                  className="text-[20px] md:ml-6 capitalize hover:bg-emerald-400 hover:text-emerald-50 bg-[#00A725] py-2.5 px-14 text-green-50  rounded-lg tracking-wide font-medium"
                  type="submit"
                >
                  proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default SellGadget