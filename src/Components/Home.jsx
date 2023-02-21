import React from 'react'
import {
  Hero,
  Footer,
  Testimonials,
  Ads,
  Tailblock,
  Navbar,
  Preview
} from "./";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Tailblock />
      <Hero />
      <Preview />
      <Testimonials />
      <Ads />
      <Footer />
    </div>
  );
}

export default Home