require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const security = require('./functions/security')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: async req => {
    let user
    const authorization = req.request.headers.authorization
    if (authorization) {
      const verifiedToken = await security.verifyToken(authorization.replace('Bearer ', ''))
      if (verifiedToken) user = verifiedToken.data
    }

    return {
      user,
      ...req,
      prisma: new Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        endpoint: process.env.PRISMA_URL
      })
    }
  }
})

server.start({port: process.env.BACKEND_PORT}, ({port}) =>
  console.log('GraphQL server is running on port ' + port)
)
