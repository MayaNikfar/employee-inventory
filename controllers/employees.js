const Employee = require('../models/employee');

module.exports = {
    index,
    show,
    new: newEmployee,
    create
};
async function index(req, res){
    const employees = await Employee.find({});
    res.render('employees/index', {title: 'All Employees', employees });
}
async function show(req,res){
  const employee = await Employee.findById(req.params.id);
  res.render('employees/show', {title: 'Employee Detail', employee });
}
function newEmployee(req,res) {
    res.render('employees/new', {title: 'Add Employee', errorMsg:''});
}

async function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      console.log(req.body);
      await Employee.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the employees index after we implement it
      res.redirect('/employees');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('employees/new', { errorMsg: err.message });
    }
  }