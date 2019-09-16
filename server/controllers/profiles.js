// create router adn reference to models
let router = require('express').Router()
let db = require('../models');

// GET /profiles/:id
router.get('/:id', (req, res) => {
    db.User.findById(req.params.id)
    .then(user => {
        if(user) {
            res.send(user)
        }
        else {
            res.status(404).send({ message: 'Resource Not Located'})
        }
    })
    .catch (err => {
        console.log(err)
        res.status(503).send({ message: 'Service Unavailable' })
    })
})

// PUT /profiles/:id
router.put('/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(editedUser => {
        res.send(editedUser)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({ message: 'Server Error' })
    })
})


// DELETE /profiles/:id
router.delete('/:id', (req, res) => {
    db.User.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(204).send()
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({ message: 'Server Error'})
    })
})



module.exports = router