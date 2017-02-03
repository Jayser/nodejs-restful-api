const Joi = require('joi');

module.exports = {
  // POST /api/contacts
  createUser: {
    body: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNumber: Joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNumber: Joi.string().required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  }
};
