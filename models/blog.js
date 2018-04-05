var mongoose  = require("mongoose");
var Schema = mongoose.Schema;



var blogSchema= new mongoose.Schema({
      title:String,
      image:String,
      body: String,
      created:{type:Date,default:Date.now()}
});

module.exports = mongoose.model("Blog",blogSchema);
