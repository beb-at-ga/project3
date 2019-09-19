let mongoose = require('mongoose')


let messageSchema = new mongoose.Schema({

    senderId:  String,
    recipId: String,
    msgBody: String,
    
})

module.exports = mongoose.model('Message', messageSchema)