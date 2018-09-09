const express = require('express');
const app = express();
const {
  setupMiddleware,
  afterRoutes
} = require('./prod')
const blogSetup = require('./blog')

setupMiddleware(app)
blogSetup(app)
afterRoutes(app)

app.listen(3000, () => {
  console.log('Site up')
})
