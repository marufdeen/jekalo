const userModel = require("../models/userModel");

const userDao = {
  async findAll() {
    const result = await userModel.find();
    return result;
  },

  async findByUserName(userName) {
    const result = await userModel.findOne({ userName });
    return result;
  },

  async findById(userId) {
    const result = await userModel.findById(userId);
    return result;
  },

  async create(userData) {
    const createUser = await userModel(userData);
    const newUser = await createUser.save();
    if (newUser) return newUser;
    return false;
  },
 
  async remove(userId) {
    await userModel.deleteOne({ _id: userId });
    return "You deleted the user successfully";
  },
};

module.exports = userDao;
