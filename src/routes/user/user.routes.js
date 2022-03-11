const express = require("express")
const { body, check } = require("express-validator")
const User = require("../../models/user.model")

const { register, login } = require("./user.controllers")

const router = express.Router()

router.route("/register").post(
  [
    check("email").isEmail().withMessage("please enter a valid email."),
    body("name", "Name field is required").trim().isLength({ min: 3 }),
    body("role", "Role field is required").trim().isLength({ min: 3 }),
    body(
      "password",
      "Please enter a password with only number and text and at least 3 characters."
    )
      .isLength({ min: 3 })
      .isAlphanumeric(),
    body("passwordConfirm").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords have to match")
      }
      return true
    }),
  ],
  register
)

router
  .route("/login")
  .post(
    [
      check("email").isEmail().withMessage("Please enter a valid email."),
      body("password", "Please enter your password, atleast 5 characters")
        .isLength({ min: 3 })
        .isAlphanumeric(),
    ],
    login
  )

module.exports = router
