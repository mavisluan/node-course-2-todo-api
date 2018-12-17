// const { SHA256 } = require('crypto-js')
// const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const password = '123abc!'

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash)
//     })
// })
const hashedPassword1 = '$2a$10$nkt8gTseR5ldS9FGsZFgf.91rL8DMQN8sDkYUWYBQ0ZGyF3B74ISi'
const hashedPassword2 = '$2a$10$j8VEeJDPhIlnGqfXpORw0O13SyyQeCaihJQFGOtl/e6lR99M.JL/S'

bcrypt.compare(password, hashedPassword1, (err, res) => {
    console.log(res)
})

bcrypt.compare(password, hashedPassword2, (err, res) => {
    console.log(res)
})

// let data = {
//     id: 10
// }

// let token = jwt.sign(data, '123abc')
// console.log(token)

// let decoded = jwt.verify(token, '123abc')
// console.log('decoded', decoded)


// const message = 'I am user number 3'
// const hash = SHA256(message).toString()

// console.log(`message: ${message}`)
// console.log(`hash: ${hash}`)

// let data = {
//     id: 4
// }

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// data.id = 5

// var resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString()

// if (resultHash === token.hash) {
//     console.log(`Data was not changed`)
// } else {
//     console.log(`Data was changed. Do not trust!`)
// }