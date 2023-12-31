const { file } = require("googleapis/build/src/apis/file");
var mongoose=  require("mongoose");




var postSchema = mongoose.Schema({

  media: {
    type: String,
    require: true
},
caption:{
    type: String
},
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true
},
mediaType : {
    type: String,
    enum: ['image', 'video','video/mp4','image/jpeg','image/png','image/jpg'],
    require: true
},
likes:[
    {
        type: mongoose.Schema.Types.ObjectId,
     ref: 'user',
    }
],
comments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
    }
]
  
},{
  timestamps: true
})


module.exports = mongoose.model("post",postSchema);