const registerSchema = require("../JoiSchema/RegistrationSchema.js")
const loginSchema = require("../JoiSchema/loginSchema.js")

const Errors = require("../Errors/Errors.js")

class AuthoriztaionControllers{
    async createUser(req,res){
        try {
            const body = await registerSchema.validateAsync(req.body)
            const user = await req.app.locals.services.authoriztaion.createUser(body)
            res.json(user)
        } catch (error) {
            return Errors.createUserError(res)
        }
    }
    
    async loginUser(req,res){
        try {
            const body = await loginSchema.validateAsync(req.body)
            const user = await req.app.locals.services.authoriztaion.loginUser(body)
            res.json(user)
        } catch (error) {
            return Errors.loginUserError(res)
        }
    }
    
    async authMe(req,res){
        try {
            const user = await req.app.locals.services.authoriztaion.authMe(req.app.locals.tokenId)
            res.json(user)
        } catch (error) {
            return Errors.authMeError(res)
        }
    }
}

module.exports = AuthoriztaionControllers