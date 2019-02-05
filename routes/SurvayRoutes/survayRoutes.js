const mongoose = require('mongoose')

const _ = require('lodash')
const Path = require('path-parser').default
const URL = require('url')

const Survay = require('../../models/Survay')
const myhtml = require('../../services/html')
const Emaily = require('../../services/Email')
const isUserLogin = require('../middleware/userHas')
const userHasCredits = require('../middleware/userHasCredits')

module.exports = app => {
  app.get('/greetings/:id/:choice', (req, res) => {
    res.send('Thanks for Responcing')
  })

  const path = new Path('/greetings/:id/:choice')

  app.post('/sendgrid/response', (req, res) => {
    const requiredData = _.chain(req.body)
      .map(({ email, url }) => {
        var q = URL.parse(url, true)
        const data = path.test(q.pathname)
        if (data) {
          return { email, id: data.id, choice: data.choice }
        }
      })
      .compact()
      .unionBy('email', 'id')
      .value()

    requiredData.map(({ email, id, choice }) => {
      Survay.updateOne(
        {
          _id: id,
          receptients: {
            $elemMatch: { email, responded: false }
          }
        },
        {
          $inc: {
            [choice]: 1
          },
          $set: {
            'receptients.$.responded': true,
            respondedAt: new Date().getDate()
          }
        },
        {
          new: true
        }
      ).exec()
    })
  })

  app.get('/api/allsurvays', isUserLogin, (req, res) => {
    Survay.find({
      _user: req.user
    })
      .select({ receptients: false })
      .then(value => {
        res.send(value)
      })
  })

  app.post(
    '/api/survays/new',
    isUserLogin,
    userHasCredits,
    async (req, res) => {
      const survay = new Survay({
        title: req.body.title,
        subject: req.body.subject,
        body: req.body.body,
        receptients: req.body.receptients.split(',').map(email => ({ email })),
        _user: req.user
      })

      const email = new Emaily(survay, myhtml(survay))
      await email.send()
      req.user.credits -= 1
      const user = await req.user.save()
      res.send(user)

      const qr = await survay.save()
    }
  )
}
