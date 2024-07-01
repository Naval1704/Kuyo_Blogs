const mongoose=require("mongoose");

const {Schema}=mongoose;

const blogSchema =new Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("blog",blogSchema);