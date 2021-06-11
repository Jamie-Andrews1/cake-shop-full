const path = require('path');
const fs = require('fs');
const asyncHandler = require('express-async-handler');
const Product = require('../models/products');

//req.file.buffer.toString('base64');
// Image upload to mongoDb Method
exports.createProduct = asyncHandler(async (req, res, next) => {
  // Image upload to mongoDb Method
  const { title, price, image } = req.body;
  await Product.create({title, price, image});
  
res.status(201).json({
      success: true,
    }); 
})
// Create product
// @Route Post /admin/products/new

// Image upload to local disk 
// Create a product
// @ Route POST /admin/products/new
// exports.createProduct = asyncHandler(async (req, res, next) => {

//   const product = await Product.create
// ({title: req.body.title,
//   price: req.body.price,
//   image: req.file.path});

//   res.status(201).json({
//     success: true,
//     data: product
//   }); 
// });

// Get all products
// @Route Get /products
exports.getProducts = asyncHandler (async (req, res, next) => {
  const product = await Product.find()
  res.send(product)
 })

// Get all products
// @Route Get /admin/products
exports.getProductsAdmin = asyncHandler (async (req, res, next) => {
  const product = await Product.find()

  res.send(product)
 });

 // Get one Product
 // @Route Get /admin/product/:id
 exports.getProduct = asyncHandler (async (req, res, next) => {
  const product = await Product.findById(req.params.id)

   if(!product) {
    return next(`product not found with id of ${req.params.id}`, 404);
  }
   res.status(200).json({ success: true, data: product })
 });
// Cart
// @Route 

// Edit a product
// @Route Put /admin/products/edit/:id
exports.editProduct = asyncHandler (async (req, res, next) => {
  // let product = await Product.findById(req.params.id);
  // if(!product) {
  //   return next(`product not found with id of ${req.params.id}`, 404);
  // }
  const changes = req.body;

    // if (req.file) {
    //   changes.image = req.file.path;
    // }

  product = await Product.findByIdAndUpdate(req.params.id, changes,{
    new: true,
    runValidators: true
  });
  res.status(201).json({
    success: true,
  }); 
});

// Delete product
// @Route Delete /admin/products/delete/:id
exports.deleteProduct = asyncHandler (async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if(!product) {
    return next(`product not found with id of ${req.params.id}`, 404);
  }
  const changes = req.body;

    // if (req.file) {
    //   changes.image = req.file.path;
    // }

  product = await Product.findByIdAndUpdate(req.params.id, changes,{
    new: true,
    runValidators: true
  });
  product.remove();

  res.status(201).json({
    success: true,
  }); 
});