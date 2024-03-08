const Entitlement = require('../models/entitlement');
const  Employee = require('../models/employee');

module.exports = {
  new: newEntitlement,
  create,
  addToEntitlement
};

async function addToEntitlement(req, res) {
  const employee = await Employee.findById(req.params.id);
  // const entitlement = await Entitlement.findById(req.body.entitlementId);
  // The cast array holds the performer's ObjectId (referencing)
  employee.selectEnts.push(req.body.entitlementId);
  employee.user = req.user;
  await employee.save();
  res.redirect(`/employees/${employee._id}`);
}

async function newEntitlement(req, res) {
  //Sort entitlements by their name
  const entitlements = await Entitlement.find({}).sort('name');
  res.render('entitlements/new', { title: 'Add Entitlement', entitlements });
}

async function create(req, res) {
  req.body.born += 'T00:00';
  try {
    await Entitlement.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/entitlements/new');
}