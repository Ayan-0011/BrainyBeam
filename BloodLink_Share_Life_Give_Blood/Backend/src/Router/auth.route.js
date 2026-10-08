const express = require('express');
const Router = express.Router();
const authcontroller = require('../Controller/auth.controller');

Router.post('/register', authcontroller.registerUser);

Router.post('/login', authcontroller.login);


router.get('/getProfile', protect, (req, res)=>{
    res.status(200).json({
        user:req.user
    });
})

module.exports = Router