const express = require("express")
const errorHandler = require("../middlewares/errorHandler.js")
const postsRouter = require("./postsRoute.js")
const router = express.Router()

router.use("/posts", postsRouter)
router.use(errorHandler)

module.exports = router