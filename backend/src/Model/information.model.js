const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    heading1:{type:String,required:true},
    description1:{type:String,required:true},
    heading2:{type:String,required:true},
    description2:{type:String,required:true},
    image1:{type:String,required:true},
    image2:{type:String,required:true}
},{
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })
const ContentModel = mongoose.model('content',contentSchema);
module.exports = ContentModel;