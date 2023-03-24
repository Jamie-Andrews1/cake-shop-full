import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCart } from '../actions/cart';
import '../styles/style.css'

export default function Product({ product }) {
const [cartData, setCartData] = useState({ id: ''})

const dispatch = useDispatch();

  async function onSubmit(e) {
    e.preventDefault();

    dispatch(createCart(cartData))
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
        image:product.image,
        quantity: product.quantity, 
        price: product.price,
      })} 
        className="button is-secondary" type="submit">Add to Cart</button>
      </form>
    </footer>
  </div>
  )
}