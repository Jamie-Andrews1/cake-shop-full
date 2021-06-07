const express = require('express');

const { register, logIn, logOut, getMe } = require('../../controllers/auth');
const { protect } = require('../../middleware/auth');


const router = express.Router();

router.post('/register', register);
router.post('/login', logIn);
router.get('/logout', logOut);
router.get('/getme', protect, getMe);

module.exports = router;