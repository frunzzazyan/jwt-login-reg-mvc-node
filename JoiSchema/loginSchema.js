const joi = require("joi")

const loginSchema = joi.object({
    email : joi.string().email().required(),
    password : joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
})

module.exports = loginSchema