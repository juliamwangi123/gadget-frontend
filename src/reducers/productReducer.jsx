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
  DELETE_PRODUCT_RESET
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
       
      };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { products: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    
    
    default:
      return state;
  }
};



export const productCreateReducer = (state = {productCreate: {}}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true, success: false, productCreate: {} };

    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        productCreate: action.payload,
      };

    case PRODUCT_CREATE_RESET:
      return {
        productCreate: {},
      };

    case PRODUCT_CREATE_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
}


export const deleteProductReducer = (state = {deleteStatus:{}}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { loading: true };

    case DELETE_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        deleteStatus: action.payload,
      };

    case DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    
    case DELETE_PRODUCT_RESET:
      return {};
    
    default:
      return state;
  }
};


export const addImage = (state= { assets:[]}, action) => {
  switch (action.type) {
    case PRODUCT_IMAGE:
      return {
        ...state,
        assets: [...state.assets, action.payload],
      };
    default:
      return state;
  }
  
}



export const userSoldItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_SOLD_REQUEST:
      return { loading: true, soldItems: {} };

    case PRODUCT_SOLD_SUCCESS:
      return {
        loading: false,
        soldItems: action.payload,
      };
    case PRODUCT_SOLD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case PRODUCT_SOLD_RESET:
      return {};

    default:
      return state;
  }
};


export const userProductPostedReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_USER_POSTED_REQUEST:
      return { loading: true, postedItems: {} };

    case PRODUCT_USER_POSTED_SUCCESS:
      return {
        loading: false,
        postedItems: action.payload,
      };
    case PRODUCT_USER_POSTED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case PRODUCT_USER_POSTED_RESET:
      return {};

    default:
      return state;
  }
};