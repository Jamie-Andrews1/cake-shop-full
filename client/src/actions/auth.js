import * as api from '../api';
import  {
  REGISTER,
  SIGN_IN,
  LOG_OUT,
  SIGN_IN_ERROR,
  HIDE_SUCCESS
} from './types';

// Action creators
// Register action
export const register = (formData, history) => async (dispatch) => {
  try {
     const { data } = await api.register(formData);

     dispatch({ type: REGISTER, payload: data })

     history.push('/')
  } catch (error) {
    console.log(error)
  }
}
//  SignIn action
export const signIn = (formData, history) => async (dispatch) => {
  try {
     const response = await api.signIn(formData);

  if(response.statusText === 'OK') {
     dispatch({ type: SIGN_IN, payload: response.data })

     history.push('/')
  } else {
      dispatch(errorActionCreator(SIGN_IN_ERROR, response.error))
    }
  } catch (error) {
    dispatch(errorActionCreator(SIGN_IN_ERROR, error))
  }
}
// logout action
export const logOut = () => async (dispatch) => {
  try {
    const { data } = await api.logOut();

    dispatch({ type: LOG_OUT, payload: data });

  } catch (error) {
   console.log(error) 
  }
}
export const hideSuccess = () => (dispatch) => {
  dispatch({type: HIDE_SUCCESS})
}

export const errorActionCreator = (errorType, error) => {
  return {
    type: errorType,
    error: error,
    payload: null,
  }
}