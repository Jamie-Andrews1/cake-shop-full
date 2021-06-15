import { useSelector } from 'react-redux';
import '../styles/style.css'
import Product from './Product'

export default function Products () {
  const products = useSelector((state) => state.products)
  
  return (
    <div>
      <div className="search">
        <span className="material-icons">
          Search
        </span>
        <input type="search" />
      </div>
      <br></br>
      <div className="cake-wrapper">
        {products.map((product) => (
        <div key={product._id}>
        <Product product={product} />
      </div>
        ))}
      </div>
    </div>
    )
  }

