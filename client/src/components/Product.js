import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCart } from '../actions/cart';
import '../styles/style.css'


export default function Product({ product }) {
const [cartData, setCartData] = useState({ id: ''})

const dispatch = useDispatch();
const currentId = cartData.id

const item = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId): null);


  function onSubmit(e) {
    e.preventDefault();

    dispatch(createCart(item))
  }
  return (
    <div className="cake">
      <img src={product.image} alt=""/>
      <ul className="desc">
        <li className="title">{product.title}</li>
        <li className="price">£{product.price}</li>
      </ul>
    <footer className="card-footer">
      <form onSubmit={onSubmit}>
      <button onClick={() => setCartData({id: product._id})} className="button is-secondary" type="submit">Add to Cart</button>
      </form>
    </footer>
  </div>
  )
}