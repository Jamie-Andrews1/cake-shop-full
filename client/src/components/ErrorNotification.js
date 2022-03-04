import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideError } from '../actions/errors';

function ErrorNotification() {
 const isOpen = useSelector(state => state.errors.isOpen);
 const error = useSelector(state => state.errors.error);

 const dispatch = useDispatch();

 function handleClose(){
  dispatch(hideError());
 }
 
 return (
 <>
 {isOpen && error && (
 <article className="message is-danger" style={{width:'fit-content'}}>
 <span className='message-body'>{error.message}</span>
 <button className='button is-danger is-small' onClick={handleClose}>Close Error</button>
 </article>
 )}
 </>
 )
}

export default ErrorNotification;