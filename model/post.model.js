const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    titile :{
        type:String,
        require : true,
    },
    description :{
        type:String,
        require : true,
    },
    createdAt: { type: Date, default: Date.now },
})


module.exports = mongoose.model("post",postSchema)