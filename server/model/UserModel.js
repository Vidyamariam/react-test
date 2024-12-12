import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    email: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    experience: {
        type: String
    }

})

module.exports = mongoose.model('User', UserSchema);