const schemas = require("./contactValidationSchemas");
const Contact = require("./mongooseValidationSchema");
const User = require("./userValidationSchema");
const {
  registrationValidationSchema,
  loginValidationSchema,
} = require("./authValidationSchema");

module.exports = {
  Contact,
  schemas,
  User,
  registrationValidationSchema,
  loginValidationSchema,
};
