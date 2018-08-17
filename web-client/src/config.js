const isDev = process.env.NODE_ENV

module.exports = {
  TOKEN_KEY: 't',
  BACKEND_URL: isDev ? 'http://81ed9c94.ngrok.io' : 'http://172.24.42.42:4000'
}
