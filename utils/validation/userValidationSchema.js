const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../../helpers");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      uniqe: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    avatarURL: { type: String, required: true },
    token: { type: String, default: "" },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: false }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
