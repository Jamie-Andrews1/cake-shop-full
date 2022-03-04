import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideSuccess } from '../actions/auth';

export function SuccessNotification() {
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const message = useSelector(state => state.auth.success)
  const dispatch = useDispatch();
  
  function handleClose(){
    dispatch(hideSuccess())
  }

  return (
    <>
    {isSignedIn && message && (
      <article className="message is-success" style={{width:'fit-content'}}>
      <span className='message-body'>{message}</span>
      <button className='button is-success is-small' onClick={handleClose}>Close</button>
      </article>    )}
    </>
  )
}
