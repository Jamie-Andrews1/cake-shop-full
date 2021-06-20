
export default function reducer(items = [], action) {
  switch(action.type) {
    case 'FETCH_CART':
      return action.payload;
    case 'CREATE_CART':
      return [ ...items, action.payload]
    case 'DELETE_CART':
      return items.filter(cart => cart !== action.payload)

      default:
        return items;
  }
}
