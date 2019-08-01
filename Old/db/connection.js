const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/legend', {
    useNewUrlParser: true
})

module.exports = mongoose;