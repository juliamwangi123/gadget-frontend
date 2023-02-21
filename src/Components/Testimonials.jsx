import React,{useState,useEffect} from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const monials = [
  {
    id: 0,
    name: "Aina",
    date: "22-05-2022",
    testimony:
      "Gadgethub has been amazing Phone plug to me , it allow me to stay stocked with in-demand iphone devices, now i know i will always have iphone for sale, the same day they come out.",
  },
  {
    id: 1,
    name: "Mark Gabriel",
    date: "01/01/2023",
    testimony:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit non ipsam et, eligendi quia exercitationem rerum nesciunt sit molestiae labore excepturi vero nisi dolor mollitia? ",
  },
  {
    id: 2,
    name: "Martin",
    date: "10-12-2021",
    testimony:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut dolore culpa saepe minus quam tenetur, eaque illo? Odio, nesciunt.  non ipsam et, eligendi quia exercitationem,",
  },
];

const Testimonials = () => {
  const [CurrenTestimonial, SetTestimonial] = useState(2)


  
  
   
  const SwipeLeft = () => {
  const isFirstMonial = CurrenTestimonial === 0;
  const NewIndex = isFirstMonial ? monials.length - 1 : CurrenTestimonial - 1;
    SetTestimonial(NewIndex)
  }
  const infinite = () => {
  const isFirstMonial = CurrenTestimonial === 0;
  const NewIndex = isFirstMonial ? monials.length - 1 : CurrenTestimonial - 1;
    SetTestimonial(NewIndex)
  }

  const SwipeRight = () => {
    const isLastMonial = CurrenTestimonial === monials.length -1;
    const NewIndex = isLastMonial ? 0 : CurrenTestimonial + 1;
    SetTestimonial(NewIndex);
  };


  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative">
      <div className="sm:my-16 md:pb-16 w-full">
        <div className="flex flex-col items-center">
          <div className="md:pb-10">
            <h2 className="text-2xl text-neutral-900  font-medium capitalize tracking-wider">
              What people who have bought here said
            </h2>
          </div>

          <div className=" shadow-sm border border-gray-200 w-full flex justify-center flex-col rounded-xl bg-[#F2F9FF] mx-4 my-4 md:w-2/3">
            <div className="mx-20 md:px-24">
              <p className="md:text-center font-light pt-4 md:pt-14">
                {monials[CurrenTestimonial].testimony}
              </p>
            </div>
            <div className="flex flex-col mx-[11rem] pt-2">
              <div className="flex items-center gap-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://images.unsplash.com/photo-1676739000153-404e60208001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <h1 className="text-[#0043C6] text-xl font-sans font-semibold">
                  {monials[CurrenTestimonial].name}
                </h1>
              </div>

              <h1 className="font-medium text-lg italic py-2 text-gray-900">
                {monials[CurrenTestimonial].date}
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute top-[45%] translate-x-5 ">
          <FaChevronLeft
            onClick={SwipeLeft}
            size={60}
            className="text-gray-600 hover:cursor-pointer"
          />
        </div>

        <div
          onClick={SwipeRight}
          className="absolute top-[45%] translate-x-5 right-12 "
        >
          <FaChevronRight
            onClick={SwipeRight}
            size={60}
            className="text-gray-600 hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials