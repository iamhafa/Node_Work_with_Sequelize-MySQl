const express = require('express');

const reportRoutes = express.Router();

const getReportConstroller = require('../controllers/report.controller');

reportRoutes.get('/', getReportConstroller.getReport);

module.exports = reportRoutes;
