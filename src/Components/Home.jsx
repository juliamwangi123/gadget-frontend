import React from 'react'
import { useSelector } from 'react-redux';
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
  const toggleData = useSelector(state => state.toggle)
  const { toggle} = toggleData || {};
  return (
    <div>
      <div className={`${toggle && "hidden"}`}>
        <Tailblock />
        <Hero />
      </div>
      <Preview />
      <Testimonials />
      <Ads />
      <Footer />
    </div>
  );
}

export default Home