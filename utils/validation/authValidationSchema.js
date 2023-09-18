const Joi = require("joi");
const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userSchemas = { registerSchema, loginSchema };

module.exports = userSchemas;
