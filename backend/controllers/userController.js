const userService = require("../services/userServices");

class userController {
  /**
   * @author Maruf
   * @method  POST - register
   * @desc Feature: signs up the user
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async create(req, res) {
    try {
      const user = await userService.create(req.body); // call user service to register user
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
   
  /**
   * @author Maruf
   * @method  GET - getAllUsers
   * @desc Feature: Get All Users
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers(); // call user service to get all users
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
   

   /**
   * @author Maruf
   * @method  DELETE - deleteUser
   * @desc Feature: Delete A specific user
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns empty data
   */
    static async deleteUser(req, res) {
      try {
        const { userId } = req.params;
        const deleted = await userService.deleteUser(userId); // call user service to register user
        return res.status(200).json(deleted);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    }

}

module.exports = userController;

/* 


*/
