const mongoose = require('mongoose');

const connectdb = async() => {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    }
    catch(err) {
        console.error("mongodb not connected",err.message);
    }
};
module.exports = connectdb;