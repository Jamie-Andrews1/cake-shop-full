import * as api from '../api';
import {
  FETCH_CART,
  CREATE_CART,
  DELETE_CART
} from './types'

export const getCart = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCart();

    dispatch({ type: FETCH_CART, payload: data });

  } catch (error) {
    console.log(error)
  }
}

export const createCart = (cart) => async (dispatch) => {
  try {
    const {data} = await api.createCart(cart);

    dispatch({ type: CREATE_CART, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteCart = (id) => async (dispatch) => {
  try {
    await api.deleteCart(id)

    dispatch({ type: DELETE_CART, payload: id})
  } catch (error) {
      console.log(error)
  }
}