const express = require('express');
const storeController = express.Router();
const addCustomer = require('./add-store.controller');  
const addStoreCategory = require('./add-store-category.controller');  
const getStoreCategory = require('./get-store-category.controller');  

storeController.post('/add-customer', addCustomer);
storeController.post('/add-store-category', addStoreCategory);
storeController.post('/get-store-category', getStoreCategory);

module.exports = storeController;