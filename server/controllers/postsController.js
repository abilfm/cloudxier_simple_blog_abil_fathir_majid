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
      
    } catch (error) {
      
    }
  }

  static async updatePost (req, res, next) {
    try {
      
    } catch (error) {
      
    }
  }

  static async deletePost (req, res, next) {
    try {
      
    } catch (error) {
      
    }
  }
}

module.exports = PostController