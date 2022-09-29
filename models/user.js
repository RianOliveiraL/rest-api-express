const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: false,
        default: null
    },
    lastName: {
        type: String,
        require: false,
        default: null
    },
    age: {
        type: Number,
        require: false,
        default:null
    },
    address: {
        type: String,
        require: false,
        default:null
    },
    profilePic: {
        type: String,
        require: false,
        default:null
    },
    email: {
        type: String,
        require: false,
        default:null
    },
    password: {
        type: String,
        require: false,
        default:null
    },
    contactNumber: {
        type: String,
        require: false,
        default:null
    }
})
const User = mongoose.model('user', UserSchema);

module.exports = User;