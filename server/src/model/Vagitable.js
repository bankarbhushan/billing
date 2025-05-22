const mongoose = require("mongoose");

const vagitableSchema = mongoose.Schema({
  producNameEnglish: {
    type: String,
    require: true,
  },
  producNameHinglish: {
    type: String,
    require: true,
  },
  producMarathi: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("vagitable", vagitableSchema);
