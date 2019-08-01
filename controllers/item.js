const Item = require('../models/Item')

module.exports = {
    index: (req, res) => Item.find({})
        .then(item => res.json(item)),

    show: (req, res) => Item.find({ name: req.params.name })
        .then(item => res.json(item)),

    create: (req, res) => Item.create(req.body.item)
        .then(item => {res.json(item)}),

    edit: (req, res) => Item.findOneAndUpdate({ name: req.params.name }, req.body)
        .then(item => res.json(item)),

    delete: (req, res) => Item.delete({ name: req.params.name })
        .then(item => res.json(item))
}