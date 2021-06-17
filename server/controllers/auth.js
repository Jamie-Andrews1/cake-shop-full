const asyncHandler = require('express-async-handler');
const User = require('../models/user');

exports.register = asyncHandler (async (req, res, next)  => {
  const { name, email, password } = req.body

  //Create user
  const user = await User.create({
    name,
    email,
    password
  });

sendTokenResponse(user, 200, res);

});

exports.logIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if( !email || !password) {
    return next
  }

  const user = await User.findOne({ email }).select('+password');

  if(!user) {
    return next('Invalid credentials', 401);
  }
  const isMatch = await user.matchPassword(password);

  if(!isMatch){
    return next('invalid credentials', 401);
  }
  sendTokenResponse(user, 200, res)

});
exports.getMe = asyncHandler(async (req, res, next) => {
  
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user
  });
});
  
exports.logOut = asyncHandler (async (req, res, next) => {
  res.cookie('token', 'none', {
    expires:new Date(Date.now() + 10 * 1000),
    httpOnly: true
  })

  res.send('Logged out successfully')
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires : new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  };


  res.status(statusCode)
  .cookie('token', token, options)
  .json({
    userId: user._id,
    data: user,
    token
  })
}
