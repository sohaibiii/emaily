const passport = require('passport')

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.send('Welcome dude here')
    }
  )
  app.get('/myuserlogout', (req, res) => {
    req.logout()
    res.send('Current user logOut')
  })
  app.get('/myuser', (req, res) => {
    res.send(req.user)
  })
}
