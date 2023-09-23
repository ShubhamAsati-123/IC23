const mongoose = require('mongoose');
require('dotenv').config('../.env');
(async()=>{
    mongoose.connect(process.env.MONGO_URL)
})()
.then((res)=>{
    console.log("connection established");
});
const infinity = require('../models/Infinity');

async function registerInfinity(data){
    let newUser = new infinity(data);
    let exists = await infinity.find({email: data.email});
    if(exists){
        return "failed to register";
    }
    else{

        await newUser.save();
    }

    return "succcessfully registered";
}


module.exports = {registerInfinity};