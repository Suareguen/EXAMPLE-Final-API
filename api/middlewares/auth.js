const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
//Para saber que el usuario es quien dice ser
const checkAuth = (req, res, next) => {
    //sacara el token de la cabecera
    const token = req.headers.token
    //ahora recuperamos el payload del token - que es el obejeto con el token
    jwt.verify(token,/*process.env.SECRET */ 'secret', (err , payload/*lo que sacaamos del token*/ ) => {
        if(err) {
            return res.status(400).send('Invalid token')
        }
            const user = User.findOne({where: 
            {
                //Aqui nos muestra el email que se contiene en el token
                email: payload.email
            }})
            if(!user) {
                return res.status(400).send('Invalid token')
            }
            next()
        })
        //console.log(payload)
    }

module.exports = {
    checkAuth
}