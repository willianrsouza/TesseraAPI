const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://Willian:root@cluster0.bruyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('DATABASE: 100% ')
})


module.exports = mongoose