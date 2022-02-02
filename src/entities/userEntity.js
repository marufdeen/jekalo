const validate = require('../helpers/userValidator');

class user {
    constructor(userData) {
        this.userData = userData;
    }
    getfirstName() {
        return this.userData.firstName;
    }

    getlastName() {
        return this.userData.lastName;
    }

    getUserName() {
        return this.userData.userName;
    }

    getDOB() {
        return this.userData.dob;
    }

    async validateUserCreation() { 
        const { error } =  validate.validateUserCreation(this.userData)
        if (error) return error;
        return this;
    } 
 
     
}

module.exports = user