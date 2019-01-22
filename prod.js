// {"web":{"client_id":"659970430628-gsgv417b6m8cmrd475hfj2h27c66rk5v.apps.googleusercontent.com"
// ,"project_id":"emailyprod-229318",
// "auth_uri":"https://accounts.google.com/o/oauth2/auth"
// ,"token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs"
// ,"client_secret":"c01He3yVKOrhZ57FnluJzBxZ","redirect_uris":["https://warm-ravine-70830.herokuapp.com/auth/google/callback"],"javascript_origins":["https://warm-ravine-70830.herokuapp.com"]}}

module.exports = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  MONGODB_URI: process.env.MONGODB_URI,
  keys: process.env.KEYS
}
