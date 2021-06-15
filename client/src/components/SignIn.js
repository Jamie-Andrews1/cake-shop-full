import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="container">
      <form method="POST">
              <h1 class="title">Sign in</h1>
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input required class="input" placeholder="Password" name="password" type="password" />
              </div>
              <button class="button is-primary">Submit</button>
            </form>
            <Link to="/auth">Need an account? Sign Up</Link>
    </div>
  )
}
