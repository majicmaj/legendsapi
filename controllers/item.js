const Item = require('../models/Item')

module.exports = {
    index: (req, res) => Item.find({})
        .then(item => res.json(item)),

    show: (req, res) => Item.find({ name: req.params.name })
        .then(item => res.json(item)),
}