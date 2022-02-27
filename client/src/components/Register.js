import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory,  } from 'react-router-dom'
import { register } from '../actions/auth'
import { Form, Field } from 'react-final-form'

export default function Auth() {
  const history = useHistory();
  const dispatch = useDispatch();

  async function onSubmit(values){ 
    
    dispatch(register(values, history))
  }
  
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-one-quarter">
          <Form 
          onSubmit={onSubmit}
          validate={values => {
            const errors = {}
            const val = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            if (!values.name < 2) {
              errors.name = 'Required'
            }
            if (!val.test(values.email)) {
              errors.email = 'Not a valid email'
            }
            const pass = /[\w.+$%-/!]{7,14}/
            if (!pass.test(values.password)) {
              errors.password = 'must be at least 6 characters'
            }
            if (!values.confirm) {
              errors.confirm = 'Required'
            } else if (values.confirm !== values.password) {
              errors.confirm = 'Must match password'
            }
            return errors
          }}
          render={({
            handleSubmit,
            
          }) => (
          <form onSubmit={handleSubmit}>
              <h1 className="title">Register</h1>
              <Field name="name" >
              {({ input, meta }) => (
              <div className="field">
                <label className="label">Name</label>
                <input className="input" {...input}
                placeholder="Name" 
                name="name" />
                {(meta.error || meta.submitError) && meta.touched && (
                  <span style={{color:'red', fontWeight: 600}}>{meta.error || meta.submitError}</span>
                )}
              </div>
              )}
              </Field>
              <Field name="email">
              {({ input, meta }) => (
              <div className="field">
                <label className="label">Email</label>
                <input {...input} className="input" placeholder="Email" name="email"/>
                {(meta.error || meta.submitError) && meta.touched && (
                  <span style={{color:'red', fontWeight: 600}}>{meta.error || meta.submitError}</span>
                )}
              </div>
              )}
              </Field>
              <Field name="password">
              {({ input, meta }) => (
              <div className="field">
                <label className="label">Password</label>
                <input {...input} className="input" placeholder="Password" name="password"  type="password" />
                {(meta.error || meta.submitError) && meta.touched && (
                  <span style={{color:'red', fontWeight: 600}}>{meta.error || meta.submitError}</span>
                )}
              </div>
              )}
              </Field>
              <Field name="confirm" > 
              {({ input, meta }) => (
              <div className="field">
                <label className="label">Password Confirmation</label>
                <input {...input} className="input" placeholder="Password Confirmation" name="confirm" type="password" />
                {(meta.error || meta.submitError) && meta.touched && (
                  <span style={{color:'red', fontWeight: 600}}>{meta.error || meta.submitError}</span>
                )}
              </div>
              )}
              </Field>
              <button className="button is-primary" >Submit</button>
              <Link to="/auth/signin"> Have an account? Sign In</Link>
            </form>
            )}
          />
        </div>
      </div>
    </div>
  )
}
