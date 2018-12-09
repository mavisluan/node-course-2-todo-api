const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')
const { ObjectID } = require('mongodb')

const id = '5c0aed8e5753681e8e7972f2'

User.findById(id).then((user) => { 
    if (!user) {
        return console.log(`Id not found`)
    }
    console.log(user)
}).catch((e) => console.log('error', e))

// const id = '5c0d6fa2c9b9d33c075bd62011'

// if (!ObjectID.isValid(id)){
//     console.log(`ID not valid`)
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos,', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// })


// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log(`Id not found`)
//     }

//     console.log('Todo By Id', todo)
// }).catch((e) => console.log('error', e))