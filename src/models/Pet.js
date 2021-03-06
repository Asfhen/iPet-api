const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    },
    born: {
        type: String,
        required: false
    },
    breed: {
        type: String,
        required: false
    },
    castrationDate: {
        type: String,
        required: false
    },
    owner: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    },    
    createdAt: {
        type: Date,
        default: Date.now
    }
})


mongoose.model('Pet', PetSchema)