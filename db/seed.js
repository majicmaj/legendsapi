const championJSON = require('./data/champion.json')
const championModel = require('../models/champion')

let championData
championModel.deleteMany({}).then(
    x => {
        championData = Object.values(championJSON.data).map(
            champion => {
                let schema = {
                    key: champion.key,
                    name: champion.name,
                    title: champion.title,
                    manaType: champion.partype,
                    stats: {
                        //Health Points
                        health: {

                            hp: champion.stats.hp,
                            hpincrement: champion.stats.hpperlevel,
                            hpregen: champion.stats.hpregen,
                            hpregenincrement: champion.stats.hpregenperlevel,

                        },
                        //Mana Points
                        mana: {

                            mp: champion.stats.mp,
                            mpincrement: champion.stats.mpperlevel,
                            mpregen: champion.stats.mpregen,
                            mpregenincrement: champion.stats.mpregenperlevel,

                        },
                        //Attack
                        attack: {

                            damage: champion.stats.attackdamage,
                            damageIncrememnt: champion.stats.attackdamageperlevel,
                            speed: {
                                offset: champion.stats.attackspeedoffset,
                                speedIncrement: champion.stats.attackspeedperlevel
                            },
                            crit: {
                                chance: champion.stats.crit,
                                critIncremment: champion.stats.critperlevel
                            },
                            range: champion.stats.attackrange

                        },
                        //Defense
                        defense: {

                            armor: {
                                base: champion.stats.armor,
                                armorIncrement: champion.stats.armorperlevel
                            },
                            magicResist: {
                                base: champion.stats.spellblock,
                                magicResistIncrement: champion.stats.spellblockperlevel
                            }

                        },
                        //Other
                        moveSpeed: champion.stats.movespeed
                    }
                }
                return schema
            }
        )
    }
).then(x => {
    championModel.collection.insert(championData).then(res => {
        console.log(res)
    })
})