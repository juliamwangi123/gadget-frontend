import axios from "axios";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";


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
          `http://127.0.0.1:8000/api/users/login/`,userData,config
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
    dispatch({ type: USER_LOGOUT });
    
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
      `http://127.0.0.1:8000/api/users/register/`,
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
