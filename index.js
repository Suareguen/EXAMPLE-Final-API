require('dotenv').config()
const morgan = require('morgan')

const express = require('express')
const api = express()




const connection = require('./database')

const router = require('./api/router')

api.use(morgan('dev'))
api.use(express.json())
api.use('/api', router)

api.listen(process.env.PORT, async (err) => {
    if (err) throw new Error(`Caanot initialize Express on Port ${process.env.PORT}`)

    console.info(`Netflix API listen port ${process.env.PORT}`)
    try {
        await connection.authenticate()
        await connection.sync({alter: true})
        console.info('Connected to Netflix DataBase!')
    } catch (error) {
        throw new Error('Cannot connect to DataBase: ', error)
    }
})


