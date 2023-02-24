import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png";


const FeedbackForm = () => {
  return (
    <div className="w-full max-w-[1480px] mx-auto">
      <div className="mt-4">
        <Link to="/" className="cursor-pointer">
          <img className="w-[5.5rem] h-[4.2rem]" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex  justify-center sm:mt-20">
        <div className="">
          <header className="text-[24px] capitalize font-sans font-medium leading-[34px] my-4 sm:my-8 tracking-wider">
            Feedback form
          </header>
        </div>
      </div>
      <div className="md:ml-20">
        <h1 className="capitalize font-medium text-[22px] px-4">name</h1>

        <div className="flex md:gap-12 flex-wrap sm:gap-8 gap-2 px-4 mt-6">
          <input
            className="max-w-[429px] w-full px-6 rounded-[10px] py-3 placeholder:capitalize placeholder:text-[15px] placeholder:font-medium placeholder:text-gray-600"
            placeholder="first name"
            type="text"
            name=""
            id=""
          />
          <input
            className="max-w-[429px] w-full px-6 rounded-[10px] py-3 placeholder:capitalize placeholder:text-[15px] placeholder:font-medium placeholder:text-gray-600"
            placeholder="last name"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="mt-4 md:mt-10">
          <h1 className="font-medium text-[22px] px-4">
            Please provide your feedback onthe quality of our service
          </h1>
          <div className="mt-2 sm:mt-8">
            <div class="flex gap-4 sm:gap-0 flex-wrap">
              <div class="flex items-center mr-4 px-4">
                <input
                  id="orange-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-5 h-5 text-orange-500 bg-gray-200 border-gray-500 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="orange-radio"
                  class="ml-2 text-[15px] font-medium text-gray-900 tracking-wider dark:text-gray-300"
                >
                  Excellent
                </label>
              </div>
              <div class="flex items-center mr-4 px-4">
                <input
                  id="orange-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-5 h-5 text-orange-500 bg-gray-200 border-gray-500 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="orange-radio"
                  class="ml-2 text-[15px] capitalize font-medium text-gray-900 tracking-wider dark:text-gray-300"
                >
                  very good
                </label>
              </div>
              <div class="flex  items-center mr-4 px-4">
                <input
                  id="orange-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-5 h-5 text-orange-500 bg-gray-200 border-gray-500 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="orange-radio"
                  class="ml-2 text-[15px] capitalize font-medium text-gray-900 tracking-wider dark:text-gray-300"
                >
                  good
                </label>
              </div>
              <div class="flex items-center mr-4 px-4">
                <input
                  id="orange-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-5 h-5 text-orange-500 bg-gray-200 border-gray-500 focus:ring-orange-500  dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="orange-radio"
                  class="ml-2 text-[15px] capitalize font-medium text-gray-900 tracking-wider dark:text-gray-300"
                >
                  fair
                </label>
              </div>
              <div class="flex items-center mr-4 px-4">
                <input
                  id="orange-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-5 h-5 text-orange-500 bg-gray-200 border-gray-500 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="orange-radio"
                  class="ml-2 text-[15px] capitalize font-medium text-gray-900 tracking-wider dark:text-gray-300"
                >
                  poor
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-10">
          <h1 className="font-medium text-[22px] px-4">
            Do you have suggestions on what we can do to provide you with a
            better service ?
          </h1>

          <div className="mx-8 sm:mx-2 mt-4 sm:mt-8">
            <textarea
              className="px-6 py-4 max-w-[1085px] w-full max-h-[230px] sm:h-[150px] sm:w-[500px] md:w-full rounded-[10px] h-[100px] md:h-screen placeholder:capitalize"
              placeholder="type here"
            ></textarea>
            <div className="my-10 flex justify-center lg:mr-80">
              <Link
                to="/"
                className="text-xl py-3 inline-flex items-center capitalize hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-20 rounded-lg tracking-wide font-medium"
              >
                submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm