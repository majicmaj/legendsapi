const axios = require("axios")
const itemModel = require('../models/Item')

const url = {
  version: "https://ddragon.leagueoflegends.com/realms/na.json",
  head: "http://ddragon.leagueoflegends.com/cdn/",
  tail: "/data/en_US/",
  item: "item.json"
}

let versions = {
  item: ""
}
let json2 = []
let index = 0

axios.get(url.version)

  .then(r => {
    //Get versions
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
        return r.data.data
      })

      .then(json => {
        Object.keys(json).forEach(item => {

          json2[index] = {
            name: json[item].name,
            key: json[item].key,
            maps: []
          }

          index++
          return (json2)
        })
      })

      .then(r => {
        itemModel.deleteMany()

          .then(r => {
            itemModel.create(json2)

            .then(r=> {
              console.log(r)
            })
          })
      })
  })
