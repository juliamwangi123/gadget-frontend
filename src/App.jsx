
import './App.css'
import {
  Navbar,
  Home,
  Signin,
  Signup,
  SellGadget
} from "./Components";

import { Route,Routes } from 'react-router-dom';
import SellDetails from './Components/SellDetails';


function App() {

  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/sell-gadget" element={<SellGadget />} />
        <Route path="/product-details" element={<SellDetails />} />
      </Routes>
    </div>
  );
}

export default App
