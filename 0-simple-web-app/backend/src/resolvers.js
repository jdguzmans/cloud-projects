const security = require('./functions/security')

const resolvers = {
  Query: {
    events: (_, args, context, info) => {
      console.log(context.prisma)
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
    signup: async (_, args, context, info) => {
      const { email, password } = args
      let toReturn
      const { hash, salt } = security.generateCredentials(password)
      let alreadyExistsSameEmail = await context.prisma.query.user({
        where: {email: email}
      })
      if (alreadyExistsSameEmail) throw new Error('Ya existe un usuario con ese email')
      else {
        await context.prisma.mutation.createUser({
          data: {
            email: email,
            hash: hash,
            salt: salt
          }
        })
        toReturn = hash
      }
      return toReturn
    },
    signin: async (_, args, context, info) => {
      const { email, password } = args
      const userff = await context.prisma.query.user({
        where: {
          email: email
        }
      })
      if (!userff) throw new Error('Credenciales erróneas')
      else {
        const { hash, salt } = userff
        if (!security.verifyPassword(hash, salt, password)) throw new Error('Credenciales erróneas')
        else {
          const token = await security.generateToken(userff.id, email)
          return token
        }
      }
    }
  }
}

module.exports = resolvers
