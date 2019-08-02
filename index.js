const express = require('express')
const parser = require('body-parser')
const app = express()

app.use(parser.json())

app.use('/', require('./routes/champion'))
app.use('/champion', require('./routes/champion'))
app.use('/item', require('./routes/item'))
app.use('/map', require('./routes/map'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});