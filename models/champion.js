const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const CharacterSchema = new Schema({
    id: String,
    name: String,
    title: String,
    manaType: String,
    stats: {
        //Health Points
        health: {

            hp: Number, 
            hpincrement: Number,
            hpregen: Number,
            hpregenincrement: Number

        },
        //Mana Points
        mana: {

            mp: Number,
            mpincrement: Number,
            mpregen: Number,
            mpregenincrement: Number

        },
        //Attack
        attack: {

            damage: Number,
            damageIncrememnt: Number,
            speed: {

                offset: Number,
                speedIncrement: Number

            },
            crit: {

                chance: Number,
                critIncremment: Number

            },

            range: Number
        },
        //Defense
        defense: {

            armor: {

                base: Number,
                armorIncrement: Number

            },
            magicResist: {

                base: Number,
                magicResistIncrement: Number

            }

        },
        //Other
        moveSpeed: Number
    }
})

module.exports = mongoose.model("Champion", CharacterSchema)