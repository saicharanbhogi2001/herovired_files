const mongoose=require('mongoose');
var Register=mongoose.Schema;
const portfolio=new Register({
    Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        require:true
    },
    Religion:{
        type:String,
        required:true
    },
    Hobbies:{
        type:String,
        required:true
    },
    Schooling:{
        type:String,
        required:true
    },
    Intermediate:{
        type:String,
        required:true
    },
    Engineering:{
        type:String,
        required:true
    },
    FatherName:{
        type:String,
        required:true
    },
    MotherName:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('portfolio',portfolio);