require('dotenv').config()
require('express-async-errors')

const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const notFoundMiddleware = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

const app = express()

app.use(cors())

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// Body Parser Middleware
app.use(express.json())

// Static Folder
app.use(express.static(path.join(__dirname, '..', 'public')))

// Routes
app.use('/users', require('./routes/user/user.routes'))
app.use('/students', require('./routes/student/student.route'))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

module.exports = app
