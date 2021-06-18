const mongoose = require('mongoose');

const userScehma = new mongoose.Schema ({
    name:{
        type : String,
        required: true
    },
    email:{
        type : String,
        required: true
    },
    description:{
        type : String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User',userScehma);

module.exports = User;