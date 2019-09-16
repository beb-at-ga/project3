//required
let router = require('express').Router()
let db = require('../models')

//Get /messages
router.get('/', (req, res) => {
    db.Message.find()
    .then(messages => {
        res.send(messages)
    })
        .catch(err => {
            console.log(err)
            res.status(503).send({ message: 'Database asleep?' })
        })
})

