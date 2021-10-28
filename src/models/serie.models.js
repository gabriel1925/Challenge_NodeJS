const { Schema, model} = require('mongoose')
// create a schema
const serieSchema = new Schema({
    Title:{type:String} ,
    Year:{type:String} ,
    Runtime:{type:String} ,
    Genre:{type:String} ,
    Director:{type:Schema.Types.ObjectId, ref:'Director'} ,
    Actors:[{type:Schema.Types.ObjectId, ref:'Actor'}] ,
    Plot:{type:String} ,
    Awards:{type:String} ,
    Poster:{type:String} ,
    type:{type:String},
    totalSeasons:{type:String} ,
    Season:{type:String} ,
    episode:{type:String}
})
module.exports = model('Serie',serieSchema)