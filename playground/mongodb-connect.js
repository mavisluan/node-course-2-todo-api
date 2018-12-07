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

    db.collection('Users').insertOne({
        name: 'Yi',
        age: 35,
        location: 'Mountain View'
    }, (err, result) => {
        if(err) {
            return console.log(`Unable to insert the user`)
        }
        // console.log(JSON.stringify(result.ops, undefined, 2))
        // // Print the first ObjectId
        // console.log(result.ops[0]._id)
        // // Get Timestamp()
        // console.log(result.ops[0]._id.getTimestamp())
    })

// insert new document and data
    // db.collection('Todos').insertOne({ 
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log(`Unable to insert todo`, err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })
// close the server
    client.close()
})
