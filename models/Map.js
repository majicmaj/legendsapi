const mongoose = require('../db/connection')

const MapSchema = new mongoose.Schema({
        name: String,
        key: Number
})

module.exports = mongoose.model("Map", MapSchema)