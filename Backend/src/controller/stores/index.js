const express = require('express');
const storeController = express.Router();
const addCustomer = require('./add-store.controller');  

storeController.post('/add-customer', addCustomer);

module.exports = storeController;