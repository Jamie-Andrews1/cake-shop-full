import React from 'react'

export default function Edit({ product }) {
  return (
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="subtitle"> Edit a Product</h1>

        <form method="POST" enctype="multipart/form-data">
          <div className="field">
          <label className="label">Title</label>
          <input 
          value={product.title}
          className="input" 
          placeholder="Title" 
          name="title"/>
          </div>
    
          <div className="field">
          <label className="label">Price</label>
          <input value={product.price} className="input" placeholder="Price" name="price"/>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <input type="file" name="image" />
            </div>
            <br />
            <button className="button is-primary">Edit</button>
        </form>
      </div>
  </div>
  )
}
