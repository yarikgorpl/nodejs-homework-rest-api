const Joi = require("joi");
const registrationValidationSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const loginValidationSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = { registrationValidationSchema, loginValidationSchema };
