const Employee = require('../models/employee');

module.exports = {
  create,
  delete: deleteSelectEnt
};

async function deleteSelectEnt(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const employee = await Employee.findOne({ 'selectEnts._id': req.params.id, 'selectEnts.user': req.user._id });
  // Rogue user!
  if (!employee) return res.redirect('/employee');
  // Remove the review using the remove method available on Mongoose arrays
  employee.selectEnts.remove(req.params.id);
  // Save the updated employee doc
  await employee.save();
  // Redirect back to the employee's show view
  res.redirect(`/employees/${employee._id}`);
}

async function create(req, res) {
  const employee = await Employee.findById(req.params.id);

  // Add the user-centric info to req.body (the new entitlement)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  employee.selectEnts.push(req.body);
  try {
    // Save any changes made to the movie doc
    await employee.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/employees/${employee._id}`);
}