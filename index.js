const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const client = require('./config')
const passport = require('passport')

const Session = require('express-session')
const mongoose = require('mongoose')
require('./models/user')
require('./services/passport')
const cookieParser = require('cookie-parser')
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
app.use(cookieParser())

app.use(
  Session({
    secret: client.keys,
    resave: false,
    saveUninitialized: true
  })
)
app.use(passport.initialize())
app.use(passport.session()) // it will handle cookiesession

require('./routes/authRoute')(app)
require('./routes/stripeRoute')(app)

// arrangement of require can also cause critical errors

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build')) // first serve the assets builds file

  // no route matches it serve the index.html in client
  // * means any route that dosent match wih expresses routes
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

mongoose.connect(
  client.MONGODB_URI,
  { useNewUrlParser: true }
)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`server has been established at ${port}`)
})
