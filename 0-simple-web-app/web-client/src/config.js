const isDev = process.env.NODE_ENV

module.exports = {
  BACKEND_URL: isDev ? 'http://localhost:4000' : ''
}
