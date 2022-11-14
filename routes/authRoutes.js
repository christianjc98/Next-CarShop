import express from "express";
const router = express.Router();

import {
  register,
  login,
  logout,
  refresh,
} from "../controllers/authControllers.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/refresh").get(refresh);

export default router;
