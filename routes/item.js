const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item')

router.get('/', itemController.index)
router.get('/name/:name', itemController.show)

module.exports = router