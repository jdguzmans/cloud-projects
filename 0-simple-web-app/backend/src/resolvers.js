const security = require('./functions/security')

const UNAUTHORIZED = 'No está autorizado'
const WRONG_CREDENTIALS = 'Credenciales erróneas'
const ALREDY_EXISTS_USER_EMAIL = 'Ya existe un usuario con ese email'
const DOES_NOT_EXIST_CATEGORY = 'La categoría no existe'

const resolvers = {
  Query: {
    events: (_, args, context, info) => {
      const { user } = context
      if (!user) throw new Error(UNAUTHORIZED)
      return context.prisma.query.events({
        where: {
          user: {
            id: user.id
          }
        }
      }, info)
    },
    eventCategories: (_, args, context, info) => {
      const { user } = context
      if (!user) throw new Error(UNAUTHORIZED)
      return context.prisma.query.eventCategories({})
    },
    isLoggedIn: (_args, context, info) => {
      const { user } = context
      let ans = false
      if (user) ans = true
      return ans
    }
  },
  Mutation: {
    createEvent: async (_, args, context, info) => {
      const { user } = context
      const { categoryId, place, address, startDate, finishDate, isVirtual } = args
      const eventCategory = await context.prisma.query.eventCategory({
        where: {id: categoryId}
      })
      if (!eventCategory) throw new Error(DOES_NOT_EXIST_CATEGORY)
      else {
        return context.prisma.mutation.createEvent({
          data: {
            category: {
              connect: {
                id: categoryId
              }
            },
            user: {
              connect: {
                id: user.id
              }
            },
            place: place,
            address: address,
            startDate: startDate,
            finishDate: finishDate,
            isVirtual: isVirtual
          }
        })
      }
    },
    editEvent: async (_, args, context, info) => {
      const { user } = context
      const { id, categoryId, place, address, startDate, finishDate, isVirtual } = args
      const eventCategory = await context.prisma.query.eventCategory({
        where: {id: categoryId}
      })
      if (!eventCategory) throw new Error(DOES_NOT_EXIST_CATEGORY)
      else {
        const events = await context.prisma.query.events({
          where: {
            id: id,
            user: {
              id: user.id
            }
          }
        })
        if (events.length === 0) throw new Error(UNAUTHORIZED)
        else {
          return context.prisma.mutation.updateEvent({
            where: {
              id: id
            },
            data: {
              category: {
                connect: {
                  id: categoryId
                }
              },
              place: place,
              address: address,
              startDate: startDate,
              finishDate: finishDate,
              isVirtual: isVirtual
            }
          })
        }
      }
    },
    deleteEvent: async (_, args, context, info) => {
      const { user } = context
      if (!user) throw new Error(UNAUTHORIZED)
      else {
        const { id } = args
        const events = await context.prisma.query.events({
          where: {
            id: id,
            user: {
              id: user.id
            }
          }
        })
        if (events.length === 0) throw new Error(UNAUTHORIZED)
        else {
          return context.prisma.mutation.deleteEvent({
            where: {
              id: id
            }
          })
        }
      }
    },
    signup: async (_, args, context, info) => {
      const { email, password } = args
      let toReturn
      const { hash, salt } = security.generateCredentials(password)
      let alreadyExistsSameEmail = await context.prisma.query.user({
        where: {email: email}
      })
      if (alreadyExistsSameEmail) throw new Error(ALREDY_EXISTS_USER_EMAIL)
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
      const user = await context.prisma.query.user({
        where: {
          email: email
        }
      })
      if (!user) throw new Error(WRONG_CREDENTIALS)
      else {
        const { hash, salt } = user
        if (!security.verifyPassword(hash, salt, password)) throw new Error(WRONG_CREDENTIALS)
        else {
          const token = await security.generateToken(user.id, email)
          return token
        }
      }
    }
  }
}

module.exports = resolvers
