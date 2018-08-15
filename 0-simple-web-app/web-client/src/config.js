const isDev = process.env.NODE_ENV

module.exports = {
  TOKEN_KEY: 't',
  BACKEND_URL: isDev ? 'http://localhost:4000' : ''
}
