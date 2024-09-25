const express = require('express');
const router = express.Router();
const userController = require('./../controller/users/index');
const employeeController = require('./../controller/register/index');

router.use('/' , userController );
router.use('/register' ,employeeController);

module.exports = router;