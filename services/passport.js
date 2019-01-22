const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const { clientID, clientSecret } = require('../config')
const mongoose = require('mongoose')
const { User } = require('../models/user')

passport.serializeUser((user, done) => {
  return done(null, user.id) //  it will store the id in cookie session and then put this in browser
})

passport.deserializeUser((id, done) => {
  // it will get the id from cookie session in browser and find the user and put the user in req.user
  User.findById(id).then(user => {
    console.log(user)
    return done(null, user)
  })
})

passport.use(
  new googleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true // bcz heroku uses proxy and converts https to http
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken)
      console.log(profile)
      User.findOne({ googleID: profile.id })
        .then(preuser => {
          if (preuser) {
            done(null, preuser)
            console.log('user is already exist')
          } else {
            new User({ googleID: profile.id })
              .save()
              .then(user => done(null, user))
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  )
)
