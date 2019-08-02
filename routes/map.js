const express = require('express')
const router = express.Router()
const mapController = require('../controllers/map')

router.get('/', mapController.index)
router.get('/name/:name', mapController.show)
router.get('/id/:id', mapController.showId)

module.exports = router