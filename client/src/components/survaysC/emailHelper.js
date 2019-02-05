const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default receptients => {
  if (receptients) {
    const wrongEmails = receptients
      .split(',')
      .map(email => {
        return email.trim()
      })
      .filter(email => {
        return !re.test(email)
      })

    if (wrongEmails.length) {
      return `These emails are wrong ${wrongEmails}`
    }
  } else {
    return ''
  }
}
