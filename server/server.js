const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
})

// let newTodo = new Todo({
//     text: 'Cook dinner'
// })

// newTodo.save().then(doc => {
//     console.log(`Saved todo`, doc)
// }, (e) => {
//     console.log(`Unable to save todo`)
// })

let otherTodo = new Todo({
    text: 'Clean the floor',
    completed: true,
    completedAt: 375223
})

otherTodo.save().then(doc => {
    console.log(`Saved todo`, doc)
}, (e) => {
    console.log(`Unable to save todo`)
})