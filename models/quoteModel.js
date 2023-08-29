const mongoose = require('mongoose')

const Quote = mongoose.model('Quote', {
    music: String,
    quote: String,
    artist: String,
})

module.exports = Quote