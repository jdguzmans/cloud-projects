const isDev = process.env.DEV

module.exports = {
  PRISMA_URL: isDev ? process.env.PRISMA_URL_DEV : process.env.PRISMA_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  BACKEND_PORT: process.env.BACKEND_PORT
}
