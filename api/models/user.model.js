const { Sequelize } = require('sequelize')
const connection = require('../../database')
const { DataTypes } = require('sequelize')


const User = connection.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false 
    }
})


module.exports = User