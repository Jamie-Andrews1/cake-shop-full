const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const cors = require('cors');
const cookieParser  = require('cookie-parser');

// Route files
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/cart');
const adminProductsRouter = require('./routes/admin/products');
const authRouter = require('./routes/admin/auth');

const app = express();

// Body parser
app.use(express.json());
// Load env vars
dotenv.config({ path: './config/config.env'});

// Load cookieParser
app.use(cookieParser());

app.use(morgan('dev'));

// connect to database
connectDB()

// Enable CORS
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Mount routers
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/admin', adminProductsRouter);
app.use('/api/auth', authRouter);


app.listen(5000, () => {
  console.log('listening on port 5000'.brightMagenta);
});