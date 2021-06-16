import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api'})

// Products apis
export const fetchProducts = () => API.get('/products');

export const createProduct = (newProduct) => API.post('/admin', newProduct);

export const updateProduct = (id, update) => API.put(`/admin/${id}`, update);

export const deleteProduct = (id) => API.delete(`/admin/${id}`);

// Auth apis
// Register
export const register = (person) => API.post(`/auth/register`, person)

// SignIn
export const signIn = (person) => API.post(`/auth/login`, person)
//register, signin and logout apis with json web token in headers.

// Logout
export const logOut = () => API.get('/auth/logout');