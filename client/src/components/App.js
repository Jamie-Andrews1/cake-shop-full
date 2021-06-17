import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getProducts } from '../actions/products';
import Navbar from './Navbar';
import Products from './Products';
import AdminProducts from './AdminProducts';
import Register from './Register';
import LogIn from './LogIn';
import history from '../history'
import { Router, Route, Switch } from 'react-router-dom';
import Form from './Form'
import '../styles/style.css'

export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]) 

  return (
    <div>
        <header><h2>Our</h2><h1>Store</h1></header>
    <Router history={history}>
      <div>
      <Navbar />
        <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/admin" exact component={Form} />
        <Route path="/admin/products" exact component={AdminProducts}/> 
        <Route path="/auth" exact component={Register}/> 
        <Route path="/auth/signin" exact component={LogIn}/> 
        </Switch>
      </div>
    </Router>
    </div>
  )
}
