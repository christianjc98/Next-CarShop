import mongoose from "mongoose";
import validator from "validator";

const CarSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "Please provide car brand"],
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    model: {
      type: String,
      required: [true, "Please provide car model"],
      maxlength: 50,
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Please provide model year"],
    },
    serialNumber: {
      type: String,
      required: [true, "Please provide a car serial number"],
    },
    plates: {
      type: String,
      required: [true, "Please provide plates"],
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: [true, "Please provide Customer"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Car", CarSchema);
