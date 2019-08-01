const mongoose = require('../db/connection')
const ItemSchema = new mongoose.Schema({
        name: String,
        key: Number,
        maps: [
                {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Map'
                }
        ]
})

module.exports = mongoose.model("Item", ItemSchema)