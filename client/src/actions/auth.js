import * as api from '../api';
import  {
  REGISTER,
  SIGN_IN,
  LOG_OUT
} from './types'


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
     const { data } = await api.signIn(formData);

     dispatch({ type: SIGN_IN, payload: data })

     history.push('/')
  } catch (error) {
    console.log(error)
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