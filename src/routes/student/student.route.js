const express = require("express")
const { addStudent } = require("./student.controller")
// const { body, check } = require('express-validator')

const studentRouter = express.Router()

studentRouter.post("/", addStudent)

module.exports = studentRouter
