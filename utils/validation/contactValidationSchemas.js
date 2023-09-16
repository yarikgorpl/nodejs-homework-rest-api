const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMongooseError } = require("../../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionkey: false, timestamps: false }
);

contactSchema.post("save", handleMongooseError);

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const updateStatusContactSchema = Joi.object({
  fovorite: Joi.boolean(),
});
const schemas = { addContactSchema, updateStatusContactSchema };
const Contact = model("contact", contactSchema);
module.exports = { Contact, schemas };
