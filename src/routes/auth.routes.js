import { Router } from "express";
import {
  registerUser,
  login,
  logoutUser,
  verifyEmail,
  refreshAccessToken,
  forgotPasswowrdRequest,
  resetForgotPassword,
  getCurrentUser,
  changeCurrentPassword,
  resendEmailVerification,
} from "../controllers/auth.controllers.js";

import { validate } from "../middlewares/validatorMiddleware.js";
import {
  userRegisterValidator,
  userLoginValidator,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator,
  userChangeCurrentPasswordValidator,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";

const router = Router();
//UnProtected
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router
  .route("/forgot-password")
  .post(userForgotPasswordValidator(), validate, forgotPasswowrdRequest);
router
  .route("/reset-password/:resetToken")
  .post(userResetForgotPasswordValidator, validate, resetForgotPassword);

//Protected
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").post(verifyJWT, getCurrentUser);
router
  .route("/change-password")
  .post(
    verifyJWT,
    userChangeCurrentPasswordValidator(),
    validate,
    changeCurrentPassword,
  );
router
  .route("/resend-email-verification")
  .post(verifyJWT, resendEmailVerification);

export default router;
