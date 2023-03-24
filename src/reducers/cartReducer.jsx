import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR_ITEMS,
  

  SHIPPING_DETAILS,
  PAYMENT_METHOD

  
} from "../constants/cartConstants";
import { toast } from "react-toastify";



export const cartReducer = (
  state = { loading:true, cartItems: [], shippingDetails: {}, paymentMethod: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const itemExist = state.cartItems.find((data) => data.id === item.id);

      if (itemExist) {
        return {
          ...state,
          loading:false,
          cartItems: state.cartItems.map(
            (data) => (data.id === itemExist.id ? item : data),
            toast.info(`${itemExist.title} already added to cart`, {
              position: toast.POSITION.TOP_CENTER,
              className: "toast-message",
            })
          ),
        };
      } else {
        return {
          ...state,
          loading: false,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case SHIPPING_DETAILS:
      return {
        ...state,
        shippingDetails: action.payload,
      };

    case PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};



// export const shippingReducer = (state = { shippingDetails: {} }, action) => {
//     switch (action.type) {
//       case SHIPPING_DETAILS_REQUEST:
//         return { loading: true, shippingDetails: {} };

//       case SHIPPING_DETAILS_SUCCESS:
//         return {
//           loading: false,
//          shippingDetails: action.payload,
//         };

//       case SHIPPING_DETAILS_FAIL:
//         return { loading: false, error: action.payload };

//       default:
//         return state;
//     }
// }