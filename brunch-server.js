const express = require('express');
const app = express();
const blogSetup = require('./server/blog')
const {
  afterRoutes
} = require('./server/prod')
const Path = require('path')

module.exports = (port, path, callback) => {
  app.use(express.static(Path.join(__dirname, path)));
  blogSetup(app)
  afterRoutes(app)
  app.listen(port, callback)
}
