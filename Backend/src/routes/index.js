const express = require('express');
const router = express.Router();
const userController = require('./../controller/users/index');
const employeeController = require('./../controller/employee/index');
const storeController = require('./../controller/stores/index');
const middleware = require('./../services/middleware');

router.use('/' , userController );
router.use('/employee', middleware, employeeController);
router.use('/store' , storeController)

module.exports = router;