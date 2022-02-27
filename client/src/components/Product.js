import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCart } from '../actions/cart';
import { useHistory } from 'react-router-dom';
import '../styles/style.css'

export default function Product({ product }) {
const [cartData, setCartData] = useState({ id: ''})

const dispatch = useDispatch();
const history = useHistory()

  function onSubmit(e) {
    e.preventDefault();

    dispatch(createCart(cartData))
  
    history.push('/cart')
    window.location.reload()
  }

  return (
    <div className="cake">
      <img src={product.image} alt=""/>
      <ul className="desc">
        <li className="title">{product.title}</li>
        <li className="price">£{product.price.toFixed(2)}</li>
      </ul>
    <footer className="card-footer">
      <form onSubmit={onSubmit}>
      <button onClick={() => setCartData({
        productId: product._id, 
        title: product.title, 
        quantity: product.quantity, 
        price: product.price
      })} 
        className="button is-secondary" type="submit">Add to Cart</button>
      </form>
    </footer>
  </div>
  )
}