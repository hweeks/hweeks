const express = require('express')
const helmet = require('helmet')
const path = require('path')
const setupMiddleware = (app) => {
  app.use(helmet())
  app.use(express.static(__dirname +'./../static/'))
}

const afterRoutes = (app) => {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname +'./../static/index.html'));
  });
}

module.exports = {
  setupMiddleware,
  afterRoutes
}
