const express = require('express');
const router = express.Router();

const employeesCtrl = require('../controllers/employees');

// Get /employees
router.get('/', employeesCtrl.index);
// Get Add Employees
router.get('/new', employeesCtrl.new);
// GET /employees/:id (show functionality) MUST be below new route
router.get('/:id', employeesCtrl.show);
// POST /employees
router.post('/', employeesCtrl.create);


module.exports = router;