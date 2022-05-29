const express = require('express');
const EmployeeController = require('../controllers/employee.controller');

// import validator
const {validateEmployeePOST, validateEmployeePUT} = require('../validator/validate.employee');

const employeeRoutes = express.Router();

employeeRoutes.post('/', validateEmployeePOST, EmployeeController.addEmployee);

// employeeRoutes.get('/', EmployeeController.getAllEmployee);

employeeRoutes.get('/:employeeNumber', EmployeeController.getOneEmployee);

employeeRoutes.put('/:employeeNumber', validateEmployeePUT, EmployeeController.updateEmployee);

employeeRoutes.delete('/:employeeNumber', EmployeeController.deleteEmployee);

employeeRoutes.all('/', (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: 'Route not found'
  });
});

// export route
module.exports = employeeRoutes;
