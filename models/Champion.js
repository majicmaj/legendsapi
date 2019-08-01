const mongoose = require('../db/connection')

const CharacterSchema = new mongoose.Schema({
        name: String,
        key: Number,
        title: String,
        lore: String,
        info: {
                attack: Number,
                defense: Number,
                magic: Number,
                difficulty: Number
        }
})

module.exports = mongoose.model("Champion", CharacterSchema)