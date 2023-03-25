
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
  OrderSummary,
  Contact,
  AboutUs
} from "./Components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  


import AccountLayout from "./Components/MyAccount/AccountLayout";
import ListedItems from "./Components/MyAccount/ListedItems";
import ProfileDetail from "./Components/MyAccount/ProfileDetail";
import SecuritySettings from "./Components/MyAccount/SecuritySettings";
import TransactionHistory from "./Components/MyAccount/TransactionHistory";



import { Route, Routes } from "react-router-dom";
import SavedItems from "./Components/MyAccount/SavedItems";

function App() {
  return (
    <div className="">
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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

        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/my-account" element={<AccountLayout />}>
          <Route path="" element={<SavedItems />} />
          <Route path="profile-details" element={<ProfileDetail />} />
          <Route path="security-settings" element={<SecuritySettings />} />
          <Route path="product-page" element={<ListedItems />} />
          <Route path="transaction-history" element={<TransactionHistory />} />
          <Route path="saved-items" element={<SavedItems />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
