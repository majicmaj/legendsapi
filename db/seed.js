const itemModel = require('../models/Item')
const mapModel = require('../models/Map')
const axios = require("axios")
const url = {
        version: "https://ddragon.leagueoflegends.com/realms/na.json",
        head: "http://ddragon.leagueoflegends.com/cdn/",
        tail: "/data/en_US/",
        map: "map.json",
        item: "item.json",
}
let versions = {
        map: "",
        item: ""
}
let itemMaps = []
let itemMaps2 = []
let itemNames = []

axios.get(url.version)

        .then(r => {
                //Get versions
                versions.map = r.data.n.map
                versions.item = r.data.n.item
        })

        .then(r => {
                axios.get(
                        //Get item data
                        url.head +
                        versions.item +
                        url.tail +
                        url.item
                )

                        .then(r => {
                                return (r.data.data)
                        })

                        .then(json => {
                                let keys = Object.keys(json)
                                for (let index = 0; index < keys.length; index++) {
                                        let names = Object.keys(json[keys[index]].maps)
                                        let values = Object.values(json[keys[index]].maps)
                                        itemNames[index] = json[keys[index]].name
                                        itemMaps[index] = []
                                        itemMaps2[index] = []
                                        for (let number = 0; number < names.length; number++) {
                                                if (values[number]) {
                                                        itemMaps[index].push(names[number])
                                                }
                                        }
                                }
                                return itemMaps
                        })

                        .then(r => {
                                for (let index = 0; index < itemNames.length; index++) {
                                        for (let i = 0; i < itemMaps[index].length; i++) {
                                                mapModel.findOne({
                                                        key: itemMaps[index][i]
                                                }, (e, r) => {
                                                        itemMaps2[index][i] = (r._id)
                                                })

                                                        .then(r => {
                                                                let filter = {name: itemNames[index]}
                                                                let update = {maps: itemMaps2[index]}
                                                                itemModel.findOneAndUpdate(filter, update, { new: true }).then(r => { console.log(index + ':---' + r.maps + '---' + itemNames.length)})
                                                        })
                                        }
                                }
                        })
        })