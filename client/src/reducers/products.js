import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from '../actions/types';

export default function reducer(products = [], action){
switch (action.type) {
  case FETCH_PRODUCTS:
    return action.payload;
  case FETCH_PRODUCT:
    return products
  case CREATE_PRODUCT:
    return [ ...products, action.payload]
  case UPDATE_PRODUCT:
    return products.map(product => product._id === action.payload._id ? action.payload : product)
  case DELETE_PRODUCT:
    return products.filter(product => product !== action.payload)

  default:
    return products;
 }
}
