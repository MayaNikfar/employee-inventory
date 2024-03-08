const Employee = require('../models/employee');
const Entitlement = require('../models/entitlement');
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
  const employee = await Employee.findById(req.params.id).populate('selectEnts');
  const entitlements = await Entitlement.find({ _id: { $nin: employee.selectEnts} }).sort('name');
  res.render('employees/show', {title: 'Employee Detail', employee, entitlements });
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
      req.body.user = req.user._id
      await Employee.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the employees index after we implement it
      res.redirect('/employees');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('employees/new', { title:'Add Employee', errorMsg: err.message });
    }
  }