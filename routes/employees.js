const express = require('express');
const router = express.Router();

const employeesCtrl = require('../controllers/employees');
const ensureLoggedIn = require('../config/ensureLoggedIn');
// Get /employees
router.get('/', employeesCtrl.index);
// Get Add Employees
router.get('/new', ensureLoggedIn, employeesCtrl.new);
// GET /employees/:id (show functionality) MUST be below new route
router.get('/:id', employeesCtrl.show);
// POST /employees
router.post('/', ensureLoggedIn, employeesCtrl.create);


module.exports = router;