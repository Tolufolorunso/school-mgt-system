const User = require('../../models/user.model')
const CustomError = require('../../errors/index')
const { createJWT } = require('../../utils/jwt')

const { StatusCodes } = require('http-status-codes')
const moment = require('moment')
const {
  checkForExpressValildatorErrors,
} = require('../../utils/express.validator')

async function register(req, res) {
  // Check for errors
  checkForExpressValildatorErrors(req)

  const { email } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: false,
      errors: {
        email: 'Email is already exist',
      },
      errorMessage: 'Email is already exist',
    })
  }

  const isFirstAccount = (await User.countDocuments({})) === 0

  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: isFirstAccount ? 'Administrator' : req.body.role,
    isAdmin: isFirstAccount ? true : false,
    request: isFirstAccount ? true : false,
    created: moment(Date.now()).format('LL'),
  }

  const user = await User.create(newUser)

  return res.status(StatusCodes.CREATED).json({
    status: true,
    message: `${user.name}, Your account creation was successful`,
  })
}

async function login(req, res) {
  const { email, password } = req.body

  // Check for errors
  checkForExpressValildatorErrors(req)

  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }

  if (!user.request) {
    throw new CustomError.UnauthenticatedError(
      'You have not been approved. Contact your administrator'
    )
  }

  const isPasswordCorrect = await user.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }
  const userTokenObj = {
    userId: user._id,
    name: user.name,
    role: user.role,
  }

  const token = createJWT({ payload: userTokenObj })

  user.password = undefined
  user.privileges = undefined

  res.status(StatusCodes.OK).json({
    status: true,
    user,
    token,
  })
}

module.exports = {
  register,
  login,
}
