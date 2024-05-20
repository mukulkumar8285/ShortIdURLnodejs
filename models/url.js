const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
   shortid :{
    type : String,
    required : true,
    unique:true,
   },
   redirectUrl:{
    type : String,
    required : true,
   },
   visitHistory:[{
    timeShamp:{type:Number}
   }]
},
{timeShamp:true})


const URL = mongoose.model("url", UrlSchema);
module.exports = URL;