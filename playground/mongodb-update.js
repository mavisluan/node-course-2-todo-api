const { MongoClient, ObjectID } = require('mongodb')
// connection URL
const url = 'mongodb://localhost:27017'
// Database Name
const dbName = 'TodoApp'
// Use connect methods to connect to the Server
MongoClient.connect(`${url}/${dbName}`, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log(`Unable to connect to MongoDB server`)
    }

    console.log(`Connect to MongoDB server`)
    const db = client.db(dbName)

    // update "Eat lunch" to be completed
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5c0a02c5502565b8bcd06dad")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result) 
    // })

    // Update one user's name to be 'Chris' 
    // Increment one user's age by 1
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c09ac38ca3ba50e9c8e3ac3")
    }, {
        $set: {
            name: 'Chris'
        },
        $inc: {
            age: + 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
    // client.close()   
})
