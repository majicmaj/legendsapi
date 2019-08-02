const express = require('express')
const parser = require('body-parser')
const app = express()

app.use(parser.json())

app.use('/champion', require('./routes/champion'))
app.use('/item', require('./routes/item'))
app.use('/map', require('./routes/map'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))