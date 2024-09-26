const express = require('express');
const userController = express.Router();
const userLogin = require('./user-login.controller');
const getCustomer = require('./get-customer');

userController.post('/login', userLogin);
userController.post('/get-customer' , getCustomer);

module.exports = userController;