import axios from "axios";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_PROFILE_RESET,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,

  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_PROFILE_UPDATE_RESET,
  USER_UPDATE_RESET,
  
} from "../constants/userConstants";

import { USER_ORDER_ITEMS_RESET } from "../constants/orderConstants";
import { PRODUCT_SOLD_RESET } from "../constants/productConstants";
import { PRODUCT_USER_POSTED_RESET } from "../constants/productConstants";


export const loginUser = (email, password) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

         const config = {
           headers: {
             "Accept": "application/json",
             "Content-Type": "application/json",
           },
         };
        const userData = {
            username: email,
            password: password
        }
        const { data } = await axios.post(
          `https://web-production-a55a3.up.railway.app/api/users/login/`,
          userData,
          config
        );
       
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

   

    } catch (error) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
        });
   }
}


export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem('access');
  localStorage.removeItem("loggedUser");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_PROFILE_RESET });
  dispatch({ type: USER_UPDATE_RESET });
  dispatch({type: USER_PROFILE_UPDATE_RESET})
  dispatch({ type: USER_ORDER_ITEMS_RESET });
  dispatch({ type: PRODUCT_SOLD_RESET });

  dispatch({ type: PRODUCT_USER_POSTED_RESET });


    
}




export const registerUser = (name,email,password) => async (dispatch) => { 
  try {
    dispatch({ type: USER_REGISTER_REQUEST })

    const config = {
      "Content-Type": "application/json",
    };

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    const { data } = await axios.post(
      `https://web-production-a55a3.up.railway.app/api/users/register/`,
      userData,
      config
    );
  
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
    localStorage.removeItem("access");
   

    
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
}

export const fetchUserDetails = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      `https://web-production-a55a3.up.railway.app/api/users/profile/`,
      config
    );

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
    
 
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};



export const updateUser = (update) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `https://web-production-a55a3.up.railway.app/api/users/profile/update/`,
     update,
      config
    );

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const updateProfile = (profile) => async (dispatch) => {
  try {
    dispatch({ type: USER_PROFILE_UPDATE_REQUEST });

    const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `https://web-production-a55a3.up.railway.app/api/users/info/update/`,
      profile,
      config
    );

    dispatch({
      type: USER_PROFILE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};




export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST });
    const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    

  
    const { data } = await axios.get(
      `https://web-production-a55a3.up.railway.app/api/users/info/`,
      config
    );

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
   
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
