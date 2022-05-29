const {Employee, Customer} = require('../models/index');

class EmployeeController {
  //* create employee
  async addEmployee(req, res, next) {
    try {
      const info = {
        employeeNumber: req.body.employeeNumber,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        reportsTo: req.body.reportsTo,
        customers: req.body.customers
      };

      if (info.customers) {
        for (let i = 0; i < info.customers.length; i++) {
          let customers = null;

          // check whether employee exit
          const checkExitEmployee = await Employee.findOne({
            where: {
              employeeNumber: info.employeeNumber
            }
          });

          // check whether customer exit
          const checkExitCustomer = await Customer.findOne({
            where: {
              customerNumber: info.customers[i]
            }
          });

          if (!checkExitEmployee && !checkExitCustomer) {
            const employee = await Employee.create(req.body);
            customers = await Customer.bulkCreate(info.customers);
            res.status(201).json({
              status: 'success',
              data: {
                employee,
                customers
              }
            });
          } else {
            res.status(400).json({
              status: 'failed',
              message: `Employee or Customer exited`
            });
          }
        }
      } else {
        const employee = await Employee.create(req.body);
        res.status(201).json({
          status: 'success',
          data: employee
        });
      }
    } catch (err) {
      next(err);
    }
  }

  //* get one employee
  async getOneEmployee(req, res, next) {
    try {
      const id = req.params.employeeNumber;

      const checkExitEmployee = await Employee.findOne({
        where: {
          employeeNumber: id
        }
      });

      if (checkExitEmployee) {
        res.status(200).json({
          status: 'success',
          data: checkExitEmployee
        });
      } else {
        res.status(404).json({
          status: 'failed',
          message: `Employee ${id} not found`
        });
      }
    } catch (err) {
      next(err);
    }
  }

  //* get all employee
  async getAllEmployee(req, res, next) {
    try {
      const employees = await Employee.findAll();

      if (employees.length > 0) {
        res.status(200).json({
          status: 'success',
          data: employees
        });
      } else {
        res.status(404).json({
          status: 'failed',
          message: 'No employee found'
        });
      }
    } catch (err) {
      next(err);
    }
  }

  //* update employee
  async updateEmployee(req, res, next) {
    try {
      const id = req.params.employeeNumber;

      const checkExitEmployee = await Employee.findOne({
        where: {
          employeeNumber: id
        }
      });

      if (checkExitEmployee) {
        await Employee.update(req.body, {
          where: {
            employeeNumber: id
          }
        });

        res.status(200).json({
          status: 'success',
          message: `Employee ${id} updated`
        });
      } else {
        res.status(404).json({
          status: 'failed',
          message: `Employee ${id} not found`
        });
      }
    } catch (err) {
      next(err);
    }
  }

  //* delete employee
  async deleteEmployee(req, res, next) {
    try {
      const id = req.params.employeeNumber;

      const checkExitEmployee = await Employee.findOne({
        where: {
          employeeNumber: id
        }
      });

      // convert Object to Json (vì Sequelize có nhiều kiểu dữ liệu khác nhau)
      const stringify = JSON.stringify(checkExitEmployee);

      // convert Json to Object
      const parse = JSON.parse(stringify);

      // TODO: check to see if this employee is Pr0 vjp or not
      if (!checkExitEmployee) {
        res.status(404).json({
          status: 'failed',
          message: `Employee ${id} not found`
        });
      } else if (parse.lastName.includes('9999')) {
        res.status(403).json({
          status: 'failed',
          message: 'Cannot delete this employee'
        });
      } else {
        await Employee.destroy({
          where: {
            employeeNumber: id
          }
        });

        res.status(200).json({
          status: 'success',
          message: `Employee ${id} deleted`
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new EmployeeController();
