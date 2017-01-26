const express= require('express')
const messageController = require('../controllers/message_controller')
const chatboxController = require('../controllers/chatbox_controller')
const router = express.Router({mergeParams: true})

router.post('/', chatboxController.create)

router.get('/:id', messageController.list)
router.post('/:id', messageController.create)

module.exports = router
