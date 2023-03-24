import React  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../styles/main.css'
import { Link } from 'react-router-dom';
import { deleteProduct } from '../actions/products';


export default function AdminProduct() {
  const products = useSelector((state) => state.products)

  const dispatch = useDispatch();

  function delProduct(prod) {
    dispatch(deleteProduct(prod))

    window.location.reload()
  }

  return (
      <div className="columns is-centered">
        <div className="column is-half">
        <div className="control">
          <h1 className="subtitle">Products</h1>
          <Link to="/admin" className="button is-primary">New Product
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product) => (
          <tr key={product._id}>
          <td>{product.title}</td>
          <td>{product.price.toFixed(2)}</td>
          <td>
          <Link to={{
            pathname:"/admin", 
            params: product._id }}>
              <button className="button is-link">
                Edit
              </button>
            </Link>
          </td>
          <td>
          <button onClick={() => delProduct(product._id)}
              className="button is-danger">Delete</button>
          </td>
        </tr>
        ))}
        </tbody>
        </table>
        </div>
      </div>
  )
}
