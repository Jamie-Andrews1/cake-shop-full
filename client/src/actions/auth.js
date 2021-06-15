import * as api from '../api';


// Action creators
export const register = (formData, history) => async (dispatch) => {
  try {
     await api.register(formData)
  } catch (error) {
    console.log(error)
  }
}
// Create SignIn action


//Create logout action