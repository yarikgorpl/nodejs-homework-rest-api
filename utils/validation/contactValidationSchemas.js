const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const updateStatusContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
const schemas = { addContactSchema, updateStatusContactSchema };

module.exports = schemas;
