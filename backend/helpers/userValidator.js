const Joi = require("joi");

const validators = {};

validators.validateUserCreation = (userData) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(40).pattern(new RegExp("^[a-zA-Z-]+$")).required().messages({
      "string.base": "firstName must be string",
      "string.empty": "First name field is required",
      "string.min": "First Name can not be less than three alphabetical characters",
      "string.max": "First Name can not be more than forty alphabetical characters",
      "any.required": "firstName field is required",
      "string.pattern.base": "First name can only be alpahebtical characters"
  }),
    lastName: Joi.string().min(3).max(40).pattern(new RegExp("^[a-zA-Z-]+$")).required().messages({
      "string.base": "lastName must be string",
      "string.empty": "Last name field is required",
      "string.min": "Last Name can not be less than three alphabetical characters",
      "string.max": "Last Name can not be more than forty alphabetical characters",
      "any.required": "lastName field is required",
      "string.pattern.base": "Last name can only be alpahebtical characters"
  }),
    userName:  Joi.string().min(3).max(40).required().messages({
      "string.base": "userName must be string",
      "string.empty": "userName name field is required",
      "string.min": "userName Name can not be less than three alphabetical characters",
      "string.max": "userName Name can not be more than forty alphabetical characters",
  }), 
    dob: Joi.date().max("now").required().messages({
      "date.base": "Not a valid date",
      "any.required": "Date of birth is required",
      "date.max":  "Date of birth must be less than or equal to today"
    })
  });

  return schema.validate(userData);
}; 
     

module.exports = validators;
