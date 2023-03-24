import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducer,productCreateReducer,addImage } from "../reducers/productReducer";
import { cartReducer } from "../reducers/cartReducer";
import { orderReducer,orderDetailsReducer,orderPaymentReducer,paypalFeedback } from "../reducers/orderReducer";
import { userReducer, userRegisterReducer } from "../reducers/userReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetailList: productDetailsReducer,
  cart: cartReducer,
  userLogin: userReducer,
  userRegister: userRegisterReducer,
  orderItems: orderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPaymentReducer,
  newProduct: productCreateReducer,
  productImages: addImage,
  paymentStatus: paypalFeedback,
});

const cartLocaleStorage = localStorage.getItem("cartItems") ?
         JSON.parse(localStorage.getItem("cartItems")) : []


const userInfoLocaleStorage = localStorage.getItem("access")
 
const payStatus = localStorage.getItem("paymentFeedback")
  ? JSON.parse(localStorage.getItem("paymentFeedback"))
  : {};

const shippingDetailsInfoLocaleStorage = localStorage.getItem(
  "shippingDetails"
)
  ? JSON.parse(localStorage.getItem("shippingDetails"))
  : {};

const paymentDetailsInfoLocaleStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};


  const newProductDetailsInfoLocaleStorage = localStorage.getItem(
    "newProductData"
  )
    ? JSON.parse(localStorage.getItem("newProductData"))
    : {};


const initialState = {
  cart: {
    cartItems: cartLocaleStorage,
    shippingDetails: shippingDetailsInfoLocaleStorage,
    paymentMethod: paymentDetailsInfoLocaleStorage,
  },
  userLogin: { userLogin: userInfoLocaleStorage },

  newProduct: { productCreate: newProductDetailsInfoLocaleStorage },
  paymentStatus: { feedback: payStatus },
};
const middleware = [thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store