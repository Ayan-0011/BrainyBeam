const express = require('express');
const Router = express.Router();
const authcontroller = require('../Controller/auth.controller');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');



Router.post('/register', authcontroller.registerUser);
Router.post('/login', authcontroller.login);

Router.post('/register/patient', authcontroller.registerPatient);
Router.post('/register/donor', authcontroller.registerDonor);

Router.post('/admin/login', authcontroller.adminLogin);

Router.get('/admin', authorize("admin"), (req, res) => {
    res.json({ message: "Welcome Admin" });
});



Router.get('/me', protect, (req, res) => {
    res.status(200).json({
        user: req.user
    });
})

module.exports = Router