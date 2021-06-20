import * as api from '../api';

export const getCart = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCart();

    dispatch({ type: 'FETCH_CART', payload: data });

  } catch (error) {
    console.log(error)
  }
}

export const createCart = (bean) => async (dispatch) => {
  try {
    const {data} = await api.createCart(bean);

    dispatch({ type: 'CREATE_CART', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteCart = (id) => async (dispatch) => {
  try {
    await api.deleteCart(id)

    dispatch({ type: 'DELETE_CART', payload: id})
  } catch (error) {
      <h3 className="error">{error.message}</h3>
  }
}