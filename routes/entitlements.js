const express = require('express');
const router = express.Router();
const entitlementsCtrl = require('../controllers/entitlements');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// This router is mounted to a "starts with" path of '/'

// GET /entitlements/new (new functionality)
router.get('/entitlements/new', ensureLoggedIn, entitlementsCtrl.new);
// POST /entitlements (create functionality)
router.post('/entitlements', ensureLoggedIn, entitlementsCtrl.create);
// POST /employees/:id/entitlements (associate a performer with a movie)
router.post('/employees/:id/entitlements', ensureLoggedIn, entitlementsCtrl.addToEntitlement);

module.exports = router;