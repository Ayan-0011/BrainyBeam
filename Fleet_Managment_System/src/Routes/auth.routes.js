const express = require('express');
const router = express.Router();
const authcontroller = require('../Controllers/auth.controller');
const protect = require('../Middleware/auth.middleware');

router.post("/register", authcontroller.registerUser );

router.post("/login", authcontroller.loginUser );

router.get('/me', protect, (req, res)=>{
    res.status(200).json({
        user:req.user
    });
})

router.post("/logout", authcontroller.logoutUser);








module.exports = router