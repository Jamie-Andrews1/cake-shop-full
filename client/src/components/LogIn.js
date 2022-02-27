import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory,  } from 'react-router-dom';
import { signIn } from '../actions/auth'
import { Form, Field } from 'react-final-form'

export default function LogIn() {
  const history = useHistory();
  const dispatch = useDispatch();

  function onSubmit(values){
    
    dispatch(signIn(values, history))

  }

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
        <Form 
          onSubmit={onSubmit}
          validate={values => {
            const errors = {}
            const val = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            console.log(values.password)
            if (!val.test(values.email)) {
              errors.email = 'Not a valid email'
            } 
            const pass = /[\w.+$%-/!]{7,14}/
            if (!pass.test(values.password)) {
              errors.password = 'must be at least 6 characters'
            }
            return errors
          }}
          render={({
            handleSubmit,
            
          }) => (
          <form onSubmit={handleSubmit} >
            <h1 className="title">Sign in</h1>
            <Field name="email">
            {({ input, meta }) => (
            <div className="field">
              <label className="label">Email</label>
              <input {...input} className="input" placeholder="Email" name="email" />
              {(meta.error || meta.submitError) && meta.touched && (
              <span style={{color:'red', fontWeight: 600}}>{meta.error || meta.submitError}</span>)}
            </div>
            )}
            </Field>
            <Field name="password">
            {({ input, meta }) => (
            <div className="field">
              <label className="label">Password</label>
              <input {...input} className="input" placeholder="Password" name="password" type="password"/>
              {(meta.error || meta.submitError) && meta.touched && (
                  <span style={{color:'red', fontWeight: 600}}>{meta.error || meta.submitError}</span>
                )}
            </div>
            )}
            </Field>
            <button className="button is-primary">Submit</button>
            <Link to="/auth"> Need an account? Sign Up</Link>    
          </form>
            )}
          />
        </div>
      </div>  
    </div>
  )
}
