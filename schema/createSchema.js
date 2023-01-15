const mongoose = require("mongoose");


const createSchema = mongoose.Schema({
    taskname:{type:String,required:true},
    status:{type:String,required:true},
    tag:{type:String,required:true},
    userId:{type:String,required:true}
},{
    versionKey:false
})

const CreateModel = mongoose.model("creation",createSchema);

module.exports={
    CreateModel
}