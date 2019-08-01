const axios = require("axios")
const mapModel = require('../models/Map')

const url = {
  version: "https://ddragon.leagueoflegends.com/realms/na.json",
  head: "http://ddragon.leagueoflegends.com/cdn/",
  tail: "/data/en_US/",
  map: "map.json"
}

let versions = {
  map: ""
}
let json2 = []
let index = 0

axios.get(url.version)

  .then(r => {
    //Get versions
    versions.map = r.data.n.map
  })

  .then(r => {
    axios.get(
      //Get map data
      url.head +
      versions.map +
      url.tail +
      url.map
    )

      .then(r => {
        return r.data.data
      })

      .then(json => {
        Object.keys(json).forEach(map => {

          json2[index] = {
            name: json[map].MapName,
            key: json[map].MapId,
            items: []
          }


          index++
          return (json2)
        })
      })

      .then(r => {
        mapModel.deleteMany()

          .then(r => {
            mapModel.create(json2)

              .then(r => {
                console.log(r)
              })
          })
      })
  })
