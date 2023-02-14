import samsonic from "./assets/samsonic.png"
import love from "./assets/love.png";
import rating from "./assets/rating.png";
import location from "./assets/location.png";





const Preview = () => {
  return (
    <div>
      <div className="sm:pt-14">
        <h1 className="text-2xl text-neutral-900  font-medium tracking-wider capitalize">
          Choose the right Gadget for you!
        </h1>
      </div>
      <div className="sm:pt-14 m-auto flex flex-col gap-6 sm:gap-8 sm:flex-row ">
        <div className="flex flex-col justify-center border-t-2 border-white-200 sm:w-1/3 shadow-xl rounded-2xl px-8 hover:scale-105  duration-300">
          <div className="flex flex-row pt-8 sm:px-8">
            <img className="pt-8" src={samsonic} alt="" />
            <img className="w-12 h-12" src={love} alt="" />
          </div>
          <h2 className="text-xl text-neutral-900  font-medium pt-4 tracking-widest">
            Samsonic 32'' Inch Smart Android TV With Netflix,Youtube, + Hanger
          </h2>
          <span className="text-xl text-neutral-900 font-extrabold">
            $ 1,000
          </span>
          <div className="flex justify-between ">
            <div className="flex pt-2">
              <img src={rating} alt="" />
              <span>(24)</span>
            </div>
            <div className="pt-2">
              <p>Used</p>
            </div>
          </div>
          <div className="pt-5">
            <img src={location} alt="" />

            <div className="pt-5 pb-12">
              <button
                className="text-xl hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-24 border-2 border-[#0043C6]  py-3 rounded-lg capitalize tracking-wide font-bold"
                type="submit"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center border-t-2 border-white-200  sm:w-1/3 shadow-xl rounded-2xl px-8 hover:scale-105  duration-300">
          <div className="flex flex-row pt-8 px-8">
            <img className="pt-8" src={samsonic} alt="" />
            <img className="w-12 h-12" src={love} alt="" />
          </div>
          <h2 className="text-xl text-neutral-900  font-medium pt-4 tracking-widest">
            Samsonic 32'' Inch Smart Android TV With Netflix,Youtube, + Hanger
          </h2>
          <span className="text-xl text-neutral-900 font-extrabold">
            $ 1,000
          </span>
          <div className="flex justify-between ">
            <div className="flex pt-2">
              <img src={rating} alt="" />
              <span>(24)</span>
            </div>
            <div className="pt-2">
              <p>Used</p>
            </div>
          </div>
          <div className="pt-5">
            <img src={location} alt="" />

            <div className="pt-5 pb-12">
              <button
                className="text-xl hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-24 border-2 border-[#0043C6]  py-3 rounded-lg capitalize tracking-wide font-bold"
                type="submit"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center border-t-2 border-white-200  sm:w-1/3 shadow-xl rounded-2xl px-8 hover:scale-105  duration-300">
          <div className="flex flex-row pt-8 px-8">
            <img className="pt-8" src={samsonic} alt="" />
            <img className="w-12 h-12" src={love} alt="" />
          </div>
          <h2 className="text-xl text-neutral-900  font-medium pt-4 tracking-widest">
            Samsonic 32'' Inch Smart Android TV With Netflix,Youtube, + Hanger
          </h2>
          <span className="text-xl text-neutral-900 font-extrabold">
            $ 1,000
          </span>
          <div className="flex justify-between ">
            <div className="flex pt-2">
              <img src={rating} alt="" />
              <span>(24)</span>
            </div>
            <div className="pt-2">
              <p>Used</p>
            </div>
          </div>
          <div className="pt-5">
            <img src={location} alt="" />

            <div className="pt-5 pb-12">
              <button
                className="text-xl hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-24 border-2 border-[#0043C6]  py-3 rounded-lg capitalize tracking-wide font-bold"
                type="submit"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* second cards view */}

      <div className="sm:pt-20 m-auto flex flex-col gap-6 sm:gap-8 sm:flex-row ">
        <div className="flex flex-col justify-center border-t-2 border-white-200 sm:w-1/3 shadow-xl rounded-2xl px-8 hover:scale-105  duration-300">
          <div className="flex flex-row pt-8 px-8">
            <img className="pt-8" src={samsonic} alt="" />
            <img className="w-12 h-12" src={love} alt="" />
          </div>
          <h2 className="text-xl text-neutral-900  font-medium pt-4 tracking-widest">
            Samsonic 32'' Inch Smart Android TV With Netflix,Youtube, + Hanger
          </h2>
          <span className="text-xl text-neutral-900 font-extrabold">
            $ 1,000
          </span>
          <div className="flex justify-between ">
            <div className="flex pt-2">
              <img src={rating} alt="" />
              <span>(24)</span>
            </div>
            <div className="pt-2">
              <p>Used</p>
            </div>
          </div>
          <div className="pt-5">
            <img src={location} alt="" />

            <div className="pt-5 pb-12">
              <button
                className="text-xl hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-24 border-2 border-[#0043C6]  py-3 rounded-lg capitalize tracking-wide font-bold"
                type="submit"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center border-t-2 border-white-200  sm:w-1/3 shadow-xl rounded-2xl px-8 hover:scale-105  duration-300">
          <div className="flex flex-row pt-8 px-8">
            <img className="pt-8" src={samsonic} alt="" />
            <img className="w-12 h-12" src={love} alt="" />
          </div>
          <h2 className="text-xl text-neutral-900  font-medium pt-4 tracking-widest">
            Samsonic 32'' Inch Smart Android TV With Netflix,Youtube, + Hanger
          </h2>
          <span className="text-xl text-neutral-900 font-extrabold">
            $ 1,000
          </span>
          <div className="flex justify-between ">
            <div className="flex pt-2">
              <img src={rating} alt="" />
              <span>(24)</span>
            </div>
            <div className="pt-2">
              <p>Used</p>
            </div>
          </div>
          <div className="pt-5">
            <img src={location} alt="" />

            <div className="pt-5 pb-12">
              <button
                className="text-xl hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-24 border-2 border-[#0043C6]  py-3 rounded-lg capitalize tracking-wide font-bold"
                type="submit"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center border-t-2 border-white-200  sm:w-1/3 shadow-xl rounded-2xl px-8 hover:scale-105  duration-300">
          <div className="flex flex-row pt-8 px-8">
            <img className="pt-8" src={samsonic} alt="" />
            <img className="w-12 h-12" src={love} alt="" />
          </div>
          <h2 className="text-xl text-neutral-900  font-medium pt-4 tracking-widest">
            Samsonic 32'' Inch Smart Android TV With Netflix,Youtube, + Hanger
          </h2>
          <span className="text-xl text-neutral-900 font-extrabold">
            $ 1,000
          </span>
          <div className="flex justify-between ">
            <div className="flex pt-2">
              <img src={rating} alt="" />
              <span>(24)</span>
            </div>
            <div className="pt-2">
              <p>Used</p>
            </div>
          </div>
          <div className="pt-5">
            <img src={location} alt="" />

            <div className="pt-5 pb-12">
              <button
                className="text-xl hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-24 border-2 border-[#0043C6]  py-3 rounded-lg capitalize tracking-wide font-bold"
                type="submit"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview