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
  USER_PROFILE_UPDATE_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
  TOGGLE_HIDE,
  TOGGLE_SHOW,
} from "../constants/userConstants";

export const userReducer = (state = { userLogin: {},loggedUser: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, userLogin: {} };

    case USER_LOGIN_SUCCESS:
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("loggedUser", JSON.stringify(action.payload));
      return {
        loading: false,
        userLogin: action.payload.access,
        loggedUser: action.payload
      };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};








export const userRegisterReducer  = (
  state = { userRegisterInfo: {} },
  action
) => {
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



export const userDetailsReducer = (
  state = { UserDetails: {} },
  action
) => {
  switch (action.type) {
    case  USER_DETAILS_REQUEST:
      return {...state, loading: true,};

    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        userDetails: action.payload
      };

    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    
    case USER_DETAILS_RESET:
      return {
        userDetails: {},
      };

      
    default:
      return state;
  }
};


export const userDetailsUpdateReducer = (
  state = { userUpdateData: {} },
  action
) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { ...state, loading: true };

    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        userUpdateData: action.payload,
      };

    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case USER_UPDATE_RESET:
      return {
        userUpdateData: {},
      };

    default:
      return state;
  }
};



export const userProfileReducer  = (state = { profileInfo: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true,profileInfo: {} };

    case USER_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        profileInfo: action.payload,
      };

    case USER_PROFILE_FAIL:
      return { loading: false, success: false, error: action.payload };

    case USER_PROFILE_RESET:
      return {
        profileInfo:{}
      };

    default:
      return state;
  }
};


export const userProfileUpdateReducer = (state = { profileUpdate: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_REQUEST:
      return { ...state, loading: true };

    case USER_PROFILE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        profileUpdate: action.payload,
      };

    case USER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case USER_PROFILE_UPDATE_RESET:
      return {
        profileUpdate: {},
      };

    default:
      return state;
  }
};

export const toggleShowHide = (state = { toggle: false },action) => { 
  switch (action.type) {
    case TOGGLE_SHOW:
      return {
        toggle: true,
      };
    case TOGGLE_HIDE:
      return {
        toggle: false,
      };

    default:
      return state;
  }

}
