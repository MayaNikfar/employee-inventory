const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitlementSchema = new Schema({
  name: {
    type: String,
    required: true
  }},{
  timestamps: true
  });

module.exports = mongoose.model('Entitlement', entitlementSchema);