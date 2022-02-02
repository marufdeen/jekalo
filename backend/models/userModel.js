const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String, 
  userName: String,
  dob: String,
  namePrefix: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
