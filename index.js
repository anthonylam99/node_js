require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const Joi = require('joi')
const config = require('config')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(helmet())

console.log(app.get('env'))
console.log(`Application Name: ${config.get('name')}`)
console.log(`Host mail: ${config.get('mail.host')}`)


if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
    console.log('Morgan enabled.....')
}

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}....`)
})
