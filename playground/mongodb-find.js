const { MongoClient, ObjectID } = require('mongodb')
// connection URL
const url = 'mongodb://localhost:27017'
// Database Name
const dbName = 'TodoApp'
// Use connect methods to connect to the Server
MongoClient.connect(`${url}/${dbName}`, (err, client) => {
    if(err) {
        return console.log(`Unable to connect to MongoDB server`)
    }

    console.log(`Connect to MongoDB server`)
    const db = client.db(dbName)
// fetch data based on certain values
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c09b549502565b8bcd06582')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log(`Unable to fetch todos`, err)
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log(`Unable to fetch todos`, err)
    // })

    db.collection('Users').find({ name: 'Yi' }).toArray().then((docs) => {
        console.log('Users')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log(`Unable to fetch users`, error)
    })

    db.collection('Users').find({ name: 'Yi'}).count().then((count) => {
        console.log(`Users count: ${count}`)
    }, (err) => {
        console.log(`Unable to fetch users`)
    })

    client.close()   
})
