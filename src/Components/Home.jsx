import React from 'react'
import {
  Hero,
  Footer,
  Testimonials,
  Ads,
  Tailblock,
  Navbar
} from "./";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Tailblock />
      <Hero />
      <Testimonials />
      <Ads />
      <Footer />
    </div>
  );
}

export default Home