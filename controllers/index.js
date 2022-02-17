const router = require('express').Router();

const apiRoutes = require('./api');
const htmlRoutes = require('./html-routes.js');

// PUT, DELETE, POST requests go into API routes
router.use('/api', apiRoutes);

// HTML-Routes File will be all of our GET requests
router.use('/', htmlRoutes);

module.exports = router;
