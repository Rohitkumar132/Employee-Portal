const express = require('express');
const employeeController = express.Router();
const addEmployee = require('./add-employee.controller');
const getEmployee = require('./get-employee.controller');
const getAllEmployees = require('./get-all-employee.controller'); 
const updateEmployee = require('./update-employee.controller')

employeeController.post('/add-employee', addEmployee);
employeeController.get('/employee-details' , getEmployee);
employeeController.get('/all-employee', getAllEmployees);
employeeController.post('/update-employee' , updateEmployee);

module.exports = employeeController;