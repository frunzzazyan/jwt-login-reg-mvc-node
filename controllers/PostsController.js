const postsSchema = require("../JoiSchema/postsSchema.js")

const Errors = require("../Errors/Errors.js")

class PostsController{
    constructor(models){
        this.models = models
    }
    async createPost(req,res){
        try {
            const id  = req.app.locals.tokenId
            const body = await postsSchema.validateAsync(req.body)
            const post = await req.app.locals.services.posts.createPost(body, id)
            res.json(post)
        } catch (error) {
            return Errors.createPostError(res)
        }
    }

    async getPosts(req,res){
        try {
            const {tags} = req.query
            console.log(tags)
            if(tags){
                const posts = await req.app.locals.services.posts.getPosts(tags)
                res.json(posts)
            }else{
                const posts = await req.app.locals.services.posts.getPosts()
                res.json(posts)
            }
        } catch (error) {
            return Errors.getPostsError(res)
        }
    }

    async getPostId(req,res){
        try {
            const post = await req.app.locals.services.posts.getPostId(req.params.id)
            res.json(post)
        } catch (error) {
            return Errors.getPostIdError(res)
        }
    }

    async deletePost(req,res){
        try {
            const id = req.params.id
            const delId = await req.app.locals.services.posts.deletePost(id)
            res.json(delId)
        } catch (error) {
            return Errors.deletePostError(res)
        }
    }
}

module.exports = PostsController