const employeeController = require('./../controller/employee/index');
const storeController = require('./../controller/stores/index');
const userController = require('./../controller/users/index');
const middleware = require('./../services/middleware');

const express = require('express');
const router = express.Router();

router
    .use('/', userController)
    .use('/employee', middleware, employeeController)
    .use('/store', storeController)

module.exports = router;