import React from 'react'
import '../styles/style.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const status = useSelector((state) => state.auth)

  console.log(status)

  return (
  <div>
    <nav className="navbar">
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
        <li>
        <Link to="/auth">
          Authorization
        </Link>
        </li>
      </ul>
    </nav>
  </div>
  )
};
