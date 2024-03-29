import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCart, deleteCart, increment, decrement } from '../actions/cart';
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getCart())

  },[dispatch])

  let {items} = useSelector((state) => state.cart)
  
  let totalPrice = null
  if(items) {
   totalPrice = items.reduce((prev, item) => {
    return prev + item.quantity * item.price;
  }, 0).toFixed(2);
}

function delCart(prod) {
    dispatch(deleteCart(prod))

  }
  
  return (
  items ? 
  <div className="columns is-centered" style={{width:"100%", margin:"0"}}>
      <div className="column is-four-fifths">
          <h3 className="subtitle"><b>Shopping Cart</b></h3>
          <Link to="/" id="back">
          <h3>Back</h3>
          </Link>
          <div>
  {items
  .map((item,i) => (
    <div id="cart" className="container" key={i}>
      <div className="cart-item">
        <img style={{width:'100px',height:'100px'}} src={item.image} alt='product'/>
        <h3 className="subtitle">{item.title}</h3>
        <div className="price">
           Price: £{item.price.toFixed(2)} 
          </div>
          <div className="quantity">
           Qty: 
           <button  
           disabled={item.quantity <= 1}
           onClick={() => dispatch(decrement(item.productId))}
           > - </button>
           {item.quantity}
           <button onClick={() => dispatch(increment(item.productId))}>+</button>
          </div>
          <div className="total">
           Total: £{item.total.toFixed(2)}
          </div>
      
        <div className="remove">
              <button onClick={() => (delCart(item.productId))} className="button is-danger"> &times;
              </button>
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
