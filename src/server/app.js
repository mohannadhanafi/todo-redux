const express = require('express');
const { join } = require('path');
const Router = require('./controller');

const app = express()
  .disable('x-powered-by')
  .set('port', 5000)
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static(join(__dirname, '..', 'client', 'build')))
  .use('/api/v2', Router);

module.exports = app;
