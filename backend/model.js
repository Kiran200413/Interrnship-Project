const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    usermail:String,
    mobile:Number,
    pass:String
})

module.exports = mongoose.model('edutechUser', productSchema);