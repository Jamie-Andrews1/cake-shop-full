const asyncHandler = require('express-async-handler');
const Cart = require('../models/carts');
const user = require('../models/user');

// Create Cart
// @Route Get
exports.createCart = asyncHandler(async (req, res, next) => {
  const { productId, price, title } = req.body;

  let cart = await Cart.findOne({user: user.id});

  let quantity = 1
  let itemIndex
   if(cart) {
      itemIndex = cart.items.findIndex(p => p.productId.toString() === productId);
      console.log(itemIndex)
   if(itemIndex > -1){

    // if product exist update the quantity
    let productItem = cart.items[itemIndex];
    productItem.quantity+=1;
    productItem.total = parseFloat(productItem.quantity * price);
    cart.items[itemIndex] = productItem;
  } else {
    // Add new item if product does'nt exist
    cart.items.push({productId, title, quantity: 1, price, total: parseFloat(quantity * price)})
    cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
  }
  cart = await cart.save();
      
   }else{
    // Create new cart
  const newCart = await Cart.create({
    user: user.id,
    items: [{ productId, title, quantity: 1, price, total: parseFloat(quantity * price)}],
    subTotal: parseFloat(price * quantity)
  });
          return res.status(201).json({
                  success: true,
                        }); 
  }
});

exports.getCart = asyncHandler (async (req, res, next) => {
  const cart = await Cart.find({user: user.id});
  
  res.send(cart)
});

exports.deleteItem = asyncHandler (async (req, res, next) => {
  
  let id = req.params.id;
  
  await Cart.findOneAndUpdate(
    { user: user.id },
    { $pull: { items: { _id: id }}},
    { 'new': true }
  );
  res.status(200).json({
    success: true,
          });   });