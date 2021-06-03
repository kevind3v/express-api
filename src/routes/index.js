const express = require('express');
const router = express();

const errorRoute = require("./errorRoute");
const sloganRoute = require('./sloganRoute');

// Routes
sloganRoute(router);

// ERROR
errorRoute(router);

module.exports = router;