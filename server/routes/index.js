const express = require("express")
const postsRouter = require("./postsRoute.js")
const router = express.Router()

router.use("/posts", postsRouter)

module.exports = router