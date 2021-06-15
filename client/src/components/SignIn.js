import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
          <form method="POST">
            <h1 className="title">Sign in</h1>
            <div className="field">
              <label className="label">Email</label>
              <input required className="input" placeholder="Email" name="email" />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input required className="input" placeholder="Password" name="password" type="password" />
            </div>
            <button className="button is-primary">Submit</button>
          </form>
            <Link to="/auth">Need an account? Sign Up</Link>    
        </div>
      </div>  
    </div>
  )
}
