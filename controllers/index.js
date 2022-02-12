const router = require('express').Router();
const apiRoutes = require('./api');

// PUT, DELETE, POST requests go into API routes
router.use('/api', apiRoutes);

// HTML-Routes File will be all of our GET requests

module.exports = router;
