const  mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:String
});
module.exports = mongoose.model('Card',cardSchema);