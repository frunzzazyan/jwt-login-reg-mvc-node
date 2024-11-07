const statusCode = {
    createUserError : 415,
    loginUserError : 404,
    loginUserEmailPassError : 401,
    createPostError : 400,
    getPostsError : 404,
    serverError : 500
}

class Errors{
    // authorization
    static createUserError(res, message = "the authorization code has expired"){
        res.status(statusCode.createUserError).json(message)
    }
    static loginUserError(res, message = "invalid data"){
        res.status(statusCode.loginUserError).json(message)
    }
    static loginUserEmailPassError(res, message = "invalid email or password"){
        res.status(statusCode.loginUserEmailPassError).json(message)
    }
    static authMeError(res, message = "You are not Authorizationed"){
        res.status(statusCode.loginUserError).json(message)
    }
    
    // posts
    static createPostError(res, message = "Bad Request"){
        res.status(statusCode.createPostError).json(message)
    }
    static getPostsError(res, message = "posts empty"){
        res.status(statusCode.getPostsError).json(message)
    }
    static getPostIdError(res, message = "post not found"){
        res.status(statusCode.getPostsError).json(message)
    }
    static deletePostError(res, message = "server error"){
        res.status(statusCode.serverError).json(message)
    }
}

module.exports = Errors