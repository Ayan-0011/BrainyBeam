const expresss = require('express');
const protect = require('../Middleware/auth.middleware');
const authorize = require('../Middleware/role.middleware');
const ReportIssue = require('../Controllers/ReportIssue.controller');

const Router = expresss.Router();


Router.post('/create', protect, authorize("driver", "dispatcher"), ReportIssue.createReportIssue);


module.exports = Router;