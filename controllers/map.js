const Map = require('../models/Map')

module.exports = {
    index: (req, res) => Map.find({})
        .then(map => res.json(map)),

    show: (req, res) => Map.find({ name: req.params.name })
        .then(map => res.json(map)),

    showId: (req, res) => Map.findById({ _id: req.params.id })
        .then(map => res.json(map)),
}