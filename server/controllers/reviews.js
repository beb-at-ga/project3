// required
let router = require('express').Router()
let db = require('../models')

//GET /reviews
router.get('/', (req, res) => {
    db.Review.find()
    .then(reviews => {
        res.send(reviews)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({ message: 'Database asleep?' })
    })
})


//GET /reviews/:id
router.get('/:id', (req, res) => {
    db.Review.findById(req.params.id)
    .then(review => {
        if(review) {
            res.send(review)
        }
        else {
            res.status(404).send({ message: 'Resource Not Located'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({ message: 'Service Unavailable' })
    })
})

//POST /reviews
router.post('/', (req, res) => [
    db.Review.create(req.body)
    .then(review => {
        res.status(201).send(review)
    })
    .catch((err) => {
        console.log(err)
        if (err.name === 'ValidationError') {
            res.status(406).send({ message: 'Validaiton Error' })
        }
        else {
            res.status(503).send({ message: 'Database or Server Error' })
        }
    })
])

//PUT /reviews/:id
router.put ('/:id', (req, res) => {
    db.Review.findOneAndUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(editedReview => {
        res.send(editedReview)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({ message: 'Server Error'})
    })
})

//DELETE/reviews/:id
router.delete('/:id', (req, res) => {
    db.Review.findbyIdAndDelete(req.params.id)
    ,then(() => {
        res.status(204).send()
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({ message: 'Server Error' })
    })
})

module.exports = router