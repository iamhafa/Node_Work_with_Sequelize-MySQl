const express = require('express');

const app = express();

const {sequelize} = require('./models/index');

// use .env file
require('dotenv').config();

// import routes
const customerRoutes = require('./routes/customer.routes');
const employeeRoutes = require('./routes/employee.routes');
const reportRoutes = require('./routes/report.routes');

// middleware to use json
app.use(express.json());

// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/reports', reportRoutes);

//* catch all err when ant other route throw
app.use((err, req, res, next) => {
  console.error('*** ERROR ***', err.message);
  return res.json({
    status: 'error',
    message: err.message
  });
});

// sync database
app.listen(process.env.PORT, async () => {
  try {
    // xac nhan co ket noi den database
    await sequelize.authenticate();
    console.log(`>>> CONNECT database success`);

    // dong bo du lieu vao database
    // await sequelize.sync({force: true});

    await sequelize.sync({alter: false});
    //* force true để xóa bảng trước nếu có rồi tạo bảng mới
    //* alter true để thay đổi bảng
    console.log(`>>> SYNC database success`);
  } catch (error) {
    console.log('Unable to connect to the database:', error.message);
  }
});
