//required
let router = require('express').Router()
let db = require('../models')




//GET /messages
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


//POST /messages
router.post('/', (req, res) => {
    console.log(req.body)
    db.Message.create(req.body)
    .then(message => {
        res.status(201).send(message)
    })
})

module.exports = router

