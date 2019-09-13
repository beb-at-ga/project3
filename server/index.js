// required
let express = require('express')
let cors = require('cors')

//instance
let app = express()

//middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))
app.use(cors())

// controllers


//routes
app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' })
})


// listen
app.listen(process.env.PORT || 3000, () => {
    console.log('Hear, Here!')
})