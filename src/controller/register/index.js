const express = require('express');
const employeeController = express.Router();
const addEmployee = require('./add-employee.controller');

employeeController.post('/add-employee', addEmployee);

module.exports = employeeController;