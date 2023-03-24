import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,



  USER_LOGOUT,
  

  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from "../constants/userConstants";

export const userReducer = (state = { userLogin: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, userLogin: {} };

    case USER_LOGIN_SUCCESS:
      localStorage.setItem("access", action.payload.access);
      return {
        loading: false,
        userLogin: action.payload.access
      };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};




export const userRegisterReducer = (state = { userRegisterInfo: {} }, action) => {
  
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, success: false, userRegisterInfo: {} };

    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        userRegisterInfo: action.payload,
      };
    
    

    case USER_REGISTER_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }

};

