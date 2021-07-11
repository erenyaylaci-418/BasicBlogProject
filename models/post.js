const _ = require("lodash");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin-eren:0HcbuseBhvrmRbvf@clustertodo.basdi.mongodb.net/BlogDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true ,useUnifiedTopology: true})

const postSchema = {
    Title: String,
    Text: String
};

const Post = mongoose.model("Post", postSchema);

exports.create = function(Title,Text) {
    const result = new Post({
        Title: Title,
        Text: Text
    }); 
    result.save();   
}
exports.getall = function(homeStartingContent,res){
    Post.find({},function(err,result){
        if (err) {
            console.log(err);
        } else {
            res.render("home",{homeStartingContent:homeStartingContent,posts:result});
        }
    });
}

exports.search = function(Id,res){
    Post.findById(Id,function(err,result){
        if (err) {
            console.log(err);
        } else {
            res.render("post",{post:result});
        }
    });
}