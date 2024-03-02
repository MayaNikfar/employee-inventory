const Empolyee = require('../models/employee');

module.exports = {
    index
};
async function index(req, res){
    const employees = await Empolyee.find({});
    res.render('employees/index', {fullName: 'All Employees', employeeId:'', employees });
}