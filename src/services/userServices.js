const userEntity = require("../entities/userEntity");
const userDao = require("../data-access/userDao"); 

class userService {
  static async create(userData) {
    try {
      // make a new user object with inputed data
      const entity = new userEntity(userData);
      const errors = await entity.validateUserCreation();
      if (errors && errors.details) throw new Error(errors.details[0].message);
      // check if the user already exists
      const userExist = await userDao.findByUserName(entity.getUserName());
      if (userExist) throw new Error("User name already exist");

      const namePrefix = `${entity.getfirstName()[0].toUpperCase()}${entity.getlastName()[0].toUpperCase()}`;
      console.log(namePrefix);
      // if user does not exist, create the user
      const newUser = await userDao.create({
        namePrefix,
        firstName: entity.getfirstName(),
        lastName: entity.getlastName(),
        userName: entity.getUserName(),
        dob: entity.getDOB()
      });
      // if user failed to create, throw error
      if (!newUser) throw new Error("User not Created");
      return { newUser };
    } catch (error) {
      throw new Error(error.message);
    }
  } 

  static async getAllUsers() {
    try { 
        const usersFound = await userDao.findAll();
        return { message: "success", usersFound };
       
    } catch (error) {
      throw new Error(error.message);
    }
  } 

  static async deleteUser(userId) {
    try { 
        const userFound = await userDao.findById(userId);
        if (!userFound) throw new Error("Sorry, user not found!")
        await userDao.remove(userId);
        return {message: "You deleted the user successfully"};  
    } catch (error) {
      return { error: error.message }
      }
  }
}

module.exports = userService;
