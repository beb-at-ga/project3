let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/peer2here', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})



module.exports.User = require('./user')