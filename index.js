const express = require('express')
const parser = require('body-parser')
const app = express()

app.use(parser.json())

app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))