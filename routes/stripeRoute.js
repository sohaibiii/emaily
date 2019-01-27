const Keys = require('../config')
const userMiddle = require('./middleware/userHas')
const stripe = require('stripe')(Keys.stripeSecretKey)

module.exports = app => {
  app.post('/api/stripe', userMiddle, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Emaily charge',
      source: req.body.id
    })
    req.user.credits += 5
    const user = await req.user.save()
    console.log(charge)
    res.send(user)
  })
}
