const joi = require("joi")

const registerSchema = joi.object({
    name : joi.string().required(),
    email : joi.string().email().required(),
    age : joi.number().required(),
    password : joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    rpassword : joi.ref('password')
})

module.exports = registerSchema