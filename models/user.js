const mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
  googleID: String
})

var User = mongoose.model('User', userSchema)

module.exports = { User }
