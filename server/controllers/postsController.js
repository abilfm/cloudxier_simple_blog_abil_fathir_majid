const { Post } = require("../models/index.js")

class PostController {
  static async findAllPosts (req, res, next) {
    try {
      const posts = await Post.findAll({
        attributes: {
          exclude: [ "createdAt", "updatedAt" ],
        }
      })
      res.status(200).json(posts)
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" })
    }
  }

  static async findPostById (req, res, next) {
    try {
      const { id } = req.params

      const post = await Post.findOne({
        attributes: {
          exclude: [ "createdAt", "updatedAt" ]
        },
        where: { id }
      })
      
      if (post) {
        res.status(200).json(post)
      } else {
        throw { name: "POST_NOT_FOUND" }
      }
    } catch (error) {
      if (error.name = "POST_NOT_FOUND") {
        res.status(404).json({ message: "Post is not found" })
      } else {
        res.status(500).json({ message: "Internal Server Error" })
      }
    }
  }

  static async createPost (req, res, next) {
    try {
      const { title, content, image_url, author_name } = req.body

      const newPost = await Post.create({
        title,
        content,
        image_url,
        author_name
      })

      res.status(200).json(newPost)
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        const message = error.errors.map((error) => error.message)
        res.status(400).json({ message })
      } else {
        res.status(500).json({ message: "Internal Server Error" })
      }
    }
  }

  static async updatePost (req, res, next) {
    try {
      const { title, content, image_url, author_name } = req.body
      const { id } = req.params
      const updatedPost = await Post.update({
        title,
        content,
        image_url,
        author_name
      },{
        where: { id },
        returning: true
      })

      res.status(200).json(updatedPost[1][0])
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        const message = error.errors.map((error) => error.message)
        res.status(400).json({ message })
      } else {
        res.status(500).json({ message: "Internal Server Error" })
      }
    }
  }

  static async deletePost (req, res, next) {
    try {
      const { id } = req.params
      const selectedPost = await Post.findByPk(id)
      if (selectedPost) {
        await Post.destroy({ where: { id } })
        res.status(200).json({ message: "Post has been successfully deleted" })
      } else {
        throw { name: "POST_NOT_FOUND" }
      }
    } catch (error) {
      if (error.name === "POST_NOT_FOUND") {
        res.status(404).json({ message: "Post is not found" })
      } else {
        res.status(500).json({ message: "Internal Server Error" })
      }
    }
  }
}

module.exports = PostController