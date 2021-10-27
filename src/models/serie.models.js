const { Schema, model} = require('mongoose')
const director = require('./director.models')
// create a schema
const serieSchema = new Schema({
    Title:{type:String} ,
    Year:{type:String} ,
    Runtime:{type:String} ,
    Genre:{type:String} ,
    Director:{type:Schema.Types.ObjectId, ref:'director'} ,
    Actors:{type:Schema.Types.Mixed} ,
    Plot:{type:String} ,
    Awards:{type:String} ,
    Poster:{type:String} ,
    totalSeasons:{type:String} ,
    Season:{type:String} ,
    episode:{type:String}
})
module.exports = model('Serie',serieSchema)