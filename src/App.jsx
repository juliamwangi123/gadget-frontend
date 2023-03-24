import "./App.css";
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
  Transaction,
  Spinner,
  Error,
  OrderSummary
} from "./Components";

import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/account/login" element={<Signin />} />
        <Route path="/account/register" element={<Signup />} />
        <Route path="/sell-gadget" element={<SellGadget />} />
        <Route path="/product-details" element={<SellDetails />} />
        <Route path="/customers-feedback" element={<FeedbackForm />} />
        <Route path="/products-page" element={<BuyProduct />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart-details/:id?" element={<CartDetails />} />
        <Route path="/checkout-details" element={<CheckoutDetails />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/payment-success/:id" element={<Transaction />} />
        <Route path="/submit-payment/:id?" element={<SubmitPayment />} />
        <Route path="/order-summary/:id?" element={<OrderSummary />} />
      </Routes>
    </div>
  );
}

export default App;
