const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    age : {
        type : Number,
        required : true,
        min : 18,
        max : 100
    },
    password : {
        type : String,
        required : true
    },
    image : String
})

UserModel.pre("save", async function(){
    const hashPass = await bcrypt.hash(this.password, 10)
    this.password = hashPass
})

module.exports = mongoose.model("users", UserModel)