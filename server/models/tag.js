let mongoose = require('mongoose')


let tagSchema = new mongoose.Schema({
    tagName: {
        type: String,
        required: true,
        minlength: 1
    }
})

module.exports = mongoose.model('Tag', tagSchema)