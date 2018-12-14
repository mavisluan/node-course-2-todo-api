const mongoose = require('mongoose')
const validator = require('validator')
const JWT = require('jsonwebtoken')
const _ = require('lodash')

const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: `{VALUE} is not a valid email`
            }
        },
        password: {
            type: String,
            require: true,
            minlength: 6
        },
        tokens: [{
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }]
})

UserSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    
    return _.pick(userObject, ['_id', 'email'])
}

UserSchema.methods.generateAuthToken = function () {
    const user = this
    const access = 'auth'
    const token = JWT.sign({_id: user._id.toHexString(), access }, 'abc123').toString()
//  push the token into tokens array
    user.tokens = user.tokens.concat([{ access, token }])
//  save the user into db 
//  when you return two chain in a promise, you return another promise. We're returning a value, which will get passed as the success argument for the next then call. (server.js)
    return user.save().then(() => {
        return token
    })
}

const User = mongoose.model('User', UserSchema)

module.exports = { User }

