const express = require('express')
const router = express.Router()
const championController = require('../controllers/champion')

router.get('/', championController.index)
router.get('/name/:name', championController.show)
router.post('/', championController.create)
router.put('/:name', championController.edit)
router.delete('/:name')

module.exports = router