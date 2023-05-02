import axios from "axios";
import { CART_ADD_ITEM,CART_REMOVE_ITEM, SHIPPING_DETAILS,PAYMENT_METHOD } from "../constants/cartConstants";



export const addToCart = (id) => async(dispatch,getState)=> {
    const { data } = await axios.get(
      `https://web-production-a55a3.up.railway.app/api/products/${id}`
    );
    
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            id: data.id,
            price: data.price,
            image: data.uploaded_images,
            description: data.description,
            title: data.title,
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}



export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
    
}



export const addShippingAddress = (data) => async (dispatch) => {
    dispatch({
        type: SHIPPING_DETAILS,
        payload: data
    })
    localStorage.setItem("shippingDetails",JSON.stringify(data))
}


export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch({
    type: PAYMENT_METHOD,
    payload: data,
  });
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};







// export const addShippingAddress = (address,city,country) => async (dispatch) => {
//     try {
//         dispatch({ type: SHIPPING_DETAILS_REQUEST })
//         const data = {
//             address,
//             city,
//             country
//         }
//         dispatch({
//             type: SHIPPING_DETAILS_SUCCESS,
//             payload: data
//         })
        
//     } catch (error) {
//         dispatch({
//           type: SHIPPING_DETAILS_FAIL,
//           payload:
//             error.response && error.response.data.message
//               ? error.response.data.message
//               : error.message,
//         });
//     }
// }