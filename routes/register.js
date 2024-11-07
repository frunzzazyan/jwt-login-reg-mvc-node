const express = require("express")
const router = express.Router()

const {checkAuth} = require("../middleware/checkAuth.js")

const AuthoriztaionControllers = require("../controllers/AuthoriztaionControllers.js")
const controllers = new AuthoriztaionControllers()

router.post("/register", controllers.createUser)
router.post("/login", controllers.loginUser)
router.get("/me", checkAuth, controllers.authMe)

module.exports = router