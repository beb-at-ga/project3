// create router and reference to models
let router = require('express').Router()
let db = require('../../models')

//GET all tags
router.get('/', (req, res) => {
    db.Tag.find()
    .then(tags => {
        res.status(201).send(tags)
    })
})

//POST to /tags
router.post('/', (req, res) => {
    db.Tag.create(req.body)
    .then(tag => {
        res.status(201).send(tag)
    })
});

//PUT to /tags/:id
router.put(':id', (req, res) => {
    db.Tag.findOneandUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(editedTag => {
        res.send(editedTag)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({ message: 'Server Error'})
    })
});

module.exports = router;
