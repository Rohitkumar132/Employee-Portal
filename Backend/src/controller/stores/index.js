const express = require('express');
const storeController = express.Router();
const addCustomer = require('./add-store.controller');  
const addStoreCategory = require('./add-store-category.controller');  

storeController.post('/add-customer', addCustomer);
storeController.post('/add-store-category', addStoreCategory);

module.exports = storeController;