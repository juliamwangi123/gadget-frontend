
import './App.css'
import {
  Hero,
  Navbar,
  Banner,
  Footer,
  Testimonials,
  Ads,
  Tailblock,
} from "./Components";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Tailblock />
      <Hero />
      <Testimonials />
      <Ads />
      <Footer />
    </div>
  );
}

export default App
