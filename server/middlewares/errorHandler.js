const errorHandler = async (err, req, res, next) => {
  const { name } = err
  let message = "Internal Server Error"
  let code = 500

  switch(name) {
    case "SequelizeValidationError":
      code = 400
      message = err.errors.map((error) => error.message)
      break
    case "NOT_FOUND_POST":
      code = 404
      message = "Post is not found"
      break
    default:
      break
  }

  res.status(code).json({ message })
}

module.exports = errorHandler