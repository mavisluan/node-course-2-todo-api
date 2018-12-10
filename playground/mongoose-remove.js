const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')
const { ObjectID } = require('mongodb')


// Todo.remove({}).then((result) => console.log(result))

Todo.findByIdAndRemove('5c0e9b470498e30b270add1f').then((todo) => console.log(todo))