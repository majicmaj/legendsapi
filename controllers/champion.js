const Champion = require('../models/Champion')

module.exports = {
    index: (req, res) => Champion.find({})
        .then(champion => res.json(champion)),

    show: (req, res) => Champion.find({ name: req.params.name })
        .then(champion => res.json(champion)),

    create: (req, res) => Champion.create(req.body)
        .then(champion => res.json(champion)),

    edit: (req, res) => Champion.findOneAndUpdate({name: req.params.name}, req.body)
    .then(champion => res.json(champion)),

    delete: (req, res) => Champion.delete({name: req.params.name})
    .then(champion=> res.json(champion))
}