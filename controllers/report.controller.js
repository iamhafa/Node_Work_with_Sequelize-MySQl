const {QueryTypes} = require('sequelize');
const {sequelize} = require('../models/index');

const getReport = async (req, res, next) => {
  try {
    const revenueOfEachOffice = await sequelize.query(
      `select T2.officeCode, T1.orderDate as start_date, T1.requiredDate as end_date,sum(T1.total_Price) as total_Revenue from (select o.orderNumber, o.orderDate, o.requiredDate, o.customerNumber, sum(o2.quantityOrdered * o2.priceEach) as total_Price from orders o join orderdetails o2 on o.orderNumber = o2.orderNumber group by o.orderNumber) T1
      inner join (select e.officeCode, c.customerNumber from employees e join customers c on e.employeeNumber = c.salesRepEmployeeNumber) T2
        on T1.customerNumber = T2.customerNumber group by T2.officeCode;
      `,
      {type: QueryTypes.SELECT}
    );

    const totalRevenue = await sequelize.query(
      `
      select sum(T3.total_amount) as total_All_Revenue 
        from (select T2.officeCode, T1.orderDate, sum(T1.total_Price) as total_amount from (select o.orderNumber, o.orderDate, o.customerNumber, sum(o2.quantityOrdered * o2.priceEach) as total_Price
          from orders o join orderdetails o2 on o.orderNumber = o2.orderNumber group by o.orderNumber) T1
            inner join (select e.officeCode, c.customerNumber from employees e join customers c on e.employeeNumber = c.salesRepEmployeeNumber) T2 on T1.customerNumber = T2.customerNumber group by T2.officeCode) as T3;
    `,
      {type: QueryTypes.SELECT}
    );

    res.status(200).json({
      status: 'success',
      totalRevenue,
      revenueOfEachOffice
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getReport
};
