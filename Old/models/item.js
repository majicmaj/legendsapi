const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    id: String,
    name: String,
    description: String,
    plainText: String,
    buildsInto: [
        {
            type: Schema.Types.id,
            ref: 'Item'
        }
    ]
})

module.exports = mongoose.model("Champion", CharacterSchema)