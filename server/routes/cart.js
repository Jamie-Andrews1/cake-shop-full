const express = require('express');
const {createCart, getCart, deleteItem} = require('../controllers/cart');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
.post(protect, createCart)
.get(protect, getCart)

router.route('/:id').delete( deleteItem)

module.exports = router;