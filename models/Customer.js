import mongoose from "mongoose";
import validator from "validator";

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Please provide lastname"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    address: {
      type: String,
      maxlength: 75,
      trim: true,
    },
    city: {
      type: String,
      maxlength: 25,
      trim: true,
    },
    rfc: {
      type: String,
      minlength: 12,
      maxlength: 13,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide a phone number"],
      validate: {
        validator: validator.isMobilePhone,
        message: "Please provide a valid phone number",
      },
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Customer", CustomerSchema);
