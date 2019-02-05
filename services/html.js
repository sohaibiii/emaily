const keys = require('../config')

module.exports = survay => {
  return `<html>
    <header>${survay.title}</header>
    <body>
    <p>${survay.body}</p>
    <a href=${keys.domain}/greetings/${survay.id}/yes>YES</a>
    <a href=${keys.domain}/greetings/${survay.id}/no>NO</a>
     
    </body>
    
    
    
    </html>`
}
