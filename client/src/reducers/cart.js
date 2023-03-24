import {
  FETCH_CART,
  CREATE_CART,
  DELETE_CART,
  HIDE_SUCCESS,
  INCREMENT,
  DECREMENT
} from '../actions/types';

const INITIAL_STATE = {
  items:[],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_CART:
      if(localStorage.getItem('cart')){
       return JSON.parse(localStorage.getItem('cart'))
      }
      return action.payload;

    case CREATE_CART:
      const itemIndex = state.items.findIndex(item => item.productId === action.payload.productId)
          if(itemIndex > -1){
            const cartItem = state.items[itemIndex]
            const newArray = [...state.items]
            newArray[itemIndex].quantity = newArray[itemIndex].quantity+=1 
            newArray[itemIndex].total = parseFloat(cartItem.quantity * cartItem.price)

            localStorage.setItem('cart', JSON.stringify({...state,
              items: newArray}))
            return {...state,
                items: newArray,
                success:`${cartItem.title} Added to Cart`
            }
          } else {
            localStorage.setItem('cart', JSON.stringify({...state,
              items:[
                ...state.items,{...action.payload,
                  quantity: 1, 
                  total: action.payload.price,
                }
              ]}))
            return {...state,
            success:`${action.payload.title} Added to Cart`,
            items:[
              ...state.items,{...action.payload,
                quantity: 1, 
                total: action.payload.price,
              }
            ]
          }
        }

    case INCREMENT:
      const incrementIndex = state.items.findIndex(item => item.productId === action.payload)
      if(incrementIndex > -1){
      const cartItem = state.items[incrementIndex]
      const newArray = [...state.items]
      newArray[incrementIndex].quantity++
      newArray[incrementIndex].total = parseFloat(cartItem.quantity * cartItem.price)

      localStorage.setItem('cart', JSON.stringify({...state,
        items: newArray}))
      return {...state,
          items: newArray,
          success:`Another ${cartItem.title} Added`
      }
    } else {
      return state
    }

    case DECREMENT:
      const decrementIndex = state.items.findIndex(item => item.productId === action.payload)
      if(decrementIndex > -1){
      const dectItem = state.items[decrementIndex]
      const decArray = [...state.items]
      decArray[decrementIndex].quantity--
      decArray[decrementIndex].total = parseFloat(dectItem.quantity * dectItem.price)

      localStorage.setItem('cart', JSON.stringify({...state,
        items: decArray}))
      return {...state,
          items: decArray,
          success:`1 ${dectItem.title} Removed`
      }
    } else {
      return state
    }
    
    case DELETE_CART:
      const item = state.items.find(item => item.productId === action.payload)

      localStorage.setItem('cart', JSON.stringify({...state,
        items: state.items.filter(item => item.productId !== action.payload)}))

      return{ ...state,
        success:`${item.title} Removed from Cart`,
        items: state.items.filter(item => item.productId !== action.payload)}

    case HIDE_SUCCESS:
      localStorage.setItem('cart', JSON.stringify({...state, success:null}))
      return {...state, success: null}

      default:
        return state;
  }
}