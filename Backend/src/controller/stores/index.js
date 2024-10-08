const express = require('express');
const storeController = express.Router();
const addCustomer = require('./add-store.controller');  
const addStoreCategory = require('./add-store-category.controller');  
const getStoreCategory = require('./get-store-category.controller');  
const addStoreConfigs = require('./add-store-config.controller');  
const getStores = require('./get-stores.controller');


storeController
        .post('/add-customer', addCustomer)
        .post('/add-store-category', addStoreCategory)
        .get('/get-store-category', getStoreCategory)
        .post('/add-store-configs', addStoreConfigs)
        .get('/get-stores', getStores)
    
module.exports = storeController;