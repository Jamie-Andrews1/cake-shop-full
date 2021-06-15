import React from 'react';
import '../styles/style.css'


export default function Product({ product }) {
  return (
    <div className="cake">
      <img src={product.image} alt=""/>
      <ul className="desc">
        <li className="title">{product.title}</li>
        <li className="price">£{product.price}</li>
      </ul>
    <footer className="card-footer">
    <form action="/carts/cart" method="POST">
      <input type="hidden" value={product.id} name="productsId" />
      <input type="hidden" value={product.title} name="title" />
      <input type="hidden" value={product.quantity} name="quantity" />
      <input type="hidden" value={product.price} name="price" />
      <button>Add to Cart</button>
    </form>
    </footer>
  </div>
  )
}