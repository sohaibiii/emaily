module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(500).send('must login before credits ')
  }
  next()
}
