import { combineReducers } from 'redux';
import products from './products';
import auth from './auth'
import cart from './cart'
import errors from './errors'

export default combineReducers({
  products,
  auth,
  cart,
  errors
})