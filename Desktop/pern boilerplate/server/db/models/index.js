//this is the access point for all things database related!

const db = require('./db')

const User = require('./users')

//associations could go here!

module.exports = {
  db,
  User
}