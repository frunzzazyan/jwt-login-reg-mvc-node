const express = require('express')
const app = express()
const port = 3000

const registerRouter = require("./routes/register.js")
const postsRouter = require("./routes/posts.js")
const AuthoriztaionServices = require('./services/AuthoriztaionServices.js')

const models = require("./models")

const mongoose = require("mongoose")
const PostsServices = require('./services/PostsServices.js')

mongoose.connect("mongodb://localhost:27017/person")
.then(()=>console.log("db ok"))
.catch(()=>console.log("db err"))

app.use(express.json())

app.locals.models = {
    users : models.users,
    posts : models.posts
}

app.locals.services = {
    authoriztaion : new AuthoriztaionServices(app.locals.models),
    posts : new PostsServices(app.locals.models)
}

app.use("/auth", registerRouter)
app.use("/posts", postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})