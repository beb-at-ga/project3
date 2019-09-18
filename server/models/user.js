let bcrypt = require('bcryptjs')
let mongoose = require('mongoose')

// Define our projectSchema
let projectSchema = new mongoose.Schema({
    name: String,
    starteDate: String,
    endDate: String,
    link: String,
    about: String
})

let userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 1
    },
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32
    },
    profilePic: String,
    age: Number,
    education: String,
    experience: String,
    interestLevel: String,
    urgency: Boolean,
    bio: String,
    zipcode: Number,
    menteeTag: [],
    mentorTag: [],
    projects: [projectSchema]
})

// USe BCrypt to hash
userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 12)
    next()
})

// Ensure password doesn't get sent with rest of data
userSchema.set('toJSON', {
    transform: (doc, user) => {
        delete user.password
        return user
    }
})

// Create helper function to compare password hashes
userSchema.methods.isAuthenticated = function (typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)