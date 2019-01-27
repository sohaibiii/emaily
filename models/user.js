const mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
  googleID: String,
  credits: {
    type: Number,
    default: 0,
  }
})

var User = mongoose.model('User', userSchema)

module.exports = { User }
