const express = require('express')
const app = express()

const mongodb = require('./config/mongodb')
mongodb.connect()
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log(err))

const logger = require('morgan')
app.use(logger('dev'))

const cors = require('cors');
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const rotas = require('./config/routes')
rotas(app)

app.use((req, res, next) => {
    return res.status(404)
})

app.use((err, req, res, next) => {
    return res.status(500)
})

module.exports = app