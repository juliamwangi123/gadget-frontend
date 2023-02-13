
import Banimg  from "../assets/tv.png";

const Banner = () => {
  return (
    <div className="w-full bg-[#F2F6FC]">
      <div className="max-w-7xl font-Gordita m-auto flex flex-col sm:flex-row ">
        <div className="sm:pt-20">
          <h1 className="uppercase font-bold sm:text-5xl leading-[1.2] tracking-wide pt-8">
            Best Price <br /> Easy-to-Use Platform
          </h1>
          <p className="capitalize text-sm sm:w-2/4 sm:pr-12 my-4 font-light sm:leading-5 tracking-wide">
            Shop hundreds of revolutionizing used gadgets from different
            manufacturers as leading brand for up to 70 % saving guaranteed
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:pt-6">
            <button
              className="text-xl  hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-32 border-2 border-[#0043C6]  py-3 rounded-lg tracking-wide font-bold"
              type="submit"
            >
              SELL
            </button>
            <button
              className="text-xl hover:bg-blue-100 border-2 border-[#0043C6]  text-[#0043C6] sm:ml-8 px-32  py-3 rounded-lg tracking-wide font-bold"
              type="submit"
            >
              BUY
            </button>
          </div>
        </div>
        <div className="">
          <img className="" src={Banimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner
