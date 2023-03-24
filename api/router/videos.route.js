const router = require('express').Router()
const { checkAuth } = require('../middlewares/auth')


router.get('/', checkAuth, (req, res) =>{
    res.send('Aqui estan los videos')
})


module.exports = router