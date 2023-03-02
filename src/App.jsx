
import './App.css'
import {
  Navbar,
  Home,
  Signin,
  Signup,
  SellGadget,
  SellDetails,
  FeedbackForm,
  BuyProduct,
  ProductDetails,
  CartDetails,
  CheckoutDetails,
  PaymentDetails,
  SubmitPayment,
  Transaction
} from "./Components";

import { Route,Routes } from 'react-router-dom';


function App() {

  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/sell-gadget" element={<SellGadget />} />
        <Route path="/product-details" element={<SellDetails />} />
        <Route path="/customers-feedback" element={<FeedbackForm />} />
        <Route path="/products-page" element={<BuyProduct />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart-details" element={<CartDetails />} />
        <Route path="/checkout-details" element={<CheckoutDetails />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/submit-payment" element={<SubmitPayment />} />
        <Route path="/payment-success" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App
