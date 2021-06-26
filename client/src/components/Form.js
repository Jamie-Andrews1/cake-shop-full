import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createProduct, updateProduct } from '../actions/products';
import FileBase64 from 'react-file-base64';
import '../styles/main.css'

export default function Form(currentProduct) {
const [productData, setProductData] = useState({
  title: '', price: '', image: ''
})
  let currentId = currentProduct.location.params

  const history = useHistory();

  const prod = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId): null);

  const dispatch = useDispatch();

  useEffect(() => {
    if(prod) 
      setProductData(prod)
  }, [prod])

  function onSubmit(e) {
    e.preventDefault();

    if(currentId){
      dispatch(updateProduct(currentId, productData))
      
      history.push('/admin/products')

      window.location.reload()

    } else {
      dispatch(createProduct(productData));

      history.push('/admin/products')

      window.location.reload()
    }
      clear()
  };

  function clear() {
    currentId = null
    setProductData({ title: '', price: '', image: '' })
  }

  return (
  <div className="columns is-centered">
    <div className="column is-half">
    <h1 className="subtitle">{currentId ? "Editing" : "Create"} a Product</h1>
      <form onSubmit={onSubmit}>

        <div className="field" >
        <label className="label">Title</label>
        <input className="input" name="title" placeholder="
        Title"
          value={productData.title}
          onChange={(e) => setProductData({ ...productData, title: e.target.value })}
        />
        </div>

        <div className="field" >
        <label className="label">Price</label>
        <input className="input" placeholder="Price" name="price"
          value={productData.price}
          onChange={(e) => setProductData({ ...productData, price: e.target.value })}
          />
          </div>
        <div className="fileInput">
        <label className="label">Image</label>            
        <FileBase64 type="file" name="image" 
          onDone={({base64}) => setProductData({ ...productData, image: base64 })}
        />
        </div>
      <br />
      <button className="button is-primary" type="submit">{currentId ? "Update" : "Create"}</button>
    </form>
    </div>
  </div>
  )
}