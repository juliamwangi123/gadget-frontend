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
const bgcolors = {
  primary: "#F2F6FC",
  secondary: "#FFFFFFF"
};
const Home = () => {
  return (
    <div>
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