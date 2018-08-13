const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    events: (_, args, context, info) => {
      return context.prisma.query.events({})
    }
  },
  Mutation: {
    createEvent: (_, args, context, info) => {
      // ...
    },
    deleteEvent: (_, args, context, info) => {
      // ...
    },
    signup: (_, args, context, info) => {
      return context.prisma.mutation.createUser({
        data: {
          name: args.name
        }
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466'
    })
  })
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))
