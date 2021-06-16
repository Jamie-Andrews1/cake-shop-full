import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory,  } from 'react-router-dom';
import { signIn } from '../actions/auth'

export default function LogIn() {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialState = { name: '', email: ''};

  const [formData, setFormData] = useState(initialState)

  function onSubmit(e){
    e.preventDefault();
    
    dispatch(signIn(formData, history))
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
          <form onSubmit={onSubmit} >
            <h1 className="title">Sign in</h1>
            <div className="field">
              <label className="label">Email</label>
              <input required className="input" placeholder="Email" name="email" onChange={handleChange}/>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input required className="input" placeholder="Password" name="password" type="password" onChange={handleChange} />
            </div>
            <button className="button is-primary">Submit</button>
          </form>
            <Link to="/auth">Need an account? Sign Up</Link>    
        </div>
      </div>  
    </div>
  )
}
