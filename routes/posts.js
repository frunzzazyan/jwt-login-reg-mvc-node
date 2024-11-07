const express = require("express")
const router = express.Router()

const {checkAuth} = require("../middleware/checkAuth.js")

const PostsController = require("../controllers/PostsController.js")
const controllers = new PostsController()

router.get("/", controllers.getPosts)
router.get("/:id", controllers.getPostId)
router.post("/",checkAuth ,controllers.createPost)
router.delete("/:id", checkAuth, controllers.deletePost)

module.exports = router