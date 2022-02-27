import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createProduct, updateProduct } from '../actions/products';
import FileBase64 from 'react-file-base64';
import { Form, Field } from 'react-final-form'
import '../styles/main.css'


export default function MyForm(currentProduct){
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


  function clear() {
    currentId = null
    setProductData({ title: '', price: '', image: '' })
  }

  function onSubmit(values) {

  if(currentId){
     dispatch(updateProduct(currentId, values))
     
     history.push('/admin/products')
 
     window.location.reload()
 
   } else {           
     
     dispatch(createProduct(values));
 
     history.push('/admin/products')
     
     window.location.reload()
   }
   clear()
 
}

return (
<div className="columns is-centered">
  <div className="column is-half">
    <Form 
      onSubmit={onSubmit}
      initialValues={productData}
      validate={(values) => {
      const errors = {};

      if(!values.title) {
        errors.title = 'You must enter a title'
      }
      if(!values.price) {
        errors.price = 'You must enter a price'
      }
      if(!values.image) {
        errors.image = 'You must enter a image'
      }
      return errors
      }}
      render={({ handleSubmit }) => (
        
    <form onSubmit={handleSubmit}>
      <h1 className="subtitle">{currentId ? "Editing" : "Create"} a Product</h1>
        <Field name="title">
          {({ meta, input }) => (
        <div className="field">
        <label className="label">Title</label>
        <input {...input} className="input" name="title" placeholder="
        Title"
        />
        {meta.error && meta.touched && <span style={{color:'red', fontWeight: 600}}>{meta.error}</span>}
        </div>    
        )}
        </Field>
        <Field name="price" >
          {({ meta, input }) => (
        <div className="field">
        <label className="label">Price</label>
        <input {...input} className="input" placeholder="Price" name="price"/>
          {meta.error && meta.touched && <span style={{color:'red', fontWeight: 600}}>{meta.error}</span>}
          </div>
          )}
          </Field>
          <Field name="image">
          {({ meta }) => (
        <div className="fileInput">
        <label className="label">Image</label>            
        <FileBase64 type="file" name="image" 
          onDone={({base64}) => setProductData({ ...productData, image: base64 })} 
        />
        {meta.error && meta.touched && <span style={{color:'red', fontWeight: 600}}>{meta.error}</span>}
        </div>
          )}
        </Field>
      <br />
      <button className="button is-primary" type="submit"> 
      {currentId ? "Update" : "Create"}</button>
      </form>
      )}
      />
    </div>
  </div>
  )
}