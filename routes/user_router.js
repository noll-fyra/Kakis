const express = require('express')
const userController = require('../controllers/user_controller')
const messageRouter = require('./message_router')
const isLoggedIn = require('../middleware/isLoggedIn')
const multer = require('multer')
const upload = multer({dest: './uploads/'})

const router = express.Router()

router.get('/signup', userController.signup)
router.post('/signup', userController.create)

router.get('/member/:id', userController.profile)

router.use(isLoggedIn)
router.use(`/message`, messageRouter)

router.get(`/profile`, userController.show)
router.get(`/edit`, userController.edit)
router.put('/edit', upload.single('myFile'), userController.update)


module.exports = router
