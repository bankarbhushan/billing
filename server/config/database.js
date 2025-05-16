const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  mongoose.connect("mongodb://localhost:27017/Billsystem");
};

module.exports = connectDB;
