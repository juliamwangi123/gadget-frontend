import React from 'react'
import Loader from "../assets/loader/loading.gif"
import spin from "../assets/loader/loder.svg";


const Spinner = () => {
  return (
    <div className='flex justify-center items-center max-w-[800px] w-full mx-auto'>
      <img src={spin} alt=""  />
    </div>
  )
}

export default Spinner
