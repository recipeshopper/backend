const mongoose = require('mongoose'); Schema = mongoose.Schema;

const Recipe = new Schema ({
    list: [ String ]
});

const UserSchema =  new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    recipeList: [ Recipe ]
});

module.exports = mongoose.model('UserSchema', UserSchema);