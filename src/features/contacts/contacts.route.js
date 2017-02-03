const express = require('express');
const validate = require('express-validation');
const paramValidation = require('./contacts.validation');
const contactCtrl = require('./contacts.controller.js');

const router = express.Router();

router.route('/')
  /** GET /api/contacts - Get list of contacts */
  .get(contactCtrl.list)

  /** POST /api/contacts - Create new contact */
  .post(validate(paramValidation.createUser), contactCtrl.create);

router.route('/:contactId')
  /** GET /api/contacts/:contactId - Get contact */
  .get(contactCtrl.get)

  /** PUT /api/contacts/:contactId - Update contact */
  .put(validate(paramValidation.updateUser), contactCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(contactCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('userId', contactCtrl.load);

module.exports = router;
