import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, getCart } from '../actions/cart';
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  
  const items = useSelector((state) => state.cart)
  console.log(items);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]) 

  const totalPrice = items.reduce((prev, item) => {
    return prev + item.quantity * item.price;
  }, 0).toFixed(2);

  return (
    <div>
      {items
  .map(item => (
    <div id="cart" className="container" key={item._id}>
      <div className="columns">
        <div className="column"></div>
        <div className="column is-four-fifths">
          <h3 className="subtitle"><b>Shopping Cart</b></h3>
          <Link to="/" id="back">
          <h3>Back</h3>
          </Link>
      <div className="cart-item">
        <h3 className="subtitle">{item.title}</h3>
        <div className="price">
           Price: £{item.price} 
          </div>
          <div className="quantity">
           Quantity: {item.quantity}
          </div>
          <div className="total">
           Total: £{item.total}
          </div>
      
        <div className="remove">
              <button onClick={() => dispatch(deleteCart(item._id))} className="button is-danger"> &times;
              </button>
        </div>
      </div>
    </div>
    <div className="total">
            <div className="message-header">
              Total
            </div>
            <h1 className="title">£{totalPrice}</h1>
            <button className="button is-primary">Buy</button>
          </div>
        </div>
        <div className="column"></div>
      </div>
        )
      )
    }
    </div>
  )
}
