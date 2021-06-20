// const upload = multer({ dest: '../../uploads/' })
const express = require('express');
const multer = require('multer');

// This for upload local storage
// const multerInstance = require('../../config/multer')

// This for mongoDb base64 upload
const upload = multer({ storage: multer.memoryStorage()});

const {createProduct, getProductsAdmin, getProduct, editProduct, deleteProduct } = require('../../controllers/shop');
const {protect} = require('../../middleware/auth');

const router = express.Router();

router
.route('/')
.post(protect, upload.single('image'), createProduct)
.get(protect, getProductsAdmin)

router
.route('/:id')
.get(protect, getProduct)
.put(protect, upload.single('image'), editProduct)
.delete(protect, deleteProduct)

module.exports = router;