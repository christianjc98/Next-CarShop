import express from "express";
import { addCar } from "../controllers/carController.js";
const router = express.Router();

router.route("/").post(addCar);

export default router;
