import {
  FETCH_CART,
  CREATE_CART,
  DELETE_CART,
  HIDE_SUCCESS,
  INCREMENT,
  DECREMENT
} from './types'

export const getCart = () => async (dispatch, getState) => {
  try {
    // const { data } = await api.fetchCart();
    const state = getState()

    dispatch({type: FETCH_CART, payload: state.cart });
  } catch (error) {
    console.log(error)
  }
}

export const createCart = (cart) => async (dispatch) => {
  try {
      // const {data} = await api.createCart(cart);
      
      dispatch({ type: CREATE_CART, payload: cart }) 
      
  } catch (error) {
    console.log(error)
  }
}
export const increment = (id) => async (dispatch, getState) => {
  try {
    const state = getState()
    
    dispatch({state, type: INCREMENT, payload: id})
  } catch (error) {
    console.log(error)
  }
}

export const decrement = (id) => async (dispatch, getState) => {
  try {
    const state = getState()

    dispatch({state, type: DECREMENT, payload: id})
  } catch (error) {
    console.log(error)
  }
}

export const deleteCart = (id) => async (dispatch, getState) => {
  try {
    // await api.deleteCart(id)
    const state = getState()

    dispatch({state, type: DELETE_CART, payload: id})
  } catch (error) {
    console.log(error)
  }
}
export const hideCartSuccess = () => (dispatch) => {
  dispatch({type: HIDE_SUCCESS})
}