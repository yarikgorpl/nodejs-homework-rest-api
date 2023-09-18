const schemas = require("./contactValidationSchemas");
const Contact = require("./mongooseValidationSchema");
const User = require("./userValidationSchema");
const userSchemas = require("./authValidationSchema");

module.exports = { Contact, schemas, User, userSchemas };
