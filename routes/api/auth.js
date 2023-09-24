const express = require("express");

const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  registrationValidationSchema,
  loginValidationSchema,
  emailValidationSchema,
} = require("../../utils/validation");

const router = express.Router();

router.post("/register", validateBody(registrationValidationSchema), register);
router.get("/verify/:verificationCode", verifyEmail);
router.post("/verify", validateBody(emailValidationSchema), resendVerifyEmail);

router.post("/login", validateBody(loginValidationSchema), login);

router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout);
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
