const router = require('express').Router()
const authRouter = require('./auth.route')
const videoRouter = require('./videos.route')


router.use('/auth', authRouter)
router.use('/video', videoRouter)



module.exports = router