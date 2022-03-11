const { validationResult } = require("express-validator")

const CustomError = require("../errors/index")

function checkForExpressValildatorErrors(req) {
  const errors = validationResult(req)
  if (errors.errors.length) {
    const errorsObj = errors.errors.reduce((acc, cur) => {
      acc[cur.param] = cur.msg
      return acc
    }, {})

    throw new CustomError.BadRequestError("Errors occurred", errorsObj)
  }
}

module.exports = {
  checkForExpressValildatorErrors,
}
