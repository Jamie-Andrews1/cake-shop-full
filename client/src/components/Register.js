import React, { useState, useDispatch } from 'react'
import { Link, useHistory,  } from 'react-router-dom'
import { register } from '../actions/auth'

export default function Auth() {
  const history = useHistory();
  const dispatch = useDispatch()

  const initialState = { name: '', email: '', password: '', passwordConfirmation: '' }

  const [formData, setFormData] = useState(initialState)
  
  function onSubmit(e){
    e.preventDefault();
  
    dispatch(register(formData, history))
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
      <div className="columns is-centered">
          <div className="column is-one-quarter">
            <form onSubmit={onSubmit}>
              <h1 className="title">Register</h1>
              <div className="field">
                <label className="label">Name</label>
                <input className="input" placeholder="Name" 
                name="name" onChange={handleChange} />
              </div>
              <div className="field">
                <label className="label">Email</label>
                <input className="input" placeholder="Email" name="email" onChange={handleChange} />
              </div>
              <div className="field">
                <label className="label">Password</label>
                <input className="input" placeholder="Password" name="password" onChange={handleChange} type="password" />
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <input className="input" placeholder="Password Confirmation" name="passwordConfirmation" onChange={handleChange} type="password" />
              </div>
              <button className="button is-primary">Submit</button>
            </form>
            <Link to="/auth/signin">Have an account? Sign In</Link>
          </div>
        </div>
    </div>
  )
}
