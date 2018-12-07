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

    // deletemany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result)
    // })
    // db.collection('Users').deleteMany({ name: 'Yi'})
    // deleteOne
    // db.collection('Todos').deleteOne({ completed: true}).then((result) => {
    //     console.log(result)
    // })
    // findOneAndDelete (remove individual item and also return the value --> return the user which one got deleted)
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("5c09ad9e27908c0ecbad516e")}).then(result => {
        console.log(result)
    })
    // db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c09fa15502565b8bcd068f7')}).then((result) => {
    //     console.log(result)
    // })
    // client.close()   
})
