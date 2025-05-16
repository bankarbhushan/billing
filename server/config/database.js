const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  // mongoose.connect("mongodb://localhost:27017/Billsystem");
  mongoose.connect(
    "mongodb+srv://Bhushan:bhushan@cluster0.fxsvhhy.mongodb.net/Billsystem"
  );
};

module.exports = connectDB;
