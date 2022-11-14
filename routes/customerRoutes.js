import express from "express";
import {
  addClient,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customerControllers.js";
const router = express.Router();

router.route("/").post(addClient).get(getCustomers);
router.route("/:id").patch(updateCustomer).delete(deleteCustomer);

export default router;
