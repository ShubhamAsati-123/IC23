// collection to save infinity registerers

const mongoose = require('mongoose');

const infinity = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required: true
    },
    codechefID:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    organisation:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('infinity', infinity,"Infinity");