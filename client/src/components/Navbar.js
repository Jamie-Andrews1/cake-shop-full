import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom';

export default function Navbar() {

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
