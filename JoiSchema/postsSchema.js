const joi = require("joi")

const postsSchema = joi.object({
    title : joi.string().required(),
    text : joi.string().required(),
    tags : joi.string()
})

module.exports = postsSchema