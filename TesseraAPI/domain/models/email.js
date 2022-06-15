const mongoose = require('../../infrastructure/db/connection');

const emailSchema = new mongoose.Schema({
    name: String,
    email: String,
})

const emailModel = mongoose.model('Email', emailSchema)

module.exports = emailModel