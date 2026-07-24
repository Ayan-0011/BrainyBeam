const express = require('express');
const router = express.Router();
const authcontroller = require('../Controllers/auth.controller')

router.post("/register", authcontroller.registerUser );

router.post("/login", authcontroller.loginUser );



module.exports = router