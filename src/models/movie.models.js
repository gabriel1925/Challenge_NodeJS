const { Schema, model} = require('mongoose')
const director = require('./director.models')
// create a schema
const movieSchema = new Schema({
    Title:{type:String} ,
    Year:{type:String} ,
    Runtime:{type:String} ,
    Genre:{type:String} ,
    Director:{type: Schema.Types.ObjectId, ref: 'Director'} ,
    Actors:[{type:Schema.Types.ObjectId, ref: 'Actor'}],
    Plot:{type:String} ,
    Awards:{type:String} ,
    Poster:{type:String},
    type:{type:String}
})
// movieSchema.methods.getActors = async ()=>{
//     let actors = await this.model('Movie').find({_id:this._id}).populate('Actors')
//     return actors
// }
module.exports = model('Movie',movieSchema)