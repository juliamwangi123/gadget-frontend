import axios from "axios";
import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_FEEDBACK
} from "../constants/orderConstants";

import { CART_CLEAR_ITEMS } from "../constants/cartConstants";

export const placeOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_REQUEST });

    const { userLogin } = getState();
    const token = localStorage.getItem("access");

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `http://localhost:8000/api/orders/add/order/`,
      order,
      config
    );


    dispatch({
      type: ORDER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: CART_CLEAR_ITEMS,
      payload: data,
    });
    localStorage.removeItem("cartItems")
  } catch (error) {
    dispatch({
      type: ORDER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const orderRequest = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

   
     const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:8000/api/orders/${id}/`,
      config
    );
    
    localStorage.setItem("paidOrder", JSON.stringify(data));

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const orderPay = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

   
  
    
    const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      `http://localhost:8000/api/orders/${id}/pay/`,
     token,
      config
    );
    dispatch({
      type: ORDER_PAY_SUCCESS,
      
    });
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};



export const getPaymentFeedback = (payment) => async (dispatch) => {
  localStorage.setItem('paymentFeedback', JSON.stringify(payment))
  dispatch({
    type: ORDER_FEEDBACK,
    payload: payment
  })
}
