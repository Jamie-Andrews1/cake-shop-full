export default function reducer(auth = [], action){
  switch (action.type) {
    case 'REGISTER':
      return auth;
    case 'SIGN_IN':
      return auth
    case 'LOGOUT':
      return auth

    default: return auth
  }
};