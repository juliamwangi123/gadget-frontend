import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Preview from './Preview'

const BuyProduct = () => {
  return (
    <div className="bg-[#E6EDFA]">
      <Navbar />
      <Preview />
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default BuyProduct