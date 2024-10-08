const userLogin = require('./user-login.controller');
const getCustomer = require('./get-customer');

const express = require('express');
const routes = express.Router();

routes
    .post('/login', userLogin)
    .get('/get-customer', getCustomer);

module.exports = routes;