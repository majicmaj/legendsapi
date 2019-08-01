const axios = require("axios")
const championModel = require('../models/Champion')

const url = {
  version: "https://ddragon.leagueoflegends.com/realms/na.json",
  head: "http://ddragon.leagueoflegends.com/cdn/",
  tail: "/data/en_US/",
  champion: "champion.json"
}

let versions = {
  champion: ""
}
let json2 = []
let index = 0

axios.get(url.version)

  .then(r => {
    //Get versions
    versions.champion = r.data.n.champion
  })

  .then(r => {
    axios.get(
      //Get champion data
      url.head +
      versions.champion +
      url.tail +
      url.champion
    )

      .then(r => {
        return r.data.data
      })

      .then(json => {
        Object.keys(json).forEach(champion => {
          json2[index] = {
            name: json[champion].name,
            key: json[champion].key,
            title: json[champion].title,
            lore: json[champion].blurb,
            info: {
              attack: json[champion].info.attack,
              defense: json[champion].info.defense,
              magic: json[champion].info.magic,
              difficulty: json[champion].info.difficulty
            }
          }
          index++
          return (json2)
        })
      })

      .then(r => {
        championModel.deleteMany()

          .then(r => {
            championModel.create(json2)

            .then(r=> {
              console.log(r)
            })
          })
      })
  })
