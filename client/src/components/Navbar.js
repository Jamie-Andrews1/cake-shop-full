import React, { useState } from 'react'
import '../styles/style.css'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// import decode from 'jwt-decode';
import { LOG_OUT } from '../actions/types';

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('person')))

  const dispatch = useDispatch();
  const history = useHistory();
  // const location = useLocation();

  console.log(user)
  const logout = () => {

    if(user){
    dispatch({ type: LOG_OUT});
    setUser(null);

    } else {
    history.push('/auth/signin')
    }

  }

  // useEffect(() => {
  //   const token = user.token
  //   if(token) {
  //     const decodedToken = decode(token);

  //     if(decodedToken.exp * 1000 < new Date().getTime()) logout();

  //   }
  //   setUser(JSON.parse(localStorage.getItem('person'))) 
  // }, [location]); 

  
  return (
  <div>
    <nav className="navbar">
        <span className="user"><h4>{user ? `Logged in as: ${user.data.name}`  : 'Not logged in'}</h4>
        <button className="button" onClick={() => logout()}>{user ? 'Logout' : 'Sign in'}</button>
        </span>
      <ul className="nav">
        <li><Link to="/">
          Home
        </Link>
        </li>
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
        {/* <li>
        <Link to="/auth">
          Authorization
        </Link>
        </li> */}
      </ul>
    </nav>
  </div>
  )
};
