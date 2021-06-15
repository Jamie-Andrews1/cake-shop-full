import React from 'react'
import { Link } from 'react-router-dom'

export default function Auth() {
  return (
    <div className="container">
      <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Register</h1>
              <div class="field">
                <label class="label">Name</label>
                <input class="input" placeholder="Name" name="name" />
              </div>
              <div class="field">
                <label class="label">Email</label>
                <input class="input" placeholder="Email" name="email" />
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input class="input" placeholder="Password" name="password" type="password" />
              </div>
              <div class="field">
                <label class="label">Password Confirmation</label>
                <input class="input" placeholder="Password Confirmation" name="passwordConfirmation" type="password" />
              </div>
              <button class="button is-primary">Submit</button>
            </form>
            <Link to="/auth/signin">Have an account? Sign In</Link>
          </div>
        </div>
    </div>
  )
}
