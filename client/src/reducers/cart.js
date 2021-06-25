import {
  FETCH_CART,
  CREATE_CART,
  DELETE_CART
} from '../actions/types';
// having problems with using array methods maybe try object methods
export default function reducer(items = [], action) {
  switch(action.type) {
   case FETCH_CART:
      return action.payload;
    case CREATE_CART:
      return [ ...items, action.payload]
    case DELETE_CART:
      return items.filter(cart => cart !== action.payload)

      default:
        return items;
  }
}
