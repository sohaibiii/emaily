const keys = require('../config')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(keys.sendGridKey)

module.exports = class Emaily {
  constructor ({ subject, body, receptients }, html) {
    this.subject = subject
    this.body = body
    this.receptients = receptients
    this.html = html
  }

  async send () {
    const msg = {
      to: this.receptients.map(({ email }) => email),
      from: 'no-reply@example.org',
      subject: this.subject,
      text: 'survay of yes or no',
      html: this.html,

      trackingSettings: {
        clickTracking: {
          enable: true
        }
      }
    }
    await sgMail.send(msg)
  }
}
