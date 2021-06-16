import {
  REGISTER,
  SIGN_IN,
  LOG_OUT
} from '../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}

export default function reducer(auth = INITIAL_STATE, action){
  switch (action.type) {
    case REGISTER:
      return {...auth, isSignedIn: true, userId: action.payload};
    case SIGN_IN:
      return {...auth, isSignedIn: true, userId: action.payload}
    case LOG_OUT:
      return {...auth, isSignedIn: false, userId: action.payload};

    default: return auth
  }
};