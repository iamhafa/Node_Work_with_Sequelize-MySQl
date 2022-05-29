const express = require('express');
const CustomerController = require('../controllers/customer.controller');

// import validator
const {validateCustomerPOST, validateCustomerPUT} = require('../validator/validate.customer');

const customerRoutes = express.Router();

customerRoutes.post('/', validateCustomerPOST, CustomerController.addCustomer);

// customerRoutes.get('/', CustomerController.getAllCustomers);

customerRoutes.get('/:customerNumber', CustomerController.getOneCustomer);

customerRoutes.put('/:customerNumber', validateCustomerPUT, CustomerController.updateCustomer);

customerRoutes.delete('/:customerNumber', CustomerController.deleteCustomer);

customerRoutes.all('/', (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: 'Route not found'
  });
});

// export route
module.exports = customerRoutes;
