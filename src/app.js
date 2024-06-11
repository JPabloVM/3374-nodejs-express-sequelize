const express = require('express');
const routes = require('./routes/index.routes.js');

const app = express();

routes(app);

module.exports = app;
