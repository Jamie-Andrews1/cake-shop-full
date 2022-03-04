import React, { useState, useEffect } from 'react'
import '../styles/style.css'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOG_OUT } from '../actions/types';

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('person')))

  const dispatch = useDispatch();
  const history = useHistory();
  const logged = useSelector((state) => state.auth.isSignedIn)

  function logout() {
    dispatch({ type: LOG_OUT });

    history.push('/')

    setUser(null);
  }

  function navBtn() {

    if (user) {
      logout()

    } else {
      history.push('/auth/signin')
    }
  }
  
  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem('person')))
     
  }, [logged]);


  return (
    <div>
      <nav className="navbar">
        <span className="user"><h4>{user ? `Logged in as: ${user.data.name}`: 'Not logged in' }</h4>
          <button className="button" onClick={() => navBtn()}>{user ? 'Logout' : 'Sign in'}</button>
        </span>
        <ul className="nav">
          <li><Link to="/">
            Home
          </Link>
          </li>
          <li><Link to="/cart">
            Cart
          </Link>
          </li>
          {user ? 
          <>
          <li>
            <Link to="/admin">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/admin/products">
              Admin Products
            </Link>
          </li>
          </>
           : null}
        </ul>
      </nav>
    </div>
  )
};
