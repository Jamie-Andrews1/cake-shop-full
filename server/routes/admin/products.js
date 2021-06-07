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
.post( upload.single('image'), createProduct)
.get( getProductsAdmin)

router
.route('/:id')
.get( getProduct)
.post( upload.single('image'), editProduct)
.delete( deleteProduct )

module.exports = router;