import axios from 'axios';

const url = 'http://localhost:5000/api/products';

const adminUrl = 'http://localhost:5000/api/admin'

export const fetchProducts = () => axios.get(url);

export const createProduct = (newProduct) => axios.post(adminUrl, newProduct);

export const updateProduct = (id, update) => axios.put(`${adminUrl}/${id}`, update);

export const deleteProduct = (id) => axios.delete(`${adminUrl}/${id}`);