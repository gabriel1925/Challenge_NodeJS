const {Schema, model} = require('mongoose')

const actorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
})

module.exports = model('Actor', actorSchema)