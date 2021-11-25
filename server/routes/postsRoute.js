const express = require("express")
const postController = require("../controllers/postsController.js")
const postsRouter = express.Router()

postsRouter.get('/', postController.findAllPosts)

postsRouter.get('/:id', postController.findAllPostById)

postsRouter.post('/', postController.createPost)

postsRouter.put('/:id', postController.updatePost)

postsRouter.delete('/:id', postController.deletePost)

module.exports = postsRouter
