let mongoose = require('mongoose')


let messageSchema = new mongoose.Schema({

    msgId: String,
    senderId:  String,
    recipId: String,
    msgBody: String,
    


})

module.exports = mongoose.model('Message', messageSchema)