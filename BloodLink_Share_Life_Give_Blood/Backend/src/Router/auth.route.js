const express = require('express');
const Router = express.Router();
const authcontroller = require('../Controller/auth.controller');
const protect = require('../Middleware/auth.middleware')

Router.post('/register', authcontroller.registerUser);

Router.post('/login', authcontroller.login);


Router.get('/me', protect, (req, res)=>{
    res.status(200).json({
        user:req.user
    });
})

module.exports = Router