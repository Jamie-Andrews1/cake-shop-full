const express = require('express');
const {createCart, getCart, deleteItem} = require('../controllers/cart');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
.post( createCart)
.get( getCart)

router.route('/delete/:id').post( deleteItem)

module.exports = router;