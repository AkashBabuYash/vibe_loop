const mongoose = require("mongoose");

async function connectDB() {
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.DATABASE_URL;

    if (!mongoUri) {
        throw new Error("Missing MongoDB connection string. Set MONGO_URI or MONGODB_URI in your environment.");
    }

    await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Connected Successfully!");
}

module.exports = connectDB;