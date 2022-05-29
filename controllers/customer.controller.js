const {Customer} = require('../models/index');

class CustomerController {
  //* create customer
  async addCustomer(req, res, next) {
    try {
      const info = {
        customerNumber: req.body.customerNumber,
        customerName: req.body.customerName,
        contactLastName: req.body.contactLastName,
        contactFirstName: req.body.contactFirstName,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country,
        salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
        creditLimit: req.body.creditLimit
      };

      // check if customerNumber is existed
      const checkExitCustomer = await Customer.findOne({
        where: {
          customerNumber: info.customerNumber
        }
      });

      // if customerNumber is existed, return err
      if (checkExitCustomer) {
        res.status(400).json({
          status: 'failed',
          message: `customer number ${info.customerNumber} existed`
        });
      } else {
        await Customer.create(info);
        res.status(201).json({
          status: 'success',
          message: `Customer ID ${info.customerNumber} created`,
          data: info
        });
      }
    } catch (err) {
      next(err);
    }
  }

  //* get all customers
  async getAllCustomers(req, res, next) {
    try {
      // get all customers
      const customers = await Customer.findAll({});

      // return all customers
      if (customers) {
        res.status(200).json({
          status: 'success',
          data: customers
        });
      } else {
        res.status(404).json({
          status: 'failed',
          message: 'No customer found'
        });
      }
    } catch (err) {
      next(err);
    }
  }

  //* get 1 customer
  async getOneCustomer(req, res, next) {
    try {
      const {customerNumber} = req.params;

      const customer = await Customer.findOne({
        where: {
          customerNumber
        }
      });

      // check if have customer
      if (customer) {
        res.status(200).json({
          status: 'success',
          data: customer
        });
      } else {
        res.status(404).json({
          status: 'failed',
          message: `Customer number ${customerNumber} not found`
        });
      }
    } catch (err) {
      next(err);
    }
  }

  //* update customer
  async updateCustomer(req, res, next) {
    try {
      const id = req.params.customerNumber;

      const checkExitCustomer = await Customer.findOne({
        where: {
          customerNumber: id
        }
      });

      if (checkExitCustomer) {
        await Customer.update(req.body, {
          where: {
            customerNumber: id
          }
        });
        res.status(200).json({
          status: 'success',
          message: `Customer number ${id} updated`
        });
      } else {
        res.status(404).json({
          status: 'failed',
          message: 'Customer not found'
        });
      }
    } catch (err) {
      next(err);
    }
  }

  //* delete customer
  async deleteCustomer(req, res, next) {
    try {
      const id = req.params.customerNumber;

      const checkExitCustomer = await Customer.findOne({
        where: {
          customerNumber: id
        }
      });

      if (checkExitCustomer) {
        await Customer.destroy({
          where: {
            customerNumber: id
          }
        });
        res.status(200).json({
          status: 'success',
          message: `Customer number ${id} deleted`
        });
      } else {
        res.status(404).json({
          status: 'failed',
          message: `Customer number ${id} not found`
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CustomerController();
