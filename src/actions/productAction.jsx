import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_IMAGE,
  PRODUCT_SOLD_REQUEST,
  PRODUCT_SOLD_SUCCESS,
  PRODUCT_SOLD_FAIL,
  PRODUCT_SOLD_RESET,
  PRODUCT_USER_POSTED_REQUEST,
  PRODUCT_USER_POSTED_SUCCESS,
  PRODUCT_USER_POSTED_FAIL,
  PRODUCT_USER_POSTED_RESET,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from "../constants/productConstants";


export const Listproduct = (keyword="") => async (dispatch) => {
  
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    const res = await axios.get(
      `https://web-production-a55a3.up.railway.app/api/products${keyword}`
    );
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: res.data
    })
      
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message 
        ? error.response.data.message
        :
        error.message
    })
    
    }
}



export const productDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://web-production-a55a3.up.railway.app/api/products/${id}`
    );
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




export const addProduct = (newProduct) => async (dispatch, getState) => {


  dispatch({
    type: PRODUCT_CREATE_SUCCESS,
    payload: newProduct,
  });

  localStorage.setItem("newProductData", JSON.stringify(getState().newProduct));
};


export const submitNewProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST })

    
    const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    
    const { data } = await axios.post(
      `https://web-production-a55a3.up.railway.app/api/products/newItem/`,
      product,
      config
    );

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}



export const removeNewProductFromState = () => async (dispatch) => {
    localStorage.removeItem("newProductData");
    dispatch({ type: PRODUCT_CREATE_RESET });
    
}

export const NewProductImage = (image) => async (dispatch) => { 
  dispatch({
    type: PRODUCT_IMAGE,
    payload: image
  })
}





export const userSoldItemsRequest = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SOLD_REQUEST });

    const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `https://web-production-a55a3.up.railway.app/api/products/sold/items/`,
      config
    );

    dispatch({
      type: PRODUCT_SOLD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SOLD_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};



export const userPostedItemsRequest = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_USER_POSTED_REQUEST });

    const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `https://web-production-a55a3.up.railway.app/api/products/myitems/`,
      config
    );

    dispatch({
      type: PRODUCT_USER_POSTED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_USER_POSTED_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};



