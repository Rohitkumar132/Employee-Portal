const express = require('express');
const employeeController = express.Router();
const addEmployee = require('./add-employee.controller');
const getEmployee = require('./get-employee.controller');
const getAllEmployees = require('./get-all-employee.controller');
const updateEmployee = require('./update-employee.controller')

employeeController
    .post('/add-employee', addEmployee)
    .get('/all-employee', getAllEmployees)
    .post('/update-employee', updateEmployee)
    .get('/:id', getEmployee)

module.exports = employeeController;