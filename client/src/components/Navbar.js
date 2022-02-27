import React, { useState, useEffect } from 'react'
import '../styles/style.css'
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
// import decode from 'jwt-decode';
import { LOG_OUT } from '../actions/types';

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('person')))

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

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
    // To remove user if token has expired
    // const token = user.token
    // if(token) {
    //   const decodedToken = decode(token);

    //   if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }

    // setUser(JSON.parse(localStorage.getItem('person')))
  }, [location]);


  return (
    <div>
      <nav className="navbar">
        <span className="user"><h4>{user ? `Logged in as: ${user.data.name}` : 'Not logged in'}</h4>
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
