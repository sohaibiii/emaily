module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    res.status(403).send("User u don't have enough credits")
  }
  next()
}
