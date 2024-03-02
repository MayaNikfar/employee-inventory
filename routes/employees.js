const express = require('express');
const router = express.Router();

const employeesCtrl = require('../controllers/employees');

// Get first page- All Employees
router.get('/', employeesCtrl.index);


module.exports = router;