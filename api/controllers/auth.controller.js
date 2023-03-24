const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
//Aqui hacemos el hash
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
    try {
        //Aqui hacemos el hash
        req.body.password = bcrypt.hashSync(req.body.password, /*Numero de veces que se hace el hash*/10)
        const user = await User.create(req.body)
        return res.status(200).json(user)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Error: Cannot create user')
    }
}


const login = async (req, res) => {
    try {
        const user = await User.findOne({where: 
            {email: req.body.email
            }})
        if(!user) {
            return res.status(500).send('Error: Empty mail or password')
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if(!result) {
                return res.status(403).send('Error: Empty mail or password')
            }
            // Mientras estamos en desarrollo no le ponemos tiempo de expiracion al token
            const token = jwt.sign({ email: user.email }, /*process.env.SECRET*/'secret', {expiresIn: '7h'})
            


            return res.status(200).json({ token })
        })
    } 
    catch (err) {
        console.error(err)
    }
}


module.exports = {
    signUp,
    login
}