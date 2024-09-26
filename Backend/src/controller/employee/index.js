const express = require('express');
const employeeController = express.Router();
const addEmployee = require('./add-employee.controller');
const getEmployee = require('./get-employee.controller');
const getAllEmployees = require('./get-all-employee.controller'); 


employeeController.post('/add-employee', addEmployee);
employeeController.get('/employee-details' , getEmployee);
employeeController.get('/all-employee' , getAllEmployees);

module.exports = employeeController;