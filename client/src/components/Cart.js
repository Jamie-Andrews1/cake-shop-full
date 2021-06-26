import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../actions/cart';
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();

  const {items} = useSelector((state) => state.cart)

  console.log(items)
  let totalPrice = null
  if(items) {
   totalPrice = items.reduce((prev, item) => {
    return prev + item.quantity * item.price;
  }, 0).toFixed(2);
}
  
  function delCart(prod) {
    dispatch(deleteCart(prod))

    window.location.reload()
  }

  return (
  items ? 
  <div className="columns is-centered">
      <div className="column is-four-fifths">
          <h3 className="subtitle"><b>Shopping Cart</b></h3>
          <Link to="/" id="back">
          <h3>Back</h3>
          </Link>
          <div>
  {items
  .map((item) => (
    <div>
    <div id="cart" className="container" key={item._id}>
      
      <div className="cart-item">

        <h3 className="subtitle">{item.title}</h3>
        <div className="price">
           Price: £{item.price} 
          </div>
          <div className="quantity">
           Quantity: {item.quantity}
          </div>
          <div className="total">
           Total: £{item.total.toFixed(2)}
          </div>
      
        <div className="remove">
              <button onClick={() => (delCart(item._id))} className="button is-danger"> &times;
              </button>
        </div>
      </div>
    </div>
        </div>
        )
      )
     }
      <div className="total">
            <div className="message-header">
              Total
            </div>
            <h1 className="title">£{totalPrice}</h1>
            <button className="button is-primary">Buy</button>
      </div>
    </div>
  </div>
</div>
: <div className="columns is-centered"><h2 style={{marginTop: "2rem"}}><b style={{color:"red"}}>Cart is Empty!! </b></h2></div>
  )
}
