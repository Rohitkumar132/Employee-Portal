const express = require('express');
const userController = express.Router();
const userLogin = require('./user-login.controller');

userController.post('/login', userLogin);


module.exports = userController;