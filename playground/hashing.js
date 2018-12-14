const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')

// let data = {
//     id: 10
// }

// let token = jwt.sign(data, '123abc')
// console.log(token)

// let decoded = jwt.verify(token, '123abc')
// console.log('decoded', decoded)


const message = 'I am user number 3'
const hash = SHA256(message).toString()

console.log(`message: ${message}`)
console.log(`hash: ${hash}`)

let data = {
    id: 4
}

let token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

data.id = 5

var resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString()

if (resultHash === token.hash) {
    console.log(`Data was not changed`)
} else {
    console.log(`Data was changed. Do not trust!`)
}