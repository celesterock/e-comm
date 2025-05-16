const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb:3.148.238.46//:27017/ecommerceDB");
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
