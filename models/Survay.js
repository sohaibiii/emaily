const mongoose = require('mongoose')
const recepientSchema = require('./Recepient')
const { User } = require('./user')
const { Schema } = mongoose

const survaySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  receptients: [recepientSchema],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  createdAt: {
    type: Date
  },
  respondedAt: {
    type: Date
  }
})

const survay = mongoose.model('Survay', survaySchema)
module.exports = survay
