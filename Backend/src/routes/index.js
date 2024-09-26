const express = require('express');
const router = express.Router();
const userController = require('./../controller/users/index');
const employeeController = require('./../controller/employee/index');
const storeController = require('./../controller/stores/index')

router.use('/' , userController );
router.use('/employee' ,employeeController);
router.use('/store' , storeController)

module.exports = router;