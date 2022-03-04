import {
  HIDE_ERROR
} from './types'
 
 export const hideError = () => async (dispatch) => {
   
  dispatch({type: HIDE_ERROR})
  
 }