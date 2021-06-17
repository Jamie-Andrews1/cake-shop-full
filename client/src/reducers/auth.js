import {
  REGISTER,
  SIGN_IN,
  LOG_OUT
} from '../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}
// Sort out this to save to local storage. Also need to tell the state in the navbar.

export default function reducer(auth = INITIAL_STATE, action){
  switch (action.type) {
    case REGISTER:
      localStorage.setItem('person', JSON.stringify({...action.payload}))
      return {...auth, isSignedIn: true, userId: action.payload};
    case SIGN_IN:
      localStorage.setItem('person', JSON.stringify({...action.payload}))
      return {...auth, isSignedIn: true, userId: action.payload}
    case LOG_OUT:
        localStorage.clear()
      return {...auth, isSignedIn: false, userId: action.payload};

    default: return auth
  }
};