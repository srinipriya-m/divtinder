const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type : String
    },
    lastName : {
        type : String
    },
    emailId : {
        type : String
    },
    password : {
        type : String
    },
    age : {
        type : Number,
    },
    gender : {
        type : String
    },
    photoUrl : {
        type : String,
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ayRaB8ZE9QQJvXOYM84VxydvTxuC7RsJ5KB6HvUTypQCeDjIn5ibivo&s",
    }
},
{
    timestamps : true,
}
)

const userModel = mongoose.model("User",userSchema);

module.exports = userModel;