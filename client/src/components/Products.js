import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/style.css";
import Product from "./Product";

export default function Products() {
  const [text, setText] = useState("");

  const products = useSelector(state => state.products);

  return (
    <div className="main">
      <div className="search">
        <span className="material-icons">Search</span>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type="search"
        />
      </div>
      <div className="cake-wrapper">
        {products.map(product => (
          <div key={product._id}>
            {product.title.toLowerCase().indexOf(text.toLowerCase()) !== -1 ? (
              <Product product={product} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
