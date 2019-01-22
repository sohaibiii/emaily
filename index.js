const app = require('express')()
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

// arrangement of require can also cause critical errors

mongoose.connect(
  client.MONGODB_URI,
  { useNewUrlParser: true }
)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`server has been established at ${port}`)
})
