const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/mythreadapp";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Database connected successfully");
    } catch (error) {
        console.error('Mongodb connectin failed:',error)
    }
};
module.exports = connectDB;