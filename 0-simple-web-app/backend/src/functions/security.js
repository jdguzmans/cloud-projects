const crypto = require('crypto')
const jwt = require('jsonwebtoken')

module.exports = {
  generateCredentials: (password) => {
    const salt = crypto.randomBytes(Math.ceil(32 / 2))
        .toString('hex')
        .slice(0, 32)
    const hash = crypto.createHmac('sha512', salt)
    hash.update(password)
    return {
      hash: hash.digest('hex'),
      salt: salt
    }
  },
  verifyPassword: (savedHash, savedSalt, receivedPassword) => {
    let receivedHash = crypto.createHmac('sha512', savedSalt)
    receivedHash.update(receivedPassword)
    receivedHash = receivedHash.digest('hex')
    return receivedHash === savedHash
  },
  generateToken: (id, email) => {
    return new Promise((resolve, reject) => {
      jwt.sign({
        data: {
          id: id,
          email: email
        }
      }, process.env.JWT_SECRET, { expiresIn: '12h' }, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  },
  verifyToken: (token) => {
    return new Promise((resolve, reject) => {
      let decoded
      try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
      } catch (err) { }
      resolve(decoded)
    })
  }

}
