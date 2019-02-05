const mongoose = require('mongoose')

const receptientSchema = new mongoose.Schema({
  email: String,
  responded: {
    type: Boolean,
    default: false
  }
})

module.exports = receptientSchema
