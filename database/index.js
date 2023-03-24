const { Sequelize } = require('sequelize')

//La instancia de la conexión que nos sirve para conectarnos a la Base de Datos
const connection = new Sequelize(process.env.DB_NAME, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false
}) 


module.exports = connection