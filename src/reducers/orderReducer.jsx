import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_FEEDBACK,
  USER_ORDER_ITEMS_REQUEST,
  USER_ORDER_ITEMS_SUCCESS,
  USER_ORDER_ITEMS_FAIL,
  USER_ORDER_ITEMS_RESET
} from "../constants/orderConstants";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return { loading: true, orderItems: {} };

    case ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };

    case ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_RESET:
      return {};

    default:
      return state;
  }
};

export const orderDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true, orderItems: {} };

    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        orderItems: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};

export const orderPaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };

    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};


export const paypalFeedback = (state = {feedback:{}}, action) => {
  switch (action.payload) {
    case ORDER_FEEDBACK:
      return {
        success: true,
        feedback: action.payload,
      };

    default:
      return state;
  }
}





export const userOrderItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ORDER_ITEMS_REQUEST:
      return { loading: true, userOrderItems: {} };

    case USER_ORDER_ITEMS_SUCCESS:
      return {
        loading: false,
        userOrderItems: action.payload,
      };
    case USER_ORDER_ITEMS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_ORDER_ITEMS_RESET:
      return {};

    default:
      return state;
  }
};
