const express = require('express');
const userRoutes = require('./contact.route');
const authRoutes = require('./auth.route');

const router = express.Router();

// mount user routes at /contacts
router.use('/contacts', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

module.exports = router;
