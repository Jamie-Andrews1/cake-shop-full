import {
  REGISTER,
  SIGN_IN,
  LOG_OUT,
  HIDE_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  success: null
}
// reducer saving to local storage 
export default function reducer(auth = INITIAL_STATE, action){
  switch (action.type) {
    case REGISTER:
      localStorage.setItem('person', JSON.stringify({...action.payload}))
      return {...auth, isSignedIn: true, userId: action.payload, success: 'you are Registered'};
    case SIGN_IN:
      localStorage.setItem('person', JSON.stringify({...action.payload}))
      return {...auth, isSignedIn: true, userId: action.payload, success: 'you are Signed In'}
    case LOG_OUT:
        localStorage.clear()
      return {...auth, isSignedIn: false, userId: action.payload, success: null};
    case HIDE_SUCCESS:
      return {...auth, success: null}

    default: return auth
  }
};