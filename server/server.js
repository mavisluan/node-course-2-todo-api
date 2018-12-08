// load library imports
const express = require('express')
const bodyParser = require('body-parser')
// load local imports
const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()

// use express middleware
app.use(bodyParser.json())
// create Post route to create new todos
app.post('/todos', (req, res) => {
    console.log(req.body)
    const todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})

app.listen(3000, () => {
    console.log(`Started on port 3000`)
})

module.exports = {app}