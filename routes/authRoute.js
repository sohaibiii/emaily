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
  app.get('/logout', (req, res) => {
    req.logout()
    res.send('Current user logOut')
  })

  app.get('/myuser', (req, res) => {
    console.log(req.user)
    res.send(req.user)
  })
}
